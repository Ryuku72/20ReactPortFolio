import React from "react";
import Button from "../Button/Button"
import "./style.css";

function Card(props) {
  
   //console.log(props.length)
    return(
      <div className="relative flex flex-col items-center justify-center rounded-lg mt-4 shadow-lg font-mono text-gray-900 w-full px-32 py-48 bg-gray-300"> 
        <div className="absolute top-0 w-full h-full flex flex-col overflow-hidden text-lg capitalize p-10 z-10 rounded-lg">
          <ul>
            <li className="mb-1">
              <strong className="text-2xl">#{props.project}</strong>
            </li>
            <li>
              <strong>Title:</strong> {props.title}
            </li>
            <li>
              <strong>Technology:</strong> {props.technology}
            </li>
            <li>
              <strong>Summary:</strong> {props.summary}
            </li>
          </ul>
          <div className="grid grid-cols-3 gap-3 w-3/4 py-10 mr-10 mt-2 absolute bottom-0 left-0">  
          <Button title="GitHub" type="github" link={props.github}/>
            <Button title="ReadMe" type="readme" link={props.readme}/>
            <Button title="Website" type="website" link={props.website}/>
            <Button title="Document" type="document" link={props.other}/>
            <Button title="Video" type="video" link={props.video}/>
            </div>
        </div>
        <div className="absolute top-0 z-0 w-full h-full rounded-lg" id={props.project}></div>
      </div>
    );
  }

  export default Card;