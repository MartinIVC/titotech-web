function PropuestaValor(props) {
  return (
    <section className="propuesta-container">
      <div className="propuesta-texto">
        <h2>{props.titulo}</h2>
        <p>{props.texto}</p>
        <button
          className="btn-comenzar"
          onClick={() => alert("¡En construcción!")}
        >
          Comienza ahora
        </button>
      </div>
      <div className="propuesta-imagen">
        <img src={props.imagen} alt="Imagen de propuesta" />
      </div>
    </section>
  );
}

export default PropuestaValor;
