import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000/' || process.env.MONGODB_URI,
})

export const getPosts = () => api.get("api/projects")

const apis = { getPosts }

export default apis