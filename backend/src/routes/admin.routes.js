import express from "express"
import { admin, identifyUser } from "../middleware/auth.middleware.js"


import {
    addMovie,
    updateMovie,
    deleteMovie,
    getUsers,
    banUser,
    deleteUser
} from "../controllers/admin.controller.js"

export const adminRouter = express.Router()

adminRouter.post("/movie", identifyUser, admin, addMovie)
adminRouter.put("/movie/:id", identifyUser, admin, updateMovie)
adminRouter.delete("/movie/:id", identifyUser, admin, deleteMovie)

adminRouter.get("/users", identifyUser, admin, getUsers)
adminRouter.put("/ban/:id", identifyUser, admin, banUser)
adminRouter.delete("/user/:id", identifyUser, admin, deleteUser)

