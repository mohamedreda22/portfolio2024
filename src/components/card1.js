 const Card1 = (props) => {
    return (
        <div className="card">
        <img src={props.image} alt={props.title} />
        <h2>{props.title}</h2>       
        <h3>{props.company}</h3>
        <a target="blank" href={props.credential} >Credential Link</a>
        <h3>{props.date}</h3>




        </div>

    );
};
export default Card1;