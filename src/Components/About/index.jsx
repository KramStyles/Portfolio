import "./index.css";
import Image from "../../assets/images/mark.JPG";

const About = () => {
    return (
        <div className="container shadow about-section mt--5 mb-5 rounded">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img src={Image} alt="Mark Eke" className="rounded" width="90%"/>
                </div>
                <div className="col-md-6 text-justify fs-7 poppins fw-bold">
                    <h2 className="text-center line">CODE LOVER</h2>
                    <p>As a seasoned software developer with over 6 years of professional experience, programming has
                        been a driving force in my personal and career growth. My expertise lies in Javascript and
                        Python, and I have honed my skills through daily usage and constant improvement over the
                        years. </p>
                    <p>I am a self-motivated individual who is dedicated to solving complex problems and delivering
                        high-quality results without the need for constant supervision. My background in full-stack
                        development, with a strong emphasis on back-end technology, makes me well-equipped to handle the
                        most challenging software engineering tasks.</p>
                </div>
            </div>

        </div>
    )
}

export default About;
