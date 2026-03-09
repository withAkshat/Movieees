
import movieModel from "../models/movie.model.js"
import userModel from "../models/user.model.js"


export const addMovie = async (req, res) => {

    const movieObj = req.body;
    
    const movie = await movieModel.create(movieObj);

    res.status(200).json({
        message: "Movie sucessfully added!",
        movie
    })

}

export const updateMovie = async (req, res) => {

    const movie = await movieModel.findByIdAndUpdate(
        req.params.id,
        req.body,
    )

    movie.save();

    res.status(200).json({
        message: "movie updated!",
        movie
    })

}

export const deleteMovie = async (req, res) => {

    await movieModel.findByIdAndDelete(req.params.id)

    res.status(200).json({ message: "movieModel deleted" })

}

export const getUsers = async (req, res) => {

    const users = await userModel.find()

    res.status(200).json({
        message: "all users fetched!",
        users
    })

}

export const banUser = async (req, res) => {

    const user = await userModel.findById(req.params.id)

    user.isBanned = true

    await user.save()

    res.status(200).json({
        message: "user banned sucessfully!",
        user
    })

}

export const deleteUser = async (req, res) => {

    await userModel.findByIdAndDelete(req.params.id)

    res.status(200).json({ message: "user deleted" })

}