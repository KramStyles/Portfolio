import {useState} from "react";
import {
    CgEditUnmask,
    CgPhone,
    CgPushChevronRight,
    CgStack,
    CgTerminal,
    CgTikcode,
    CgTranscript,
    CgUserlane,
    CgUserList
} from "react-icons/cg";

import "./index.css";
import MarkLogo from "../../assets/images/mark.png";
import NavItems from "./NavItems";

const Sidebar = () => {
    const [expandSidebar, setExpandSidebar] = useState(true);
    const toggleSidebar = () => (
        setExpandSidebar(!expandSidebar)
    )

    return (
        <div className={`sidebar-section ${expandSidebar ? "sidebar-expand" : ""}`}>
            <div className="toggle-sidebar fw-bold text-white py-4" onClick={toggleSidebar}>
                <CgPushChevronRight size={20} className={`${expandSidebar ? "flip--540" : "reverse-transition"}`}/>
            </div>
            <div className="sidebar">
                <div className="position-absolute my-5 d-flex justify-content-center">
                    <img src={MarkLogo} alt="Mark Smiling." className="sidebar-img rounded-circle"/>
                    <div className={`position-absolute sidebar-content d-flex ${!expandSidebar ? "mt--5" : ""}`}>
                        <div className="sidebar-icons">
                            <NavItems icon={<CgEditUnmask/>} name="home" hide={!expandSidebar}/>
                            <NavItems icon={<CgUserList/>} name="about me" hide={!expandSidebar}/>
                            <NavItems icon={<CgUserlane/>} name="experience" hide={!expandSidebar}/>
                            <NavItems icon={<CgTerminal/>} name="tech stack" hide={!expandSidebar}/>
                            <NavItems icon={<CgStack/>} name="education" hide={!expandSidebar}/>
                            <NavItems icon={<CgTikcode/>} name="projects" hide={!expandSidebar}/>
                            <NavItems icon={<CgTranscript/>} name="testimonial" hide={!expandSidebar}/>
                            <NavItems icon={<CgPhone/>} name="contact" hide={!expandSidebar}/>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sidebar;
