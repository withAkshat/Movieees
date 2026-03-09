import { useEffect, useState } from "react"
import { backend } from "../../shared/api/backend"


export default function Admin(){

  const [movies,setMovies] = useState(null)
  const [title,setTitle] = useState("")
  const [poster,setPoster] = useState("")
  const [description,setDescription] = useState("")


  const fetchMovies = async () => {
    const res = await backend.get("/movie/all-movie")
    console.log(res);
    
    setMovies(res.data.movies)

  }


  useEffect(()=>{
    fetchMovies()
  },[])


  const addMovie = async () => {

    await backend.post("/admin/movie",{
      title,
      poster,
      description
    })
    
    fetchMovies()

  }


  const deleteMovie = async (id) => {

    await backend.delete(`/admin/movie/${id}`)

    fetchMovies()
  }


  return(

    <div>

      <h1>Admin Dashboard</h1>

      <h2>Add Movie</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />

      <input
        placeholder="Poster URL"
        value={poster}
        onChange={(e)=>setPoster(e.target.value)}
      />

      <input
        placeholder="Description"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
      />

      <button onClick={addMovie}>
        Add Movie
      </button>


      <h2>Movies</h2>

      { movies && movies.map(movie=>(
        <div key={movie._id}>

          <h3>{movie.title}</h3>

          <button onClick={()=>deleteMovie(movie._id)}>
            Delete
          </button>

        </div>
      ))}

    </div>

  )

}