import { Router } from "express";
import { create, getAll, getOne, remove, update } from "../../controllers/actors.controllers.js";

const ActorRouter = Router()

ActorRouter.get('/', getAll)
ActorRouter.get('/:id', getOne)
ActorRouter.post('/', create)
ActorRouter.delete('/:id', remove)
ActorRouter.put('/:id', update)

export default ActorRouter