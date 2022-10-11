
// #18 Nous importons "DataTypes de sequelize qui nous servira à attribuer des types a nos données"
import { DataTypes } from 'sequelize'

// #19 Nous importons les paramètres de notre bdd dans le fichier products.js
import db from '../db/db.js'

// #20 Nous créons une nouvelle entité que nous appelons "Product"
const Product = db.define('product', {
    // #21 Nous lui donnons des propriétés (un id, un nom, un prix et une description) 
    id: {
        // Notre id sera de type Integer, càd un nombre entier
        type: DataTypes.INTEGER.UNSIGNED,
        // La valeur de l'id ne pourra pas être nulle
        allowNull: false,
        // Notre id sera une clé primaire de notre table "products"
        primaryKey: true,
        // Va valeur de l'id sera automatiquement intégrée lors de la création de la donnée
        autoIncrement: true
    },
    title: {
        // Notre titre sera de type string càd une chaine de caractères
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        // Notre prix sera de type Float càd un nombre pouvant être à virgule
        type: DataTypes.FLOAT,
        allowNull: false
    },
    description: {
        // Notre description sera de type texte càd un texte plus long qu'une chaine de caractères
        type: DataTypes.TEXT,
        // notre description pourra être nulle càd que nous ne sommes pas obligé de fournir une description de notre produit
        allowNull: true
    }
})

export default Product