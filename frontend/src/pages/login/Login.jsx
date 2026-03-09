import { useState } from "react"
import { useDispatch } from "react-redux"

import { loginUser } from "../../features/auth/auth.slice.js"

export default function Login(){

  const dispatch = useDispatch()

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(loginUser({ username ,password}))
  }

  return(

    <form onSubmit={handleSubmit}>

      <h1>Login</h1>

      <input
        type="text"
        placeholder="Email"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button type="submit">
        Login
      </button>

    </form>

  )

}