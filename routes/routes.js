// #4 Nous importons "Router" de express
import {Router} from 'express'

// #13 Nous importons les différents controleurs dans notre fichier "routes.js"
import { createOne, deleteOne, getAll, getOne, updateOne } from '../controllers/ctrl.js'

// #5 Nous créons un nouveau Router
const router = Router()

// #6 Nous créons nos routes grace aux méthodes http (get, post, put et delete)
// #7 nous ajoutons en premier parametre la route utilisée et en second parametre un controller qui sera créer dans un autre fichier
// #8 pour "getOne", "updateOne" et "deleteOne" nous ajoutons un paramètre dynamique ":id"
router.get('/getAll', getAll)
router.get('/getOne/:id', getOne)
router.post('/createOne', createOne)
router.put('/updateOne/:id', updateOne)
router.delete('/deleteOne/:id', deleteOne)

export default router