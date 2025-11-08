import { Router } from "express";
import { create, getAll, getOne, remove, update } from "../../controllers/directors.controllers.js";

const DirectorRouter = Router()

DirectorRouter.get('/', getAll)
DirectorRouter.get('/:id', getOne)
DirectorRouter.post('/', create)
DirectorRouter.delete('/:id', remove)
DirectorRouter.put('/:id', update)

export default DirectorRouter