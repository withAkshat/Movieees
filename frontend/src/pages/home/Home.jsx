import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchTrendingMovies } from "../../features/movies/movie.slice.js"
import MovieCard from "../../shared/components/MovieCard.jsx"

import InfiniteScroll from "react-infinite-scroll-component"
import Loader from "../../assets/Loader.jsx"

export default function Home() {

  const dispatch = useDispatch()

  const { trending, page, hasMore } = useSelector(
    state => state.movies
  )

  useEffect(() => {

    dispatch(fetchTrendingMovies(1))

  }, [dispatch])



  const fetchMore = () => {
    dispatch(fetchTrendingMovies(page))
  }

  return (

    <div>

      <h1>Trending Movies</h1>

      <InfiniteScroll
        dataLength={trending.length}
        next={fetchMore}
        hasMore={hasMore}
        loader={<Loader />}
      >

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            gap: "20px"
          }}
        >

          {trending.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}

        </div>
      </InfiniteScroll>
    </div>

  )

}