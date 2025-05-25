import { useEffect } from "react"
import { useStore } from "../stores/index"
import User from "../components/User"

function Users() {
  const { data, isLoading, error, fetchData } = useStore()
  
  /**
   * useEffect permite la reactividad que tiene React,
   * si data no está definido, llama a fetchData para obtener
   * los datos y está prestando atención si data o fetchData
   * está produciendo algún cambiom de ser así useEffect se
   * ejecuta otra vez.
   */
  useEffect(() => {
    if(!data) {
      fetchData()
    }
  }, [data, fetchData])

  if (isLoading) {
    return <h1>Cargando usuarios...</h1>
  }

  if (error) {
    console.log(error.message)
    return <p>Se ha producido un error, comprueba la consola.</p>
  }

  return(
    <>
      <h1>Usuarios</h1>
      <div className="row">
        {data !== null && data.map(user =>
          <User key={user.id} user={user}/>
        )}
      </div>
    </>
  )
}

export default Users