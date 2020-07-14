import axios from "axios";

export default {
  // Gets all books
  getProjects: function() {
    return axios.get("/api/projects");
  },
  // Gets the book with the given id
  getProject: function(id) {
    return axios.get("/api/projects" + id);
  },
};
