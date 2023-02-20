import {useState, useEffect} from "react";
import Slider from "react-slick";

import "./index.css";
import {projects} from "../Data";
import List from "./List"
import Title from "../Elements/title";
import {HandleWidth} from "../../Utils";

const Project = () => {
    const width = HandleWidth();

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: width < 800 ? 1 : width < 1000 ? 2 : 3,
    }
    return (
        <div className="container my-shadow-light section bg-linear-dark">
            <Title backgroundTitle="projects" title="what i've done"/>
            <div className="row mt--5">

                <Slider {...sliderSettings}>
                    {projects.map((item, index) => {
                        return (
                            <List project={item} key={index} index={index}/>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default Project;
