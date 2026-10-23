# AGENTS.md

## What this project is

Static quiz site: `index.html` + `style.css` + `script.js`. No backend, no build step,
no dependencies (`script.js` holds the questions and all game logic, including the
Web Audio sounds). Nothing needs installing before it runs.

## Running it in the sandbox

```bash
docker compose -f docker-compose.base44.yml up -d      # web entry point on host port 3000
docker compose -f docker-compose.base44.yml logs -f web
```

`web` runs `node .base44/dev-server.mjs` on a plain `node:22-alpine` image with the
repo bind-mounted at `/app` — the served files are always the cloned source, never a
prebuilt bundle. The dev server has no dependencies and injects a live-reload snippet
(SSE, polling watcher) into HTML responses, so editing `index.html`, `style.css` or
`script.js` refreshes the preview; a change to `.base44/dev-server.mjs` needs a
`docker compose -f docker-compose.base44.yml restart web`.

It also serves any Host header (the preview proxy rewrites `Host`), so no host
allowlist is needed, and it blocks path traversal.

## Notes / quirks

- `index.html` links `favicon.ico`, which is not in the repo → a harmless 404 in the
  browser console.
- `style.css` imports Quicksand from Google Fonts; without network access the page
  falls back to the system sans-serif font. Nothing else is loaded externally.
- `README.md` says 15 questions per game, but `demarrerQuiz()` plays the whole
  200-question pool; the counter in the UI shows `/200`.
- `style.css` styles a `body > center` wrapper that `index.html` does not have; the
  screens are direct flex children of `body`.

## Verifying

No tests. Open the preview on port 3000 and check the flow by hand: `▶ COMMENCER LE
QUIZ` on the welcome screen → a question with the 20 s countdown → answering reveals
the feedback colour and moves to the next question → the `⏸️ Pause` button hides the
question and freezes the timer → finishing the 200 questions shows the results screen
with the recap table.

## Secrets

None. The app needs no environment variables or external credentials (`.base44/environment.json`
lists an empty `secrets` array).
