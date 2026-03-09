import axios from "axios"

export const backend = axios.create({
  baseURL: "https://movieees.onrender.com/api",
  withCredentials: true
})