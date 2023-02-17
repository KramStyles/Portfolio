import React from "react";

import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar";
import About from "./Components/About";
import TechStack from "./Components/TechStack";

const App = () => {
    return (
        <>
            <Sidebar/>
            <Home/>
            <About/>
            <TechStack/>
        </>
    )
}

export default App;
