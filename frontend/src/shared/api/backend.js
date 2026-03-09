import axios from "axios"

export const backend = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true
})