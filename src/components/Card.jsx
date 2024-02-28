const Card = (props) => {
    return (
        <>
            <div className="card  border border-0 shadow-lg h-100">
                {props.img}
                <div className={`card-body ${props.bg} ${props.text}`}>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.para}</p>
                </div>
            </div>
        </>
    );
}
export default Card;