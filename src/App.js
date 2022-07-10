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
           <Route path="/" element={<Home/>} />
           <Route path={`${process.env.PUBLIC_URL}/project`} element={<Project/>} />
           <Route path={`${process.env.PUBLIC_URL}/about`} element={<About/>} />
           <Route path={`${process.env.PUBLIC_URL}/contact`} element={<Contact/>} />
       </Routes>
    </>
  );
}

export default App;
