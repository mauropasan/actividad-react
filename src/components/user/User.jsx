// Este componente es utilizado para las tarjetas de los usuarios
const User = ({ user }) => {
  return(
    <>
      <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
        <div className="card h-100 p-3">
          <span className="card-title"><b>{user.name}</b></span>
          <div className="card-body">
            <b>Usuario:</b> {user.username}<br/>
            <b>Correo electrónico:</b> {user.email}<br/>
            <b>Teléfono:</b> {user.phone}<br/>
          </div>
        </div>
      </div>
    </>
  )
}

export default User