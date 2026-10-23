// Base44 sandbox dev server: serves the static quiz from the bind-mounted
// source directory and live-reloads the page when a source file changes.
// No dependencies, so it runs directly on a plain node image.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const port = Number(process.env.PORT || 3000);

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const RELOAD_PATH = '/__base44_livereload';
const RELOAD_SNIPPET = `<script>(function(){var s=new EventSource("${RELOAD_PATH}");s.onmessage=function(){location.reload();};})();</script>`;
const clients = new Set();

function broadcast() {
  for (const res of clients) res.write('data: reload\n\n');
}

// Polling watcher: reliable across bind mounts where inotify events can be missed.
for (const file of ['index.html', 'style.css', 'script.js']) {
  const target = path.join(root, file);
  let previous = fs.existsSync(target) ? fs.statSync(target).mtimeMs : null;
  fs.watchFile(target, { interval: 400 }, (current) => {
    if (current.mtimeMs !== previous) {
      previous = current.mtimeMs;
      broadcast();
    }
  });
}

function send(res, status, body, type = 'text/plain; charset=utf-8') {
  res.writeHead(status, { 'Content-Type': type, 'Cache-Control': 'no-store' });
  res.end(body);
}

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);

  if (urlPath === RELOAD_PATH) {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-store',
      Connection: 'keep-alive',
    });
    res.write(': connected\n\n');
    clients.add(res);
    req.on('close', () => clients.delete(res));
    return;
  }

  let filePath = path.join(root, urlPath);
  if (!filePath.startsWith(root + path.sep)) return send(res, 403, 'Forbidden');
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!fs.existsSync(filePath)) return send(res, 404, 'Not found');

  const type = TYPES[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
  if (type.startsWith('text/html')) {
    const html = fs.readFileSync(filePath, 'utf8');
    const withReload = html.includes('</body>')
      ? html.replace('</body>', `${RELOAD_SNIPPET}\n</body>`)
      : html + RELOAD_SNIPPET;
    return send(res, 200, withReload, type);
  }

  res.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-store' });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Base44 dev server: http://0.0.0.0:${port} (serving ${root})`);
});
