import movieModel from "../models/movie.model.js"

export const getMovies = async (req, res) => {

    const movies = await movieModel.find().sort({ createdAt: -1 })

    res.status(200).json({
        message: "All movies fetched!",
        movies // sending movies array!!
    })

}

export const getMovie = async (req, res, next) => {

    const { id } = req.params // iss id ke liye check karna hai..!!

    const movie = await movieModel.findOne({ id })

    if (!movie) {
        const err = new Error("No movie found!")
        err.status = 400
        return next(err)
    }

    res.status(200).json({
        message: "Movie fetched!",
        movie
    })

}