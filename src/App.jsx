import './App.css'
import ServiceCard from './components/ServiceCard'
import PerfilDesarrollador from './components/PerfilDesarrollador';

function App() {
  const serviciosDummy = [
    {id:1, titulo: "Mantenimiento de PC", descripcion: "Limpieza y optimización de dispositivos"},
    {id:2, titulo: "Reparación de PC", descripcion: "Reparación y reemplazo de piezas"},
    {id:3, titulo: "Venta de TV box's", descripcion: "Venta de TV box's optimizados y con aplicaciones de streaming instaladas"},
    {id:4, titulo: "Instalación de aplicaciones", descripcion: "Instalación de aplicaciones tanto en PC's como en TV box's"}
  ];
  const misDatos = 
    {nombre: "Martin Verdugo Carvajal",
      carrera: "Ingeniería Civil Informática",
      ciudad: "Linares",
      github: "https://github.com/" //modificar luego
    };
  return(
    <div>
      <nav className='navbar'>
        <h1>TitoTech</h1>
      </nav>
      <main>
        {serviciosDummy.map((servicio) => (
          <ServiceCard
          key={servicio.id}
          titulo={servicio.titulo}
          descripcion={servicio.descripcion}/>
        ))}
      </main>
      <footer>
        {
          <PerfilDesarrollador
            nombre={misDatos.nombre}
            carrera={misDatos.carrera}
            ciudad={misDatos.ciudad}
            github={misDatos.github}
          />
        }
      </footer>
    </div>
  );
}

export default App