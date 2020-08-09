import React from "react";
import "./App.css";
import Home from './components/Navbar';
import Imagesection from './components/Imagesection';
import Project from "./components/Projects";
import Aboutme from './components/Aboutme'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
     <Home/>
     <Imagesection/>
     <Aboutme/>
     <Project/>
     <Contact/>
    </div>
  );
}

export default App;
