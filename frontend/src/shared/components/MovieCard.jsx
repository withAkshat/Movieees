import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addFavorite } from "../../features/favorites/favorite.slice.js"
import { fetchMovieTrailer } from "../../features/movies/movie.slice.js"
import { addHistory } from "../../features/history/history.slice.js"
import TrailerModal from "./TrailerModal.jsx"

export default function MovieCard({ movie }) {

    const dispatch = useDispatch()

    const { trailerKey } = useSelector(
        state => state.movies
    )

    const [open, setOpen] = useState(false)


    const handleClick = () => {

        dispatch(addHistory(movie.id))
        dispatch(fetchMovieTrailer(movie.id))


        setOpen(true)

    }


    return (

        <div>

            <img
                src={(movie.poster_path || movie.profile_path) ? `https://image.tmdb.org/t/p/w500${movie.poster_path || movie.profile_path}` 
                : "https://st4.depositphotos.com/14953852/24651/v/450/depositphotos_246517344-stock-illustration-image-available-icon-vector-flat.jpg"}
                style={{ width: "100%", cursor: "pointer" }}
                onClick={handleClick}
            />

            <h3>{movie.title || movie.name}</h3>

            <button onClick={() => dispatch(addFavorite(movie.id))}>
                ❤️ Favorite
            </button>

            {open && (
                <TrailerModal
                    trailerKey={trailerKey}
                    onClose={() => setOpen(false)}
                />
            )}

        </div>

    )

}