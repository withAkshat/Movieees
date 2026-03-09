import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { searchMovies } from "../../features/movies/movie.slice.js"
import useDebounce from "../../shared/hooks/useDebounce.js"
import MovieCard from "../../shared/components/MovieCard.jsx"


export default function Search() {

  const dispatch = useDispatch()

  const [query, setQuery] = useState("")

  const debouncedQuery = useDebounce(query)

  const { searchResults } = useSelector(  //read only hook
    state => state.movies  //returns movies
  )


  useEffect(() => {

    if (debouncedQuery) {
      dispatch(searchMovies(debouncedQuery))  // running function!
    }

  }, [debouncedQuery])

console.log(searchResults);

  return (

    <div>

      <h1>Search</h1>

      <input
        type="text"
        placeholder="Search movies, tv shows, actors..."
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
      />

      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(5,1fr)",
          gap:"20px"
        }}
      >

        {searchResults.map(item=>(
          <MovieCard key={item.id} movie={item}/>
        ))}

      </div>

    </div>

  )

}