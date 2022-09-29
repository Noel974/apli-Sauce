### API 

Pour la création de l'API j'ai du utilisé les packages suivant pour le bien de fonctionnement de l'API  qui sont:
bcrypt, dotenv, email-validator, express, express-rate-limit, FS, helmet, jsonwebtoken, mongosse, mongosse-unique-validator, multer, nodemon, password-validator.

### La création 

Pour la création de l'API le code suivant a été taper dans la terminal("npm init")  et suivre les intructions pendant l'installation et de changer le fichier index.js par server.js pendant l'installation  

### Les packages 

### Express
Framework Web pour nodeJS 
Pour l'installer il suivi de taper la commande ("npm i express").

### Express-rate-limit
Intergiciel de limitation de débit de base pour Express. À utiliser pour limiter les demandes répétées aux API publiques et/ou aux points de terminaison tels que la réinitialisation du mot de passe.
Pour cela la commande suivante est reconmmander dans le terminal pour l'installation ("npm i express-rate-limit")

### Nodemon 
Au lieux de utiliser node server pour éxecuter le server a chaque fois on va  utiliser nodemon server . Il surveillera les modifications de nos fichiers et redémarrera le serveur lorsqu'il aura besoin d'être mis à jour. Cela nous garantit d'avoir toujours la dernière version de votre serveur dès que nous sauvegardons, sans devoir relancer manuellement le serveur. Pour cela la commande suivante est reconmmander dans le terminal pour l'installation ("npm install -g nodemon")

### MONGOSSE
Installation de mongoose va nous servir pour le ("app.js") de se connecter avec la base MongoDb pour l'installation la commande suivante ("npm install mongoose")

### Mongosse-unique-validator
mongoose-unique-validator va nous servir pour les champs uniques dans un schéma Mongoose à ajouter une validation. 
Pour l'installer il suivi de taper la commande ("npm i mongoose-unique-validator").

### Helmet
Helmet nous aide à sécuriser nos applications Express en définissant divers en-têtes HTTP.
Pour l'installer il suivi de taper la commande ("npm i npm i helmet").

### Jsonwebtoken
Il permet l'échange sécurisé de jetons (tokens) entre plusieurs parties. 
Pour l'installer il suivi de taper la commande ("npm i jsonwebtoken").

### Dotenv
Dotenv est un module sans dépendance qui charge les variables d'environnement d'un .env fichier.
Pour l'installer il suivi de taper la commande ("npm i dotenv").
Elle va nous servir apprés pour sécuriser le token et l'API ce fichier ne sera pas partager dans les debots tel que git hub si celui ci est enregistrer dans un git ignore.

### Multer
Multer est un middleware node.js pour la gestion multipart/form-data, qui est principalement utilisé pour télécharger des fichiers.
Pour l'installer il suivi de taper la commande ("npm i multer").

### Bcrypt
Une bibliothèque pour vous aider à hacher les mots de passe.
Pour l'installer il suivi de taper la commande ("npm i bcrypt").

### Email-validator
Module simple pour valider une adresse e-mail
Pour l'installer il suivi de taper la commande ("npm i email-validator").

### Password-validator
Module simple pour valider les mot de passe.
Pour l'installer il suivi de taper la commande ("npm i password-validator").

### Fs
C'est un module de système de fichiers Node.js qui permet a nous aider à stocker, accéder, et gérer les données sur notre systeme
Pour l'installer il suivi de taper la commande ("npm i fs").

### Milddlewares
Les fonctions middleware effectuent les tâches suivantes :

         . Exécuter tout type de code.
         . Apporter des modifications aux objets de  demande et de réponse.
         . Terminer le cycle de demande-réponse.
         . Appeler la fonction middleware suivant dans la pile.

On va retrouver dans le dossier les fichiers suivant: auth.js, id-compare.js, 
limite-req.js, mail-validator.js, 
miulter.js, password-validator.js, sauce-validator.js 

### auth.js


### id-campare.js
compare l'identifiant du créateur de la sauce à l'identifiant de l'utilisateur connecté

### limite-req.js
Fonction de limitation des requêtes, il permet de limiter le nombre de requêtes envoyées vers un serveur Express.
### mail-validator.js
Fonction de contrôle de validité des mail renseigner par l'utilisateur enregistrer dans la base de donnée si celle si a un erreur un message email invalide apparait.

### multer.js
Fichier pour la configuration des format d'image qui seront reconnu pendant le télechargment .

### password-validator.js
Fonction de vérification de la validité des mots passe renseigner en paramètre  enregister dans la base de donnée, si celle-ci est incorrect un message erreur apparait.
 
### sauce-validator.js


### Autre fichiers 
D'autre fichier pour le fonctionnement du site est a prendre en figuer comme le fichier .env et .gitignore.

### .env
Dans se fichier on retrouve tous les insformations tenu secret, pour le bon déroulement de l'API.

### .gitignore
Dans se fichier tous les contenu qu'on voudrait pas partager sera mit dans se fichier et lors d'un "git push" il va ignoré tous les fichiers et ou dossiers qui se trouve dans se fichier lors d'un partage de code celui-ci ne pourrais pas accéder a ces fichiers et dossiers.
  single-sauce 
/*<h3> {{sauce.mainPepper |  uppercase}}</h3>*/