import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getFavorites } from "../../features/favorites/favorite.slice.js"
import  tmdb  from "../../shared/api/tmdb.js"

import MovieCard from "../../shared/components/MovieCard.jsx"

export default function Favorites(){

  const dispatch = useDispatch()

  const { list } = useSelector(
    state => state.favorites
  )

  const [movies,setMovies] = useState([])


  useEffect(()=>{

    dispatch(getFavorites())

  },[dispatch])


  useEffect(()=>{

    const fetchMovies = async ()=>{

      const results = await Promise.all(

        list.map(id =>
          tmdb.get(`/movie/${id}`)
        )

      )

      const movieData = results.map(
        res => res.data
      )

      setMovies(movieData)

    }

    if(list.length){
      fetchMovies()
    }

  },[list])


  return(

    <div>

      <h1>Your Favorites</h1>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(5,1fr)",
        gap:"20px"
      }}>

        {movies.map(movie=>(
          <MovieCard key={movie.id} movie={movie}/>
        ))}

      </div>

    </div>

  )

}