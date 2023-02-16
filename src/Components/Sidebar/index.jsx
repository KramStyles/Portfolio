import {useState} from "react";
import {CgPushChevronRight, CgEditUnmask} from "react-icons/cg";

import "./index.css";
import MarkLogo from "../../assets/images/mark.JPG";
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
                    <img src={MarkLogo} alt="Picture of Mark Smiling." className="sidebar-img rounded"/>
                     <div className="position-absolute sidebar-content d-flex">
                         <div className="sidebar-icons">
                             <NavItems icon={<CgEditUnmask />} name="home" hide={!expandSidebar}/>
                             <NavItems icon={<CgEditUnmask />} name="about me" hide={!expandSidebar}/>
                             <NavItems icon={<CgEditUnmask />} name="experience" hide={!expandSidebar}/>
                             <NavItems icon={<CgEditUnmask />} name="tech stack" hide={!expandSidebar}/>
                             <NavItems icon={<CgEditUnmask />} name="education" hide={!expandSidebar}/>
                             <NavItems icon={<CgEditUnmask />} name="projects" hide={!expandSidebar}/>
                             <NavItems icon={<CgEditUnmask />} name="testimonial" hide={!expandSidebar}/>
                             <NavItems icon={<CgEditUnmask />} name="contact" hide={!expandSidebar}/>
                         </div>

                </div>
                </div>

            </div>
        </div>
    )
}

export default Sidebar;
