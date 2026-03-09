import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/Home/Home.jsx"
import Search from "../pages/Search/Search.jsx"
import Login from "../pages/Login/Login.jsx"
import Signup from "../pages/Signup/Signup.jsx"
import Navbar from "../shared/components/Navbar.jsx"
import Favorites from "../pages/Favorites/Favorites.jsx"
import History from "../pages/History/History.jsx"
import Admin from "../pages/Admin/Admin.jsx"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  )
}