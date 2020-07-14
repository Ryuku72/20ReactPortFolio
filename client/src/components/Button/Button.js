import React, {useState, useRef, useEffect} from "react";

const color = {
  website: "rgb(150, 203, 223)",
  github: "rgb(198, 147, 198)",
  readme: "rgb(96, 169, 96)",
  video: "rgb(208, 122, 122)",
  document: "rgb(182, 178, 178)"
}

function Button(props) {
  const buttonType = color[props.type]
  const document = props.link
  console.log(props.link)
        if (document) {
          return (
            <div className="flex px-6">
            <div className="mr-2 dropdown relative">
            <button type="button" className="text-gray-700 w-full font-semibold py-2 px-4 rounded inline-block items-center shadow-xl border-gray-500 border-2" 
            style={{backgroundColor:`${buttonType}`}} 
             href={props.link} target="_blank">
              {props.title}
            </button>
          </div>
          </div>    
          )
        }
        return(
          <></>    
        )
      }


export default Button;








