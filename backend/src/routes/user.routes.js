import { Router } from "express"
import { addFavorite, getFavorites, getHistory, removeFavorite, watchHistory } from "../controllers/user.controller.js"
import { identifyUser } from "../middleware/auth.middleware.js"

export const userRouter = Router()

userRouter.get("/favorite", identifyUser, getFavorites) 
userRouter.post("/favorite", identifyUser, addFavorite) 
userRouter.delete("/favorite", identifyUser, removeFavorite)

userRouter.post("/watch-history", identifyUser, watchHistory)
userRouter.get("/watch-history", identifyUser, getHistory)