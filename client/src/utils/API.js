import axios from "axios";
import URI from "../config/index"

const api = axios.create({
  baseURL: process.env.MONGODB_URI || URI
})

export const getPosts = () => api.get("api/assignment")

const apis = { getPosts }

export default apis