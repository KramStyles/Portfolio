import {useState} from "react";
import {CgPushChevronRight} from "react-icons/cg";

import "./index.css";

const Sidebar = () => {
    const [expandSidebar, setExpandSidebar] = useState(false);

    const toggleSidebar = () => (
        setExpandSidebar(!expandSidebar)
    )

    return (
        <div className={`sidebar-section ${expandSidebar ? "sidebar-expand" : ""}`}>
            <div className="toggle-sidebar fw-bold text-white py-4" onClick={toggleSidebar}>
                <CgPushChevronRight size={20} className={`${expandSidebar ? "flip--540": "reverse-transition"}`}/>
            </div>
            <div className="sidebar">

            </div>
        </div>
    )
}

export default Sidebar;
