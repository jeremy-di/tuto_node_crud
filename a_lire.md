# Le CRUD #

## pour initier un nouveau projet : ##

Dans un terminal entrer : 

```
npm init -y
```

Cela aura pour effet de générer un nouveau fichier `json` : 

`package.json` qui ressemblera à ça : 

```json
{
  "name": "tuto_node_crud",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
}
```

On y ajoute une information qui nous permettra de travailler avec les import : 

```json
"type": "module
```

ce qui donne : 

```json
{
  "name": "tuto_node_crud",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
}
```
Nous installons ensuite le Framework `express` en lançant la commande dans le terminal : 

```
npm i express
```

Nous installons également `nodemon` qui sert à redémarrer notre API REST à chaque changement dans le code

```
npm -D nodemon
```
Cela à pour effet de rajouter des lignes dans notre fichier `package.json` : 

```json
{
  "name": "tuto_node_crud",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
    "joi": "^17.6.2",
    "mysql2": "^2.3.3",
    "sequelize": "^6.24.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.20"
  }
}
```

En ce qui concerne nodemon, nous devons ajouter une ligne à notre `package.json` dans la section `scripts`

```json
    "dev": "nodemon app.js"

```
Nous créons un fichier appelé `app.js`

### Etapes 1, 2 et 3 à voir dans `app.js`

Nous lançons une commande pour ouvrir notre projet sur le port 8080

```
npm run dev
```

ce qui aura pour effet d'afficher ces informations dans le terminal

```
[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
Port 8080
```

Nous créons à présent un nouveau dossier appelé `routes` dans lequel nous ajoutons un fichier `routes.js`

### Etapes 4, 5, 6, 7 et 8 à voir dans `routes.js`
### Etapes 9 et 10 à voir dans `app.js`

Nous créons un dossier `controllers` dans lequel nous ajoutons un fichier `ctrl.js`

### Etapes 11 et 12 à voir dans `ctrl.js`
### Etapes 13 à voir dans `routes.js`

A présent, nous allons installer des paquets qui vont nous permettre de communiquer avec notre base de donnée : 

```
npm i mysql2 sequelize
```

Nous créons un nouveau dossier appelé `db` et dans lequel, nous ajoutons un fichier `db.js`

### Etapes 14 et 15 à voir dans `db.js`
### Etapes 16 et 17 à voir dans `app.js`

Rendez-vous ensuite sur `phpMyAdmin` pour créer notre base de données appelée `crud`

```
CREATE DATABASE crud
```

Nous créons un nouveau dossier appelé `models` et dans lequel nous ajoutons un fichier `products.js`

### Etapes 18, 19, 20 et 21 à voir dans `products.js`
### Etapes 22 et 23 à voir dans `ctrl.js`

Nous pouvons à présent grâce à `Insomnia`, `Postman` ou tout autre logiciel permettant de tester des API

Nous selectionnons la méthode `post` dans Insomnia et nous tapons la commande

```
http://localhost:8080/createOne
```
Dans le content json, nous ajoutons une donnée : 

```
{
  "name" : "Jean"
}
```
Nous cliquons sur `Send` et la réponse se trouvera dans le terminal ou nous avons lancer la commande `npm run dev`

Nous devons valider les données que nous entrons en leur donnant des paramètres de validation (Exemple : taille, type de données etc...)

Pour cela, nous créons un dossier `validation` dans lequel nous ajoutons un fichier `productValidation.js`

Nous devons aussi installer un paquet appelé `joi` qui va nous servir à obtenir des validations

```
npm i joi
```
### Etapes 24, 25 et 26 à voir dans `productValidation.js`
### Etapes 27 et 28 à voir dans `ctrl.js`

Nous pouvons ainsi entrer des données dans notre bdd grace à Insomnia

```
{
  "title" : "Iphone 12",
  "price" : 1200,
  "description" : "Superbe Iphone"
}
```

On clique sur Send et la donnée est crée.

Si nous entrons autre chose que title, price, description ou une chaine de caractère à la place d'un nombre etc... nous aurons une erreur et la donnée ne sera pas créee.

### Etapes 29 à voir dans `ctrl.js`

Nous testons la méthode `getAll` dans le logiciel `Insomnia`

Nous séléctionons la méthode `get` et nous entrons l'url suivant : 

```
http://localhost:8080/getAll
```
On clique sur `Send` et on obtiens les contenu de toutes nos données (dans mon exemple elles sont au nombre de 2)

```json
[
	{
		"id": 1,
		"title": "samsung galaxy s10e",
		"price": 200,
		"description": "superbe téléphone Samsung"
	},
	{
		"id": 3,
		"title": "samsung galaxy A3",
		"price": 40,
		"description": "Existe en 30Go ou 128Go"
	}
]
```
### Etapes 30 et 31 à voir dans `ctrl.js`

Pour trouver un seul article nous retournons sur Insomnia et nous appliquons cet url avec la methode get : 

```
http://localhost:8080/getOne/3
```
Nous entrons le numero 3 qui correspond à l'id du produit, nous récupérons : 

```json
{
	"id": 3,
	"title": "samsung galaxy A3",
	"price": 40,
	"description": "Existe en 30Go ou 128Go",
	"createdAt": "2022-10-11T13:55:03.000Z",
	"updatedAt": "2022-10-11T13:55:03.000Z"
}
```
Nous récupérons l'objet avec l'id `3`

### Etapes 32, 33, 34, 35 et 36 à voir dans `ctrl.js`

Pour appliquer une mise à jour à notre donnée nous revenons sur Insomnia et nous appliquons la méthode `put` et l'url suivant :

```
http://localhost:8080/updateOne/3
```
dans le body nous entrons les modifications

```json
{
	"title" : "samsung galaxy A5",
	"price" : 50,
	"description" : "Existe en 30Go ou 128Go"
}
```
On clique sur `Send` et nous récupérons ce résultat

ANCIENNE DONNÉE : 

```json
{
	"id": 3,
	"title": "samsung galaxy A3",
	"price": 40,
	"description": "Existe en 30Go ou 128Go",
	"createdAt": "2022-10-11T13:55:03.000Z",
	"updatedAt": "2022-10-11T13:55:03.000Z"
}
```
NOUVELLE DONNÉE : 

```json
{
	"id": 3,
	"title": "samsung galaxy A5",
	"price": 50,
	"description": "Existe en 30Go ou 128Go",
	"createdAt": "2022-10-11T13:55:03.000Z",
	"updatedAt": "2022-10-11T14:13:43.000Z"
}
```
### Etapes 37 et 38 à voir dans `ctrl.js`

Pour tester la supression d'une donnée nous retournons encore sur Insomnia et nous tapons l'url avec la méthode `delete` :

```
http://localhost:8080/deleteOne/2
```
En cliquant sur `Send`, nous supprimerons la donnée portant l'id numéro 2