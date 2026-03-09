import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    role: {
        type: String,
        default: "user"
    }, 
    favorites: [
        {
            type: String
        }
    ],
    watchHistory: [
        {
            type: String
        }
    ], isBanned: {
        type: Boolean,
        default: false
    }
}, 
{ timestamps: true }
)


const userModel = mongoose.model("users", userSchema)

export default userModel