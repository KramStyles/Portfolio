import React, { useState } from "react";

import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar";
import About from "./Components/About";
import TechStack from "./Components/TechStack";
import Project from "./Components/Project";
import Testimonials from "./Components/Testimonials";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import ScrollToTop from "react-scroll-to-top";
import { CgArrowLongUpE } from "react-icons/cg";

import "./App.css";

const App = () => {
    const [loading, setloading] = useState(true);
    const preloader = document.querySelector(".my-preloader");

    // setTimeout(() => {
    //     preloader.style.opacity = "0";
    //     setloading(true);
    // }, 2000);

    return loading ? (
        null
    ) : ( 
        <>
            <Sidebar />
            <Home />
            <About />
            <Experience />
            <TechStack />
            <Project />
            <Testimonials />
            <Contact />
            <ScrollToTop
                smooth={true}
                component={<CgArrowLongUpE />}
                className={"vibrate"}
                style={{ right: 10 }}
            />
        </>
    )

}

export default App;
