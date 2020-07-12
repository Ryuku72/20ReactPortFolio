import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar"
import Wrapper from "./components/Wrapper/Wrapper";
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <Router>
      <div className="flex flex-col">
      <Navbar />
        <Wrapper>
          <Route exact path={["/", "/home"]} component={Home} />
        </ Wrapper>
        <Footer />
      </div>
      </ Router>
  );
}

export default App;
