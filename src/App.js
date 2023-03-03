import React, { useState, useEffect, createContext } from "react";

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

export const ThemeContext = createContext(null);

const App = () => {
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState("dark")

    const preloader = document.querySelector(".my-preloader");

    const changeTheme = () => {
        setTheme((prev)=> (prev === "dark" ? "light" : "dark"));
    }

    useEffect(() => {
        setTimeout(() => {
            preloader.style.opacity = "0";
            setLoading(false)
            preloader.style.transform = "translateY(-100%)";
        }, 2000)
    }, [preloader.style])



    return loading ? (
        null
    ) : (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            <main id={theme}>
                <Sidebar theme={theme} changeTheme={changeTheme}/>
                <Home theme={theme} changeTheme={changeTheme}/>
                <About />
                <Experience />
                <TechStack />
                <Project />
                <Testimonials />
                <Contact />
            </main>
            <ScrollToTop
                smooth={true}
                component={<CgArrowLongUpE />}
                className={"vibrate"}
                style={{ right: 10 }}
            />
        </ThemeContext.Provider>
    )

}

export default App;
