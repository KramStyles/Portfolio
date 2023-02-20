import pointImg from "../../assets/images/points.png";
import {CgWebsite} from "react-icons/cg";

const List = ({project, index}) => {
    return (
        // Made it col-md-12 instead of 4 because it can arrange it self i.e use effect to check width and resize
        <div className="col-md-12 rounded text-white p-2 position-relative poppins">
            <div className="glass-morphic-content transit-medium">
                <p className="text-white-50 fs-6 text-uppercase">{project.role}</p>
                <h2 className="raleway">{project.name}</h2>
                <div className="line-white w-0 transit-medium"/>

                <p className="py-4 fs-8">{project.desc.slice(0, 150)}...</p>
                <a href={project.link} target="_blank" rel="noreferrer"
                   className="btn btn-outline-dark text-white-50 btn-sm button bottom-button">Visit Site <span
                    className="btn-icon transit-fast"><CgWebsite/></span></a>
                <img src={pointImg} alt="Decorative" className="point-img"/>
                {index % 2 ? (
                    <img src={pointImg} alt="Decorative" className="point-img top-point-img"/>
                ) : null}
            </div>
        </div>
    )
}

export default List