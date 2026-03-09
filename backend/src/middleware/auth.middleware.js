import dotenv from "dotenv"
dotenv.config()

import jwt from "jsonwebtoken"

export const identifyUser = async (req, res, next) => {

    let token;
        
    try {
        token = req.cookies.token;
       
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded;
        next()
    }
    catch (e) {
            
        const error = new Error("User not authorized")
        error.status = 401
        next(error)
    }
}


export const admin = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
       
        next()
    }
    else {
        
        const error = new Error("User not authorized")
        error.status = 401
        next(error)
    }
}

