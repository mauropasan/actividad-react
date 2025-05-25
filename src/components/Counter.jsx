import { useState } from "react"

export const Counter = () => {
  // Declaramos counter y su función set, y lo inicializamos a 0
  const [ counter, setCounter ] = useState(0)
  const [inputValue, setInputValue] = useState(counter)

  // Incrementar nuestro contador
  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  // Evita el evento por defecto de submit y llama a setCounter para cambiar el contador
  const handleFormSubmit = (e) => {
    e.preventDefault()
    setCounter(inputValue)
  }

  // Cambia la variable del input para que luego se refleje en el contador
  const handleInputChange = (input) => {
    const value = parseInt(input.target.value, 10)
    !isNaN(value) ? setInputValue(value) : setInputValue(0)
  }

  return(
    <>
      <div className="card p-3 col-sm-8 col-md-6 col-lg-4 col-xl-3 m-auto">
        <div className="card-title text-center">
          <h2>Contador</h2>
        </div>
        <div className="row">
          <div className="col-6 m-auto">Contador: {counter}</div>
          <div className="col-6 text-end">
            <button className="btn btn-primary" onClick={incrementCounter}>Incrementar</button>
          </div>
        </div>
        <form className="row" onSubmit={handleFormSubmit}>
          <div className="col-6">
            <input type="number" className="form-control my-3" value={inputValue} onChange={handleInputChange} min="0"/>
          </div>
          <div className="col-6 m-auto text-end">
            <button type="submit" className="btn btn-success">Cambiar</button>
          </div>
        </form>
      </div>
    </>
  )
}
export default Counter