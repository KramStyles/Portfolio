import pointImg from "../../assets/images/points.png";

const List = ({project}) => {
    return (
        <div className="col-md-4 rounded text-white p-2 position-relative">
            <div className="glass-morphic-content">
                <p className="text-white-50 fs-6 poppins text-uppercase">{project.role}</p>
                <h2 className="raleway">{project.name}</h2>

                <p className="py-4">{project.desc.slice(0, 100)}...</p>
                <img src={pointImg} alt="Decorative" className="point-img"/>
            </div>
        </div>
    )
}

export default List