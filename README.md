# 🧠 Quiz de Culture Générale

Un quiz interactif en HTML, CSS et JavaScript vanilla, jouable directement dans le navigateur.
Teste tes connaissances sur **200 questions** variées (histoire, géographie, sciences, arts, sport, cinéma…) avec un chronomètre, une pause, des sons, plusieurs niveaux de difficulté et une sauvegarde de partie.

---

## 🚀 Lancement rapide

1. Télécharge ou clone ce dépôt.
2. Ouvre le fichier `index.html` dans n’importe quel navigateur moderne.
3. Le jeu démarre immédiatement, aucune installation requise.

---

## ✨ Fonctionnalités

- 🎲 **200 questions** réparties en 12 thèmes (histoire, géographie, sciences, littérature, arts, musique, cinéma, sports, nature, technologie, culture, mythologie).
- 🎚️ **3 niveaux de difficulté** : Facile (10 questions · 25 s), Moyen (20 questions · 20 s), Difficile (30 questions · 15 s).
- 🔀 **Réponses mélangées** à chaque partie (aucun biais de position).
- ⏱️ **Chronomètre** fiable, basé sur l’horloge réelle (résiste au passage en arrière-plan de l’onglet).
- ⏸️ **Bouton Pause / Reprendre** pour interrompre le temps sans tricher.
- 📊 **Barre de progression** pendant la partie.
- 🔊 **Sons** de feedback (juste/faux) via l’API Web Audio (contexte audio réutilisé).
- 🏆 **Écran de résultats détaillé** : score, mention (au pourcentage), récapitulatif question par question.
- 💾 **Sauvegarde et reprise de partie** via `localStorage` (bouton « Reprendre la partie »).
- 🥇 **Meilleurs scores** par difficulté, conservés localement.
- ⌨️ **Raccourcis clavier** : touches A, B, C, D ou 1, 2, 3, 4.
- 📱 **Design responsive** et accessible (focus visible, `aria-live`).

---

## 🛠️ Technologies

- **HTML5** : structure des écrans.
- **CSS3** : transitions, animations, responsive.
- **JavaScript (ES6+)** : logique du quiz, chronomètre, Web Audio API, `localStorage`, gestion du DOM.

Aucune bibliothèque JavaScript externe. Le projet tient dans trois fichiers (`index.html`, `style.css`, `script.js`), prêt à être hébergé gratuitement (GitHub Pages, Netlify, etc.).
Seule dépendance externe : la police *Quicksand* chargée via Google Fonts (facultative).

---

## 🎮 Comment jouer

1. Choisis une **difficulté** sur l’écran d’accueil.
2. Clique sur **Commencer le quiz** (ou **Reprendre la partie** si une sauvegarde existe).
3. Lis la question et choisis une réponse parmi les 4 propositions.
4. Le temps restant s’affiche en haut ; il dépend de la difficulté.
5. Utilise **⏸️ Pause** si besoin ; le temps s’arrête et la question est masquée.
6. À la fin, tu obtiens ton score, une mention et un tableau récapitulatif.

---

## ⚙️ Personnalisation

- **Modifier les questions** : édite le tableau `toutesLesQuestions` dans `script.js`.
- **Régler les difficultés** : modifie l’objet `DIFFICULTES` dans `script.js` (nombre de questions et temps par question).
- **Changer les thèmes visuels** : modifie les variables et règles CSS dans `style.css`.

---

## 📌 Améliorations futures (idées)

- [ ] Mode multijoueur local.
- [ ] Import/export de questions personnalisées (JSON).
- [ ] Classement en ligne avec Firebase.
- [ ] Version PWA installable et jouable hors-ligne.
- [ ] Explications (« le saviez-vous ») après chaque réponse.

---

## 🤝 Contribution

Les suggestions et améliorations sont bienvenues !
Ouvre une issue ou une pull request.

---

## 📜 Licence

Ce projet est libre de droits – fais-en ce que tu veux. Amuse-toi bien ! 😊

---

## 📁 Structure du projet

```
.
├── index.html   # Structure des écrans (accueil, question, résultats)
├── style.css    # Thème, animations, responsive
├── script.js    # Banque de questions + logique du jeu
├── favicon.svg  # Icône du site
└── README.md
```
