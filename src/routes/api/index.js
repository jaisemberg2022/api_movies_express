import { Router } from "express";
import genresRoutes from "./genres.route.js";
import actorsRoutes from "./actors.route.js";
import directorsRoutes from "./directors.route.js";
import moviesRoutes from "./movies.route.js";

const apiRouter = Router()

apiRouter.use('/genres', genresRoutes)
apiRouter.use('/actors', actorsRoutes)
apiRouter.use('/directors', directorsRoutes)
apiRouter.use('/movies', moviesRoutes)

export default apiRouter