import {CgLivePhoto, CgTally} from "react-icons/cg";

import Onochie from "../../assets/images/reviews/onochie.jpg";
import John from "../../assets/images/reviews/john.jpg"
import Hope from "../../assets/images/reviews/hope.jpg"
import Kosi from "../../assets/images/reviews/kosi1.jpg"
import Emma from "../../assets/images/reviews/emma.jpeg"

const images = {
    onochie: Onochie,
    john: John,
    hope: Hope,
    emmanuel: Emma,
    kosi: Kosi,
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
                <CgLivePhoto size={30}/>
            </div>
            <div className={"text-center"}>
                <p className={"fs-7 text-white fw-bold poppins mt-3"}>{review}</p>
                <CgTally className={"tally"} size={20}/>
            </div>
        </div>
    </div>
)

export default Reviews;
