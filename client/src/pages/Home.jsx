import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Card from "../components/Card/Card"

function Home(){
    const [projects, setProjects] = useState([])
    
    useEffect(() => {
        loadProjects()
      }, [])

    console.log(projects)

    // Loads all books and sets them to books
    function loadProjects() {
    API.getProjects()
      .then(res => {
        console.log(res.data)
        setProjects(res.data)
      })
      .catch(err => console.log(err));
  };

    return (
        <div className="grid grid-cols-3 gap-3 grid-flow-row w-full">    
              {projects.map(post =>
              <Card 
            key={post._id}
            style={post.clip_path}
            project={post.project}
            title={post.title}
            technology={post.technology}
            summary={post.summary}
            website={post.website}
            github={post.github}
            readme={post.readme}
            video={post.video}
            other={post.other}  
        >
      </Card>
         )}
        </div>
    )
}

export default Home;