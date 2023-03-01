import Slider from "react-slick";

import "./index.css";
import {HandleWidth} from "../../Utils";
import Title from "../Elements/title";
import {reviews} from "../Data";
import Reviews from "./reviews";

const Testimonials = () => {
    const width = HandleWidth();
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToScroll: 1,
        slidesToShow: width < 600 ? 1 : 2,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
    }
    return (
        <div className="container section testimonial-section" id={"testimonial"}>
            <Title backgroundTitle="reviews" title="What client's say!"/>
            <div className="row mt--5">
                <Slider {...sliderSettings}>
                    {reviews.map((item, index) => (
                        <Reviews {...item} key={index}/>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Testimonials;
