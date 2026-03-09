import { useState } from "react"
import { useDispatch } from "react-redux"

import { signupUser } from "../../features/auth/auth.slice.js"

export default function Signup(){

  const dispatch = useDispatch()

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")


  const handleSubmit = (e)=>{

    e.preventDefault()

    dispatch(signupUser({name,email,password}))

  }


  return(

    <form onSubmit={handleSubmit}>

      <h1>Signup</h1>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button type="submit">
        Signup
      </button>

    </form>

  )

}