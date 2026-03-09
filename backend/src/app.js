import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"
import { handleError } from "./middleware/error.middleware.js"
import { authRouter } from "./routes/auth.routes.js"
import { movieRouter } from "./routes/movie.routes.js"
import { userRouter } from "./routes/user.routes.js"
import { adminRouter } from "./routes/admin.routes.js"
import cookieParser from "cookie-parser"

const app = express()


app.use(cors({
    origin: "https://movieees-eta.vercel.app",
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRouter)
app.use("/api/movie", movieRouter)
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)



app.use(handleError)
export default app