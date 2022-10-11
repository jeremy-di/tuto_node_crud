// #24 nous importons joi du paquet joi dans notre fichier "productValidation.js"
import Joi from 'joi'

// #25 Nous créons une fonction flechée
const productValidation = (body) => {
   const ProductSchema =  Joi.object({
        // Nous donnons des regles de validation à notre titre (Un texte minimum de 3 caractères, maximum de 40 caractères, retirer les espacements au début et en fin de texte et biensur, rendre obligatoire ce champs)
        title: Joi.string().min(3).max(40).trim().required(),
        // Pour notre prix nous donnons comme paramètres de validation (que ce soit un nombre et qu'il soit obligatoire)
        price: Joi.number().required(),
        // Pour la description (un texte de minimum 5 caractères et maximum 500)
        description: Joi.string().min(5).max(500)
    })
    // #26 On retourne notre valeur "ProductSchema"
    return ProductSchema.validate(body)
}

export default productValidation