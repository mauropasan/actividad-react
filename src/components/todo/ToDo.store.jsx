import { useState } from "react"
import { useToDoStore } from "../../stores"

const ToDo = () => {
  const [toDo, setToDo] = useState("")
  const tasks = useToDoStore((state) => state.tasks)
  const addTask = useToDoStore((state) => state.addTask)
  const toggleTask = useToDoStore((state) => state.toggleTask)
  const removeTask = useToDoStore((state) => state.removeTask)

  /**
   * Evita que use el evento por defecto y llama la función addTask(toDo)
   * @param {Evento del formulario} e 
   */
  const handleForm = (e) => {
    e.preventDefault()
    addTask(toDo)
    setToDo("")
  }

  /**
   * Maneja el botón para borrar la tarea, pidiendo confirmación y luego eliminandolo
   */
  const handleBtn = (index) => {
    confirm("¿Seguro que quieres eliminar la tarea?") ? removeTask(index) : alert("Cancelado")
  }

  return (
    <>
      <div className="card p-3 my-3">
        <h2>Lista de tareas</h2>
        <form onSubmit={handleForm}>
          <input
            type="text"
            value={toDo}
            onChange={(e) => setToDo(e.target.value)}
            placeholder="Nueva tarea"
            className="form-control form-text-input"
          />
          <button type="submit" className="btn btn-primary mt-2">Añadir tarea</button>
        </form>

        <ul className="list-unstyled mt-2">
          {tasks.map((task, index) => (
            <li key={index} className="d-flex align-items-center justify-content-start gap-2 mb-2">
              <button className="btn btn-sm btn-danger" onClick={() => handleBtn(index)}><i className="bi bi-trash"></i></button>
              <input
                type="checkbox"
                className="form-check-input"
                checked={task.done}
                onChange={() => toggleTask(index)}
              />
              <span style={{ textDecoration: task.done ? "line-through" : "none" }}>
                {task.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ToDo
