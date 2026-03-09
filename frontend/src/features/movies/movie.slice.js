import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import tmdb from "../../shared/api/tmdb.js"


export const fetchMovieTrailer = createAsyncThunk(
    "movies/fetchTrailer",
    async (movieId) => {

        const res = await tmdb.get(`/movie/${movieId}/videos`)

        const trailer = res.data.results.find(
            video => video.type === "Trailer"
        )

        return trailer ? trailer.key : null
    }
)

export const searchMovies = createAsyncThunk(
    "movies/search",
    async (query) => {

        const res = await tmdb.get("/search/multi", {
            params: {
                query
            }
        })

        return res.data.results
    }
)

// fetch trending movies
export const fetchTrendingMovies = createAsyncThunk(
    "movies/fetchTrending",
    async (page) => {

        const res = await tmdb.get("/trending/movie/day", {
            params: { page }
        })

        return res.data
    }
)


const movieSlice = createSlice({

    name: "movies",

    initialState: { //intial states   
        trending: [],
        trailerKey: [],
        page: 1,
        hasMore: true,
        loading: false,
        error: null,
        searchResults: []
    },

    reducers: {},

    extraReducers: (builder) => {  // same as reducers but used for async opreations!

        builder

            .addCase(fetchTrendingMovies.pending, (state) => {
                state.loading = true
            })

            .addCase(fetchTrendingMovies.fulfilled, (state, action) => {

                state.loading = false

                state.trending = [
                    ...state.trending,
                    ...action.payload.results
                ]

                state.page += 1

                if (state.page > action.payload.total_pages) {
                    state.hasMore = false
                }

            })
            .addCase(fetchTrendingMovies.rejected, (state) => {
                state.loading = false
                state.error = "Failed to load movies"
            })

            .addCase(searchMovies.fulfilled, (state, action) => {

                state.loading = false
                state.searchResults = action.payload

            })

            .addCase(fetchMovieTrailer.fulfilled, (state, action) => {

                state.trailerKey = action.payload

            })

    }

})

export default movieSlice.reducer