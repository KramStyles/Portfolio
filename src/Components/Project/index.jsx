import "./index.css";
import {projects} from "../Data";
import List from "./List"

const Project = () => {
    return (
        <div className="container my-shadow-light section bg-linear-dark">
            <div className="row">
                {projects.map((item, index) => {
                    return (
                        <List project={item}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Project;
