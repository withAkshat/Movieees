import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getHistory } from "../../features/history/history.slice.js"
import  tmdb  from "../../shared/api/tmdb.js"

import MovieCard from "../../shared/components/MovieCard"


export default function History(){

  const dispatch = useDispatch()

  const { list } = useSelector(
    state => state.history
  )

  const [movies,setMovies] = useState([])


  useEffect(()=>{

    dispatch(getHistory())

  },[])


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

      <h1>Watch History</h1>

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