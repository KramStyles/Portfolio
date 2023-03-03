import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';

import "./index.css";
import Resume from "../../assets/MARK EKE - Resume.pdf"
import { CgAbstract, CgTranscript, CgSun, CgMoon } from "react-icons/cg";

const Home = ({ theme, changeTheme }) => {
    const positions = [
        "Fullstack (React - Django)",
        "Backend (Django, Flask)",
        "Frontend (Vanilla, React)",
        "WordPress"];

    return (
        <div className="hero text-white d-flex justify-content-end flex-column raleway" id={'home'}>
            <h1>Mark Eke</h1>
            <h3 className="text-white-50">
                <Typewriter options={
                    { autoStart: true, loop: true, strings: positions }
                } />
            </h3>
            <div>
                <Link
                    to='contact'
                    spy={true}
                    duration={400}
                    smooth={true}>
                    <button className="btn btn-outline-light btn-sm me-3">Contact Me <span
                        className="btn-icon transit-fast"><CgAbstract /></span></button>
                </Link>
                <a href={Resume} className="btn btn-light btn-sm fw-bold"
                    download="Mark Eke Resume - Best Hire.pdf">Resume <span
                        className="btn-icon transit-fast"><CgTranscript /></span></a>
            </div>
            <div className={`theme theme-lg d-flex justify-content-center align-items-center bg-${theme === "dark" ? "light" : "dark"}`}
                onClick={changeTheme}>
                {theme === "dark" ? <CgMoon /> : <CgSun className='logo-spin text-white' />}
            </div>
        </div>
    )
}

export default Home;
