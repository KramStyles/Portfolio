import "./index.css";

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
                    return (
                        <div
                            className="col-md-3 col-sm-6 col-xs-12 text-center poppins shadow px-5 py-4 m-3 tech-stack transit-fast">
                            {item}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TechStack;
