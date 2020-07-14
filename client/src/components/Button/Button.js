import React, {useState, useRef, useEffect} from "react";

const color = {
  website: "rgb(190, 203, 223)",
  github: "rgb(238, 167, 198)",
  readme: "rgb(96, 190, 96)",
  video: "rgb(208, 122, 122)",
  document: "rgb(182, 178, 178)"
}

function Button(props) {
  const buttonType = color[props.type]
  const document = props.link
  //console.log(props.link)
        if (document) {
          return (
            <div className="flex px-6">
            <div className="mr-2 dropdown relative">
            <a type="button" className="text-gray-800 w-32 pr-6 text-right font-semibold py-2 px-4 rounded inline-block items-center shadow-2xl" 
            style={{backgroundColor:`${buttonType}`}} 
             href={props.link} target="_blank">
              {props.title}
            </a>
          </div>
          </div>    
          )
        }
        return(
          <></>    
        )
      }


export default Button;








