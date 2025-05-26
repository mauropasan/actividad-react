import { Route, Router } from "wouter"
import Footer from "./components/page/Footer"
import Header from "./components/page/Header"
import Home from "./views/Home"
import Users from "./views/Users"

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
          <Router>
            <Route path={'/'} component={Home}/>
            <Route path={'/users'} component={Users}/>
          </Router>
        </div>
        <Footer name="mauropasan"/>
      </div>
    </>
  )
}

export default App