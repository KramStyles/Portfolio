const Buttons = ({onclick, btnText, btnIcon, moreClass}) => {
    return (
        <button type="button" className={`btn btn-outline-light btn-sm m-auto d-block button ${moreClass}`}
                onClick={onclick}>{btnText} <span
            className="btn-icon transit-fast">{btnIcon}</span></button>
    )
}

export default Buttons;
