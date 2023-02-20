import {useEffect, useState} from "react";

export const HandleWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () =>{
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () =>{
            window.removeEventListener("resize", handleResize);
        };
    }, [])

    return width;
}