import React from "react";

import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar";
import About from "./Components/About";
import TechStack from "./Components/TechStack";
import Project from "./Components/Project";

const App = () => {
    return (
        <>
            <Sidebar/>
            <Home/>
            <About/>
            <TechStack/>
            <Project/>
        </>
    )
}

export default App;
