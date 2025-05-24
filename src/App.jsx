import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  /**
   * Dentro del div con la clase container, insertaremos las rutas con wouter
   * Crearemos un componente llamado Home y ahí pondremos a prueba el contador
   * La vista debe colocarse dentro de la carpeta views (creala si no existe)
   */
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Header/>
        <div className="container h-100 flex-fill my-3">
          <h1>Actividad</h1>
          <p>Lee README.md para obtener información sobre la actividad
            y las instrucciones que se deben de seguir.
          </p>
          <p>Elimina el contenido del div (NO el div) al empezar el ejercicio.</p>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App