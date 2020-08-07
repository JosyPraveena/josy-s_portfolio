import React from "react";
import "./App.css";
import Home from './components/Navbar';
import Imagesection from './components/Imagesection';
import Project from "./components/Projects";
import Aboutme from './components/Aboutme'


function App() {
  return (
    <div className="App">
     <Home/>
     <Imagesection/>
     <Aboutme/>
     <Project/>
    </div>
  );
}

export default App;
