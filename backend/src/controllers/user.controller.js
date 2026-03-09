import userModel from "../models/user.model.js";

export const addFavorite = async (req, res) => {

    const userId = req.user.id;
    const { movieId } = req.body;

    const user = await userModel.findById(userId)

    if (!user.favorites.includes(movieId)) {
        user.favorites.push(movieId)
        await user.save()
    }

    res.status(200).json({
        message: "Movie added into favorites",
        favourites: user.favorites
    })
}

export const removeFavorite = async (req, res) => {

    const userId = req.user.id;
    const { movieId } = req.body;

    const user = await userModel.findById(userId);

    user.favorites = user.favorites.filter((id) => movieId != id)

    await user.save()

    res.status(200).json({
        message: "Movie removed from favorites",
        favourites: user.favorites
    })
}

export const getFavorites = async (req, res) => {

    const user = await userModel.findById(req.user.id)

    res.status(200).json({
        message: "User favorites fetched!",
        watchHistory: user.favorites
    })
}

export const getHistory = async (req, res) => {

    const user = await userModel.findById(req.user.id)

    res.status(200).json({
        message: "Watch history fetched!",
        watchHistory: user.watchHistory
    })

}

export const watchHistory = async (req, res) => {

    const { movieId } = req.body;
    const user = await userModel.findById(req.user.id)

    if (!user.watchHistory.includes(movieId)) {
        user.watchHistory.push(movieId)
        await user.save()
    }

    res.status(200).json({
        message: "Movie added into watch History",
        watchHistory: user.watchHistory
    })
}

export const removeWatchHistory = async (req, res) => {

    const { movieId } = req.body;
    const user = await userModel.findById(req.user.id)

    user.watchHistory.push(movieId)

    user.watchHistory = user.watchHistory.filter((id) => movieId != id)

    await user.save()

    res.json(user.watchHistory)

}





