# Jeu de Mémoire Romantique pour Nora 💝

Une façon romantique et interactive de faire une surprise à quelqu'un de spécial ! Cette application web présente un jeu de mémoire en forme de cœur, où trouver toutes les paires révèle une proposition spéciale avec de jolies animations.

## Fonctionnalités ✨

- Jeu de mémoire interactif avec disposition en forme de cœur
- Belles animations et transitions avec Framer Motion
- Personnalisable avec vos propres photos
- Écran de proposition romantique avec :
  - Animation de feux d'artifice lors de l'acceptation
  - Bouton "Non" ludique qui se déplace quand on le survole
  - GIFs et images mignons de hamsters
- Design élégant avec la police Playfair Display
- Interface entièrement responsive
- Construit avec Next.js et Tailwind CSS

## Prérequis 📋

- Node.js (v18.18.0 ou supérieur)
- npm ou yarn

## Démarrage 🚀

1. Installer les dépendances :
```bash
npm install
# ou
yarn install
```

2. Remplacer les photos :
   - Aller dans le répertoire `public/game-photos`
   - Remplacer les images existantes (1.avif à 18.avif) par vos propres photos
   - Conserver la même convention de nommage
   - Utiliser des photos de vous et votre partenaire !

3. Démarrer le serveur de développement :
```bash
npm run dev
# ou
yarn dev
```

4. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur

## Personnalisation 🎨

### Changer les photos
- Ajouter vos photos dans `public/game-photos/`
- Les nommer de 1.avif à 18.avif
- Pour de meilleurs résultats, utiliser des images carrées de même taille
- Convertir vos images au format .avif pour de meilleures performances

### Modifier le texte
- Éditer les messages de proposition dans `src/components/ValentinesProposal.tsx`
- Changer les instructions du jeu dans `src/components/TextFooter.tsx`

### Stylisation
- Le projet utilise Tailwind CSS pour le style
- Modifier les couleurs, polices et autres styles dans les fichiers de composants respectifs
- Les schémas de couleurs principaux peuvent être ajustés dans `tailwind.config.js`

## Stack Technique 💻

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Fireworks.js](https://fireworks.js.org/)

---

Fait avec ❤️ pour Nora

*Note : Ce projet est destiné à des fins romantiques. À utiliser de manière responsable pour répandre l'amour !*