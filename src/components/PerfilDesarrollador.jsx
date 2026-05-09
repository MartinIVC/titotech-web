function PerfilDesarrollador(props) {
  return (
    <div className="card">
      <h2>Perfil del Desarrollador</h2>
      <p>
        <strong>Nombre:</strong> {props.nombre}
      </p>
      <p>
        <strong>Carrera:</strong> {props.carrera}
      </p>
      <p>
        <strong>Ciudad:</strong> {props.ciudad}
      </p>
      <p>
        <strong>Github:</strong>{" "}
        <a href={props.github} target="_blank">
          {" "}
          Ver mi código
        </a>
      </p>
    </div>
  );
}

export default PerfilDesarrollador;
