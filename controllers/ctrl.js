// #22 Nous importons le modèle de données à notre fichier "ctrl.js"
import Product from '../models/products.js'
// #27 On importe la validation à notre fichier "ctrl.js"
import productValidation from '../validation/productValidation.js'

// #11 Nous appelons les diffétents controleurs de nos routes
const getAll = (req, res) => {
    // #29 on applique la méthode findAll qui servira à afficher toutes nos données
    Product.findAll({
        //On exclus deux champs de données à l'affichage
        attributes : {exclude : ["createdAt", "updatedAt"]}
    })
    .then(products => {
        res.status(200).json(products)
    })
    .catch(error => res.status(500).json(error))
}

// #11 Nous appelons les diffétents controleurs de nos routes
const getOne = (req, res) => {
    // #30 On récupère les paramètres de l'id
    const {id} = req.params
    // #31 On appelle la fonction Product avec la méthode "findbyPk"
    Product.findByPk(id)
    .then(product => {
        if(!product) {
            return res.status(404).json({msg : "Not found"})
        } else {
            res.status(200).json(product)
        }
    })
    .catch(error => res.status(500).json(error))
}

// #11 Nous appelons les diffétents controleurs de nos routes
const createOne = (req, res) => {
    // 23 nous appelons le body et nous lui appliquons la requête
    const {body} = req
    // #28 Nous appelons la fonction de validation ici afin d'appliquer les règles lors de la création
    const {error} = productValidation(body)
    if(error) {
        return res.status(401).json(error.details[0].message)
    }
    Product.create({... body})
    .then(() => {
        res.status(201).json({msg : "Created Ressource"})
    })
    .catch(error => res.status(500).json(error))
}

// #11 Nous appelons les diffétents controleurs de nos routes
const updateOne = (req, res) => {
    // #32 On récupère les paramètres de l'id
    const {id} = req.params
    // #33 On récupère le body
    const {body} = req;
    // #34 On appelle la fonction Product avec la méthode "findbyPk"
    Product.findByPk(id)
    .then(product => {
        if(!product) {
            return res.status(404).json({msg : "Not found"})
        }
        // #35 Ici on prends "Product.title" et on remplace sa valeur par "body.title et ainsi de suite"
        product.title = body.title
        product.price = body.price
        product.description = body.description
        // 36 On appelle la fonction product et on lui applique la méthode "save()"
        product.save()
        .then(() => res.status(201).json({msg : "Updated Ressource"}))
        .catch(error => res.status(500).json(error))
    })
    .catch(error => res.status(500).json(error))
}

// #11 Nous appelons les diffétents controleurs de nos routes
const deleteOne = (req, res) => {
    // #37 On récupère les paramètres de l'id
    const {id} = req.params
    // #38 On appelle la fonction product avec la méthode "destroy" à laquelle nous attribuons l'id
    Product.destroy({where : {id: id}})
    .then(ressource => {
        if(ressource == 0) {
            return res.status(404).json({msg : "Note found"})
        } else {
            res.status(200).json({msg : "Deleted ressource"})
        }
    })
    .catch(error => res.status(500).json(error))
}

// #12 Nous exportons les différents controleurs
export {getAll, getOne, createOne, updateOne, deleteOne}