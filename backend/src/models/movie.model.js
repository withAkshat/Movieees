import mongoose from "mongoose"

const movieSchema = new mongoose.Schema({

    title:String,
    poster:String,
    description:String,
    releaseDate:String,
    trailerUrl:String,
    genre:String,
    category:String,
    tmdbId:String

}, {timestamps:true})

const movieModel = mongoose.model("movies", movieSchema)

export default movieModel