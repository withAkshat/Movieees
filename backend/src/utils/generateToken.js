import jwt from "jsonwebtoken"

export const generateToken = async (user) => {
    return jwt.sign(user,
        process.env.JWT_SECRET,
        { expiresIn: "2d" }
    )
}
