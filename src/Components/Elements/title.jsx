const Title = ({backgroundTitle, title}) => (
    <>
        <div className="position-absolute w-75">
            <h1 className="text-center text-behind-dark">{backgroundTitle.toUpperCase()}</h1>
        </div>
        <h3 className="text-white-50 text-capitalize">{title}</h3>
        <div className="line-title-white mb-5"/>
    </>
)

export default Title;
