// #1 Nous importons express dans notre fichier app.js
import express from 'express';

// #9 Nous importons les élements de notre fichier "routes.js" dans "app.js"
import routes from './routes/routes.js'
// #16 Nous importons les otils de la bdd dans notre fichier "app.js"
import Db from './db/db.js'
// #2 Nous créons une application en express
const app = express();

app.use(express.json())
// #10 pour utiliser les routes :
app.use(routes)

// #17 Nous utilisons la méthode "sync" qui est asynchrone et donc qui utilise un ".then" en cas de succès et un ".catch" en cas d'erreurs
Db.sync()
.then((console.log('Connexion à la bdd')))
.catch(error => console.log(error))
// #3 Nous écoutons cette application sur un certain port (Ici ce sera le port 8080)
app.listen(8080, () => console.log("Port 8080"))

