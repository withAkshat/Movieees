import bcrypt from "bcrypt"
import userModel from "../models/user.model.js"
import { generateToken } from "../utils/generateToken.js"

export const register = async (req, res, next) => {

    const { username, email, password } = req.body;

    const userExists = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if (userExists) {
        const err = new Error("User already exists")
        err.status = 409
        return next(err)
    }

    const hash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username,
        email,
        password: hash
    })

    const token = await generateToken({
        id: user._id,
        username,
        email
    })

    res.status(201).cookie("token", token).json({
        message: "User registered sucessfully",
        user: {
            username,
            email,
            role: user.role
        },
        token
    })
}


export const login = async (req, res, next) => {

    const { username, email, password } = req.body

    const user = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    }).select("+password")


    if (user && await bcrypt.compare(password, user.password)) {

        const token = await generateToken({
            id: user._id,
            username,
            email
        })

        res.status(200).cookie("token", token).json({
            message: "User Logined",
            user: {
                username: user.username,
                email: user.email,
                role: user.role
            },
            token
        })

    }

    else {
        const err = new Error("Invalid Credentials")
        err.status = 401
        return next(err)
    }

}

