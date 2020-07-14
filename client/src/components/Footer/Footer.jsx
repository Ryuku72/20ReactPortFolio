import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer w-full flex flex-col my-auto mt-auto mb-0 justify-center items-end bg-gray-900 p-4">
      <div className="inline-flex">
      <a className="text-white text-lg mr-2 p-2 font-mono hover:text-blue-300" target="_blank" href="https://joshuakb.netlify.app">Current Website <span className="text-green-300">{'||'}</span><span className="text-lg mr-2 text-pink-700 font-mono"><i className="fas fa-dungeon"></i> Foreign Toolkit </span>  </a>
      </div>
    </footer>
  );
}

export default Footer;