import { configureStore } from "@reduxjs/toolkit"

import authReducer from "../features/auth/auth.slice.js"
import movieReducer from "../features/movies/movie.slice.js"
import favoriteReducer from "../features/favorites/favorite.slice.js"
import historyReducer from "../features/history/history.slice.js"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: movieReducer,
    favorites: favoriteReducer,
    history: historyReducer
  }
})