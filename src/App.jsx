import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import ServiceCard from "./components/ServiceCard";
import PerfilDesarrollador from "./components/PerfilDesarrollador";
import PropuestaValor from "./components/PropuestaValor";
import pcImg from "./assets/pc_cleaning.avif";
import tvBox from "./assets/tv_box.avif";

function App() {
  const serviciosDummy = [
    {
      id: 1,
      titulo: "Mantenimiento de PC",
      descripcion: "Limpieza y optimización de dispositivos",
    },
    {
      id: 2,
      titulo: "Reparación de PC",
      descripcion: "Reparación y reemplazo de piezas",
    },
    {
      id: 3,
      titulo: "Venta de TV box's",
      descripcion:
        "Venta de TV box's optimizados y con aplicaciones de streaming instaladas",
    },
    {
      id: 4,
      titulo: "Instalación de aplicaciones",
      descripcion: "Instalación de aplicaciones tanto en PC's como en TV box's",
    },
  ];
  const misDatos = {
    nombre: "Martin Verdugo Carvajal",
    carrera: "Ingeniería Civil Informática",
    ciudad: "Linares",
    github: "https://github.com/MartinIVC/titotech-web",
  };
  return (
    <div>
      <nav className="navbar">
        <h1>TitoTech</h1>
        <div style={{ display: "flex", gap: "15px" }}>
          <Link to="/">Inicio</Link>
          <Link to="/perfil">Mi perfil</Link>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <PropuestaValor
                titulo="Expertos en hardware"
                texto="Revivimos tu equipo con mantenimiento profundo."
                imagen={pcImg}
              />
              <PropuestaValor
                titulo="Optimización de TV Box's"
                texto="Expertos en optimización de TV Boxes Amlogic y Allwiner"
                imagen={tvBox}
              />
              <div className="flex-servicios">
                {serviciosDummy.map((servicio) => (
                  <ServiceCard
                    key={servicio.id}
                    titulo={servicio.titulo}
                    descripcion={servicio.descripcion}
                  />
                ))}
              </div>
            </main>
          }
        />

        <Route
          path="/perfil"
          element={
            <div
              className="contenedor-perfil-centrado"
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "80px",
                padding: "20px",
              }}
            >
              <PerfilDesarrollador
                nombre={misDatos.nombre}
                carrera={misDatos.carrera}
                ciudad={misDatos.ciudad}
                github={misDatos.github}
              />
            </div>
          }
        />

        <Route
          path="*"
          element={
            <div style={{ textAlign: "center", padding: "50px" }}>
              <h2>Error 404</h2>
              <p>La página que buscas no existe en TitoTech.</p>
              <Link to="/">Volver al Inicio</Link>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
