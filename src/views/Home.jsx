import Counter from "../components/counter/Counter.store"
import ToDo from "../components/todo/ToDo.store"

function Home() {
  return(
    <>
      <h1>Inicio</h1>
      <div className="row">
        <Counter/>
        <ToDo/>
      </div>
    </>
  )
}

export default Home