import axios from "axios";

const api = axios.create({
  baseURL: process.env.MONGODB_URI || 'http://localhost:3000/'
})

export const getPosts = () => api.get("api/assignment")

const apis = { getPosts }

export default apis