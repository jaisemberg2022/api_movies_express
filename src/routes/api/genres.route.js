import { Router } from "express";
import { create, getAll, getOne, remove, update } from "../../controllers/genre.controllers.js";

const GenreRouter = Router()

GenreRouter.get('/', getAll)
GenreRouter.get('/:id', getOne)
GenreRouter.post('/', create)
GenreRouter.delete('/:id', remove)
GenreRouter.put('/:id', update)

export default GenreRouter