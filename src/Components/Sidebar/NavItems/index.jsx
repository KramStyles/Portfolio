import {Link} from "react-scroll";

const NavItems = ({icon, name, hide, link}) => {
    const id = name.replace(" ", "_").toLowerCase();
    return (
        <div className={'nav-link-action'}>
            <Link
                to={id}
                spy={true}
                duration={400}
                smooth={true}
            >
                <div className={"my-2 transit-fast nav--item p-1"}>
                    <a href={`#${link ? link : ''}`} className="text-white text-decoration-none fs-77">{icon} <span
                        className={`mx-3 text-capitalize fs-77 fw-bold ${hide ? "w-0 transit-fast d-none" : "transit-medium"}`}>
            {name}</span></a>
                </div>
            </Link>
        </div>
    )
}

export default NavItems
