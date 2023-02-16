const NavItems = ({icon, name, hide, link}) => (
    <div className={"my-3"}>
        <a href={`#${link}`} className="text-white text-decoration-none">{icon} <span
            className={`mx-3 text-capitalize fs-7 fw-bold ${hide ? "d-none": ""}`}>{name}</span></a>
    </div>
)

export default NavItems
