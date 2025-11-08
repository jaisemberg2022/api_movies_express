import { Router } from "express";
import { create, getAll, getOne, remove, setGenres, update, setActors, setDirectors} from "../../controllers/movies.controllers.js";

const MoviesRouter = Router()

MoviesRouter.get('/', getAll)
MoviesRouter.get('/:id', getOne)
MoviesRouter.post('/', create)
MoviesRouter.delete('/:id', remove)
MoviesRouter.put('/:id', update)

MoviesRouter.post('/:id/genres', setGenres)
MoviesRouter.post('/:id/actors', setActors)
MoviesRouter.post('/:id/directors', setDirectors)

export default MoviesRouter