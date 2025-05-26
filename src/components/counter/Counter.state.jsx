import { useState } from "react"

export const Counter = () => {
  // Declaramos counter y su función set, y lo inicializamos a 0
  const [ counter, setCounter ] = useState(0)
  const [inputValue, setInputValue] = useState(counter)

  // Incrementar nuestro contador
  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  /**
   * Decrementa el contador, si el valor es 0, saltará una alerta
   * mostrando que el contador no puede tener valor negátivi
   */
  const decreaseCounter = () => {
    counter === 0 ? alert('El contador no puede tener un valor negativo') : setCounter(prevCounter => prevCounter - 1)
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
      <div className="card p-3">
        <div className="card-title">
          <h2>Contador</h2>
        </div>
        <div className="row">
          <div className="col-6 m-auto">Valor del contador: {counter}</div>
          <div className="col-6 text-end">
            <button className="btn btn-primary me-1" onClick={incrementCounter}>Incrementar</button>
            <button className="btn btn-danger" onClick={decreaseCounter}>Decrementar</button>
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