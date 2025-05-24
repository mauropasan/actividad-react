const Footer = ({name = "Tu nombre"}) => {
  return(
    <>
      <footer className="w-100 bg-dark text-white p-3">
        <div className="container">
          <p className="m-0">{name} &copy; 2025 Todos los derechos reservados</p>
        </div>
      </footer>
    </>
  )
}

export default Footer