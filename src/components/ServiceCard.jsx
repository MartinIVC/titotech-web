function ServiceCard(props){
    return(
        <div className="card">
            <h3>{props.titulo}</h3>
            <p>{props.descripcion}</p>
        </div>
    )
}

export default ServiceCard