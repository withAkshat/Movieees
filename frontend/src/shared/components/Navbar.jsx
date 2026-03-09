import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

export default function Navbar() {

  const { user } = useSelector(
    state => state.auth
  )

  return (

    <nav style={{ display: "flex", gap: "20px", padding: "20px" }}>

      <Link to="/">Home</Link>

      <Link to="/search">Search</Link>

      {!user && <Link to="/login">Login</Link>}

      {!user && <Link to="/signup">Signup</Link>}

      {user && <Link to="/favorites">Favorites</Link>}

      {user && <Link to="/history">History</Link>}

      {user && <span>Welcome {user.user.username}</span>}

      {user?.user.role === "admin" && (
        <Link to="/admin">Admin</Link>
      )}
    </nav>

  )

}