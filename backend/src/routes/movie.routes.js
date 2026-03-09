import {Router} from "express"
import { getMovie, getMovies } from "../controllers/movie.controller.js"

export const movieRouter = Router()

movieRouter.get("/all-movie", getMovies)
movieRouter.get("/:id", getMovie)