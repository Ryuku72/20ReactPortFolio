import React, { useEffect, useState } from "react";
import API from "../utils/API";

function Home(){
    const [projects, setProjects] = useState([])
    
    useEffect(() => {
        loadProjects()
      }, [])

    console.log(projects)

    // Loads all books and sets them to books
    function loadProjects() {
    API.getPosts()
      .then(res => {
        console.log(res.data)
        setProjects(res.data)
      })
      .catch(err => console.log(err));
  };

    return (
        <div className="w-full">
            <h1>Lets begin</h1>   
              {projects.map(post =>
             <ul key={post._id} className="mb-4 border-2 border-b-black">
            <li>{post._id}</li>
            <li>{post.clip_path}</li>
            <li>{post.project}</li>
            <li>{post.title}</li>
            <li>{post.technology}</li>
            <li>{post.summary}</li>
            <li>{post.website}</li>
            <li>{post.github}</li>
            <li>{post.readme}</li>
            <li>{post.video}</li>
            <li>{post.other}</li>
        </ul>    
         )}
        </div>
    )
}

export default Home;