NSX Scripts — Site prototype
============================

Contenu:
- index.html
- package.json (Vite)
- vite.config.js
- public/banner.png   (banner selected)
- public/logo.webp    (original logo)
- src/
  - main.jsx
  - App.jsx
  - styles.css

Instructions:
1) Installer les dépendances:
   npm install

2) Lancer le site en développement:
   npm run dev

3) Construire pour production:
   npm run build

Note:
- Le paiement est simulé dans ce prototype. Remplace la logique simulatePayment() dans src/App.jsx par ton backend (Stripe/PayPal) + webhooks.
- Banner et logo inclus dans /public.
