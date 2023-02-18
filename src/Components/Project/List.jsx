import pointImg from "../../assets/images/points.png";

const List = ({project}) => {
    return(
        <div className="col-md-4 rounded text-white p-3 position-relative" style={{backgroundColor: "#1d222a00"}}>
            <h4 className="text-white-50">{project.role}</h4>
            <h2>{project.name}</h2>

            <p className="py-4">{project.desc}</p>
            <img src={pointImg} alt="Decorative Image" className="point-img"/>
        </div>
    )
}

export default List