import "./index.css";
import {projects} from "../Data";
import List from "./List"
import Title from "../Elements/title";

const Project = () => {
    return (
        <div className="container my-shadow-light section bg-linear-dark">
            <Title backgroundTitle="projects" title="what i've done"/>
            <div className="row mt--5">
                {projects.map((item, index) => {
                    return (
                        <List project={item} key={index}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Project;
