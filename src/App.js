import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
       <Routes>
           <Route path="/react-portfolio" element={<Home/>} />
           <Route path="/react-portfolio/project" element={<Project/>} />
           <Route path="/react-portfolio/about" element={<About/>} />
           <Route path="/react-portfolio" element={<Contact/>} />
       </Routes>
    </>
  );
}

export default App;
