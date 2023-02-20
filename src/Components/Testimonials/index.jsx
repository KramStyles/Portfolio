import Title from "../Elements/title";

import {reviews} from "../Data";
import Onochie from "../../assets/images/reviews/onochie.jpg";

const Testimonials = () => {
    const images = {
        onochie: Onochie,
        john: Onochie,
        hope: Onochie,
        emmanuel: Onochie,
        kosi: Onochie,
    }
    return (
        <div className="container section">
            <Title backgroundTitle="reviews" title="What client's say!"/>
            <div className="row mt--5">
                {reviews.map((item, index) => (
                    <div>{item.name}</div>
                ))}
                <div className="col-md-12 col-sm-12">
                    <div className="glass-morphic-content transit-medium min-height-25 d-flex flex-column justify-content-between">
                        <div className="d-flex align-items-center justify-content-around">
                            <div style={{width: 100, objectFit: "cover"}}>
                                <img src={Onochie} alt="onochie" className="rounded-circle img-thumbnail"/>
                            </div>
                            <div className={"text-white"}>
                                <h5 className="raleway mb-0">Onochie Jon-Igwesi</h5>
                                <p className={"fs-8"}>Chairman, The Pacesetter Frontier.</p>
                            </div>
                        </div>
                        <div>
                            <p className={"fs-7 text-white fw-bold text-center poppins mt-3"}>Working with Mark Eke was an absolute pleasure. He's attention to details and ability to
                                meet tight deadlines was impressive. He was always quick to respond to any questions I had and went
                                above and
                                beyond to ensure the final product was exactly what I wanted.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;
