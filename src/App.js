import React from "react";

import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar";
import About from "./Components/About";
import TechStack from "./Components/TechStack";
import Project from "./Components/Project";
import Testimonials from "./Components/Testimonials";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";

const App = () => {
    return (
        <>
            <Sidebar/>
            <Home/>
            <About/>
            <Experience/>
            <TechStack/>
            <Project/>
            <Testimonials/>
            <Contact/>
        </>
    )
}

export default App;
