# test-express-api-starter

Projet Express.js de base pour apprendre les tests avec Jest et Supertest.

## Installation

```bash
npm install
```

## Commandes

```bash
npm run dev
npm start
npm test
```

## Organisation

```text
src/
  app.js
  server.js

tests/
  unit/
  integration/
  api/
```

## Organisation des tests

`tests/unit` contient les tests unitaires pour une fonction ou une classe isolee.

Exemple : tester une fonction de calcul sans lancer Express ni acceder a la base de donnees.

`tests/integration` contient les tests d'integration pour verifier que plusieurs parties fonctionnent ensemble.

Exemple : tester un repository avec une base de donnees de test.

`tests/api` contient les tests des routes HTTP de l'API.

Exemple : appeler une route Express avec Supertest et verifier la reponse.
