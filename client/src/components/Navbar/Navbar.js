import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  //Location is the state for the page
  return (
    <nav className="h-20">
      <div className="w-full h-20 items-center flex justify-center bg-gray-900 p-2">
        <h1 className="text-2xl font-mono text-white ml-2 ">React Database<span className="text-lg text-blue-600 mx-2 ">
        Portfolio Info</span></h1>
      </div>
    </nav>
  );
}

export default Navbar;
