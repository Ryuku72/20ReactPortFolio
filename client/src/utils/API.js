import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000/api || "process.env.MONGODB_URI/api";',
})

export const getPosts = () => api.get("/projectinfo")

const apis = { getPosts }

export default apis