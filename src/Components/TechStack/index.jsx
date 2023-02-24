import {useState} from "react";
import {CgAnchor} from "react-icons/cg";

import "./index.css";
import Title from "../Elements/title";
import Buttons from "../Elements/buttons";

const TechStack = () => {
    const [showMoreStack, setShowMoreStack] = useState(9);
    const techStack = [
        "HTML", "CSS", "Python", "JavaScript", "React Js", "Django", "Django Rest", "Flask", "CI/CD",
        "PostgreSQL", "MySQL", "SQlite3", "Docker", "AJAX", "Angular Js", "TypeScript", "JQuery",
    ]
    const loadMore = () => {
        setShowMoreStack((prevState => (
            prevState + 3
        )))
    }
    return (
        <div className="container shadow section position-relative">
            <Title backgroundTitle="skills" title="tech stack"/>
            <div className="row my-5 justify-content-center">
                {techStack.slice(0, showMoreStack).map((item, index) => {
                    let randomNumber = Math.random().toFixed(2);

                    // Added so that random black colors won't be too transparent
                    if (randomNumber <= 0.35) randomNumber = parseInt(randomNumber) + 0.35

                    const randomColorGen = `rgba(240, 240, 240, ${randomNumber})`;
                    return (
                        <div
                            className="col-lg-3 col-md-5 mx-md-1 col-sm-12 text-center poppins my-shadow-light
                            px-5 py-4 m-lg-3 my-4 tech-stack transit-fast position-relative bg-linear-dark text-white-50"
                            key={index}>
                            {item}
                            <p className="tech-index fw-bold text-dark"
                               style={{backgroundColor: randomColorGen}}>{index + 1}</p>
                        </div>
                    )
                })}
            </div>
            {showMoreStack >= techStack.length ? null : (
                <div className="row">
                    <div className="col-6 offset-3">
                        <Buttons btnIcon={<CgAnchor/>} btnText={"Load More"} onclick={loadMore}/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TechStack;
