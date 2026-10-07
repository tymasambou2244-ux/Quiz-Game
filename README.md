# 🧠 Quiz de Culture Générale

Un quiz interactif en HTML, CSS et JavaScript vanilla, jouable directement dans le navigateur.  
Teste tes connaissances sur **200 questions** variées (histoire, géographie, sciences, arts, sport, cinéma…) avec un chronomètre, une pause et des sons.

![Aperçu](apercu.png)

---

## 🚀 Lancement rapide

1. Télécharge ou clone ce dépôt.
2. Ouvre le fichier `index.html` dans n’importe quel navigateur moderne.
3. Le jeu démarre immédiatement, aucune installation requise.

---

## ✨ Fonctionnalités

- 🎲 **200 questions** réparties en 10 thèmes (histoire, géographie, sciences, littérature, arts, musique, cinéma, sports, nature, technologie).
- ⏱️ **Chronomètre** de 20 secondes par question.
- ⏸️ **Bouton Pause / Reprendre** pour interrompre le temps sans tricher.
- 🔊 **Sons d’ambiance** et feedback sonore (juste/faux) via l’API Web Audio.
- 🎨 **Design moderne et responsive** avec animations CSS et dégradés.
- 🏆 **Écran de résultats détaillé** : score, mention, récapitulatif question par question.
- 🕹️ **Raccourcis clavier** (touches A, B, C, D ou 1, 2, 3, 4) pour répondre.
- 💾 **Sauvegarde locale** des meilleurs scores (optionnel).
- 🌗 **Sélecteur de thème** (sombre / clair / coloré) (optionnel).

---

## 🛠️ Technologies

- **HTML5** : structure sémantique et accessible.
- **CSS3** : transitions, animations, thèmes, responsive.
- **JavaScript (ES6+)** : logique du quiz, chronomètre, Web Audio API, gestion du DOM.

Aucune bibliothèque externe. Le tout tient dans un seul fichier, prêt à être hébergé gratuitement (GitHub Pages, Netlify, etc.).

---

## 🎮 Comment jouer

1. Clique sur **Commencer le quiz**.
2. Lis la question et choisis une réponse parmi les 4 propositions.
3. Tu as 20 secondes par question. Le temps restant s’affiche en haut.
4. Utilise le bouton **⏸️ Pause** si tu as besoin d’une pause ; le temps s’arrête et la question est masquée.
5. À la fin des 15 questions (tirées aléatoirement dans la base de 200), tu obtiens ton score final, une mention et un tableau récapitulatif.

Tout le code est contenu dans `index.html` pour faciliter le partage.

---

## ⚙️ Personnalisation

Tu peux facilement :
- **Modifier les questions** en éditant le tableau `toutesLesQuestions` dans le `<script>`.
- **Changer les thèmes visuels** en modifiant les variables CSS dans la balise `<style>`.
- **Désactiver la musique de fond** en supprimant ou commentant les appels à l’élément `<audio id="musiqueFond">`.
- **Ajuster le nombre de questions par partie** en changeant la limite dans `questionsMelangees` (actuellement 15 questions sont jouées, tu peux augmenter/diminuer).

---

## 📌 Améliorations futures (idées)

- [ ] Ajout d’un mode multijoueur local.
- [ ] Import/export de questions personnalisées.
- [ ] Classement en ligne avec Firebase.
- [ ] Version PWA installable sur mobile.

---

## 🤝 Contribution

Les suggestions et améliorations sont les bienvenues !  
Ouvre une issue ou une pull request si tu souhaites ajouter des fonctionnalités ou corriger un bug.

---

## 📜 Licence

Ce projet est libre de droits – fais-en ce que tu veux. Amuse-toi bien ! 😊
---

## 📁 Structure du projet
