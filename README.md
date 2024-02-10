# AdonisJS 6 Web Starter Kit

![Made with :](https://img.shields.io/badge/Made%20with%20:-brightgreen?style=flat)
![AdonisJS](https://img.shields.io/badge/AdonisJS-blue?style=flat&logo=adonisjs&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-blue?style=flat&logo=vue.js)
![Inertia.js](https://img.shields.io/badge/Inertia.js-blue?style=flat&logo=inertia&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-blue?style=flat&logo=mysql&logoColor=white)

Ce template est un starter kit construit avec AdonisJS 6 pour le backend et Vue.js 3 pour le frontend.

## Fonctionnalités

- [x] Inscription d'un utilisateur
- [x] Connexion d'un utilisateur
- [x] Déconnexion d'un utilisateur
- [ ] Profil d'un utilisateur

## Utilisation

Une fois le projet créé à partir du template, suivez les étapes ci-dessous :

1. Installation des dépendances

   ```bash
   cd new-project
   npm install
   ```

2. Configuration des variables d'environnement

   Copiez le fichier `.env.example` en tant que `.env` dans le dossier de l'application et mettez à jour les variables d'environnement appropriées.

3. Génération d'une nouvelle valeur pour la variable d'environnement AP_KEY

   ```bash
   node ace generate:key
   ```

4. Création des tables dans la base de données

   ```bash
   node ace migration:run
   ```

5. Lancement du serveur
   ```bash
   npm run dev
   ```

## Licence

Le projet est sous licence [MIT](https://github.com/Aleowyne/adonis-web-starter-kit/blob/main/LICENSE.md).
