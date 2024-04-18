# Projet de dashboard d'une bibliotèque

## Introduction

Ce projet est une application web conçue pour gérer les livres d'une bibliothèque. Les utilisateurs peuvent s'inscrire, se connecter, ajouter des livres, modifier des livres, supprimer des livres et consulter la liste des livres disponibles.

## Fonctionnalités

### Authentification Utilisateur :

- Les utilisateurs peuvent s'inscrire en fournissant leur nom, leur adresse e-mail et leur mot de passe.
- Les utilisateurs peuvent se connecter en fournissant leur adresse e-mail et leur mot de passe.

### Gestion des Produits :

- Les produits sont stockés dans une base de données MongoDB.
- Les utilisateurs peuvent ajouter des produits en fournissant le nom du produit, le prix, la description et l'image.

### LocalHost Utilisateur :

- L'utilisateur est stocké dans le local storage du navigateur.

### Token JWT :

- Les utilisateurs reçoivent un token JWT lorsqu'ils se connectent.
- Le token JWT est stocké dans un localstorage.

## Technologies Utilisées

- Node.js
- Express.js
- MongoDB
- bcrypt.js
- jsonwebtoken
- multer
- HTML/CSS/JavaScript

## Configuration base de donnée :

Database : Books_Dashboard

Collection : users, books, categories

données des collections dans le dossier BDD à la racine

## Routes

1. Authentification :
   - POST /user/signup: Créer un nouvel utilisateur.
   - POST /user/signin: Connectez-vous en tant qu'utilisateur existant.
2. Books :
   - GET /books: Récupérer la liste des produits.
   - POST /books: Ajouter un nouveau produit.
   - PUT /books/:id: Mettre à jour un produit existant.
   - DELETE /books/:id: Supprimer un produit existant.
3. Categories :
   - GET /categories: Récupérer la liste des catégories.
4. Files :
   - POST /files/upload: Télécharger un fichier et l'envoyer dans un dossier.

## Installation

Pour exécuter ce projet localement, suivez ces étapes :

1. Clonez le dépôt : `git clone https://github.com/Quentin-Cheron/Api_Node_Js_Isitech_2024_Projet.git`
2. Accédez au répertoire du projet : `cd Api_Node_Js_Isitech_2024_Projet`
3. Installez les dépendances : `npm/pnpm/yarn/bun install`
4. Configurez votre base de données MongoDB et configurez la connexion dans le projet.
5. Lancez le serveur : `npm run dev`
6. Accédez à l'application via votre navigateur web à l'adresse : `http://localhost:3000`.

## Tests unitaires

Pour exécuter les tests unitaires, exécutez la commande suivante :

`pnpm run test`

Pour tester les tests unitaire de l'authentification,
il faut ajouter son token dans la variable token dans le fichier de test.

## Fichier à ajouter

Ajouter le fichier `.env` à la racine et ajouter à l'intérieur :

PORT=3000
CLIENT_URL=http://localhost:5173
MONGO_URI=mongodb+srv://Quentin:Administrateur12@nodejs.weyt30s.mongodb.net/Books_Dashboard
JWT_SECRET=secret

## Structure utilisé

Utilisation de la structure MVC : Model View Controller

Utilisation du token JWT pour l'authentification pour la première fois

## Recettage

- Recettage effectué par le développeur
