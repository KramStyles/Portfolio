import {useEffect, useState} from "react";

export const HandleWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () =>{
            setWidth(window.innerWidth);
            console.log("width is:", width);
        };
        window.addEventListener("resize", handleResize);
        return () =>{
            window.removeEventListener("resize", handleResize);
        };
    }, [])

    return width;
}