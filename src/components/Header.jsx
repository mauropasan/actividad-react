import { Link } from "wouter";

export default function Header() {
  // Aquí pondremos los enlaces de las rutas de wouter para cambiar de componente
  return(
    <>
      <header className="w-100 bg-dark text-white p-3">
        <nav className="container navbar justify-content-start">
          <p className="fs-5 pe-3 m-0">
            <img src="/logo.png" width={40}/>
          </p>
          <ul className="nav gap-3">
            <Link to="/"><li>Inicio</li></Link>
            <Link to="/users"><li>Usuarios</li></Link>
          </ul>
        </nav>
      </header>
    </>
  )
}