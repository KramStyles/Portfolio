import "./index.css";
import {CgAnchor} from "react-icons/cg";

const TechStack = () => {
    const techStack = [
        "HTML", "CSS", "Python", "JavaScript", "React Js", "AJAX", "Angular Js", "TypeScript", "CI/CD",
        "Flask", "Django", "Django Rest", "JQuery", "PostgreSQL", "MySQL", "SQlite3", "Docker",
    ]
    return (
        <div className="container shadow section">
            <h3 className="">Tech Stack</h3>
            <div className="line-title"/>
            <div className="row my-5 justify-content-center">
                {techStack.map((item, index) => {
                    let randomNumber = Math.random().toFixed(2);

                    // Added so that random black colors won't be too transparent
                    if (randomNumber <= 0.35) randomNumber = parseInt(randomNumber) + 0.35

                    const randomColorGen = `rgba(0, 0, 0, ${randomNumber})`;
                    return (
                        <div
                            className="col-lg-3 col-md-5 mx-md-1 col-sm-12 text-center poppins shadow px-5 py-4
                            m-lg-3 my-4 tech-stack transit-fast position-relative"
                            key={index}>
                            {item}
                            <p className="tech-index text-white"
                               style={{backgroundColor: randomColorGen}}>{index + 1}</p>
                        </div>
                    )
                })}
            </div>
            <div className="row">
                <div className="col-6 offset-3">
                    <button type="button" className="btn btn-dark btn-sm m-auto d-block button">Load More <span
                    className="btn-icon transit-fast"><CgAnchor/></span></button>
                </div>
            </div>
        </div>
    )
}

export default TechStack;
