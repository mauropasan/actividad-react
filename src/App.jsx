import { Route, Router } from "wouter"
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
          <p>Lee detenidamente las instrucciones dadas en README.md para realizar esta actividad.</p>
          <p>Una vez empezada la actividad, puedes eliminar todo el contenido de este div, pero no borres el div en sí.</p>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App