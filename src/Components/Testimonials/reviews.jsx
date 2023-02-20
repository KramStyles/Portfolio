import Onochie from "../../assets/images/reviews/onochie.jpg";

const images = {
    onochie: Onochie,
    john: Onochie,
    hope: Onochie,
    emmanuel: Onochie,
    kosi: Onochie,
}

const Reviews = ({name, picture, position, review}) => (
    <div className="col-md-12 col-sm-12 p-2">
        <div className="glass-morphic-content transit-medium min-height-25 d-flex flex-column justify-content-between">
            <div className="d-flex align-items-center justify-content-around">
                <div style={{width: 100, objectFit: "cover"}}>
                    <img src={images[picture]} alt={name} className="rounded-circle img-thumbnail"/>
                </div>
                <div className={"text-white"}>
                    <h5 className="raleway mb-0">{name}</h5>
                    <p className={"fs-8"}>{position}.</p>
                </div>
            </div>
            <div>
                <p className={"fs-7 text-white fw-bold text-center poppins mt-3"}>{review}</p>
            </div>
        </div>
    </div>
)

export default Reviews;
