import { useState } from "react";
import {
    CgEditUnmask,
    CgPhone,
    CgPushChevronRight,
    CgTerminal,
    CgTikcode,
    CgTranscript,
    CgUserlane,
    CgUserList,
    CgController,
    CgSun,
    CgMoon
} from "react-icons/cg";

import "./index.css";
import MarkLogo from "../../assets/images/mark.png";
import NavItems from "./NavItems";

const Sidebar = ({ theme, changeTheme }) => {
    const [expandSidebar, setExpandSidebar] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false)
    const toggleSidebar = () => (
        setExpandSidebar(!expandSidebar)
    )
    const ShowSidebar = () => (
        setShowSidebar(!showSidebar)
    )

    // To ensure that menu hides when user touches the screen
    // document.getElementById("main").addEventListener('click', function(){
    //     console.log('hello');
    // })

    return (
        <>
            <div className="ham-menu text-end">
                <span className={`theme theme-sm d-flex justify-content-center align-items-center bg-${theme === "dark" ? "light" : "dark"}`}
                    onClick={changeTheme}>
                    {theme === "dark" ? <CgMoon /> : <CgSun className='logo-spin text-white' />}
                </span>
                <div className="vibrate">
                    <CgController size={35} color={'white'} className={`${showSidebar ? "flip--540" : "reverse-transition"}`} onClick={ShowSidebar} />
                </div>
            </div>
            <div className={`sidebar-section ${expandSidebar ? "sidebar-expand" : ""} ${showSidebar ? "trans-in" : "trans-out"}`}>
                <div className="toggle-sidebar fw-bold text-white py-4 vibrate" onClick={toggleSidebar}>
                    <CgPushChevronRight size={20} className={`${expandSidebar ? "flip--540" : "reverse-transition"}`} />
                </div>
                <div className="sidebar">
                    <div className="position-absolute my-5 d-flex justify-content-center">
                        <img src={MarkLogo} alt="Mark Smiling." className="sidebar-img rounded-circle" />
                        <div className={`position-absolute sidebar-content d-flex ${!expandSidebar ? "mt--5" : ""}`}>
                            <div className="sidebar-icons">
                                <NavItems icon={<CgEditUnmask />} name="home" hide={!expandSidebar} />
                                <NavItems icon={<CgUserList />} name="about me" hide={!expandSidebar} />
                                <NavItems icon={<CgUserlane />} name="experience" hide={!expandSidebar} />
                                <NavItems icon={<CgTerminal />} name="tech stack" hide={!expandSidebar} />
                                <NavItems icon={<CgTikcode />} name="projects" hide={!expandSidebar} />
                                <NavItems icon={<CgTranscript />} name="testimonial" hide={!expandSidebar} />
                                <NavItems icon={<CgPhone />} name="contact" hide={!expandSidebar} />
                                {/*<NavItems icon={<CgStack/>} name="education" hide={!expandSidebar}/>*/}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Sidebar;
