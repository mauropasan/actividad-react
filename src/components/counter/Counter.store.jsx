import { useState } from "react"
import { useCounterStore } from "../../stores"

export const Counter = () => {
  /**
   * Declara todas las variables de la store para luego poder usarlas y
   * hacer uso de zustand para que se mantenga las variables en el estado
   * y así evitar que al cambiar de componente, se reinicie
   */
  const counter = useCounterStore((state) => state.counter)
  const increase = useCounterStore((state) => state.increase)
  const decrease = useCounterStore((state) => state.decrease)
  const setCounter = useCounterStore((state) => state.setCounter)

  /**
   * Como tal, no necesitamos guardar el valor del input para modificar
   * el contador, salvo que queramos guardarlo para evitar volver a
   * escribir el número, en lo cual podríamos implementar una variable
   * y función que nos permita mantener en estado
   */
  const [inputValue, setInputValue] = useState(0)

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
            <button className="btn btn-primary me-1" onClick={increase}>Incrementar</button>
            <button className="btn btn-danger" onClick={decrease}>Decrementar</button>
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