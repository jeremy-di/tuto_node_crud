// #14 Nous importons Sequelize dans notre fichier "db.js"
import { Sequelize } from 'sequelize'

// #15 Nous instancions Sequelize et nous l'exportons par défaut
export default new Sequelize(
    //Le nom de la base de données
    'crud',
    // le nom d'utilisateur de la bdd
    'root',
    // le mot de passe de la bdd
    'changeme',
    {
        // le format de la bdd
        dialect: 'mysql',
        // l'hote de la bdd
        host: 'localhost',
        // (optionel) le port utilisé par la bdd
        port: 3307
    }
)