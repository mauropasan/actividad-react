import { useState } from "react"

const ToDo = () => {
  const [toDo, setToDo] = useState("")
  const [tasks, setTasks] = useState([])

  /**
   * Añade una tarea si el input no está vacio
   * @param {Evento que se recibe del formulario} e 
   */
  const addTask = (e) => {
    e.preventDefault()
    if (toDo.trim() === "") return
    const newTask = {
      text: toDo,
      done: false,
    }
    setTasks([...tasks, newTask])
    setToDo("")
  }

  /**
   * Marca una tarea como hecha, cogiendo su índice y tachándola
   * @param {Índice de la tarea para marcar como hecha} indexToToggle 
   */
  const toggleTaskDone = (indexToToggle) => {
    const updatedTasks = tasks.map((task, index) =>
      index === indexToToggle ? { ...task, done: !task.done } : task
    )
    setTasks(updatedTasks)
  }

  /**
   * Primero pregunta si quiere borrar la tarea, en caso afirmativo,
   * procede a eliminarla, si no, devuelve las tareas
   * @param {Índice de la tarea a eliminar} indexToRemove 
   * @returns 
   */
  const removeTask = (indexToRemove) => {
    if(confirm("¿Quieres eliminar la tarea")) {
      return setTasks(tasks.filter((_, i) => i !== indexToRemove))
    }
    alert("Cancelado")
    return tasks
  }

  return (
    <>
      <div className="card p-3 my-3">
        <h2>Lista de tareas</h2>
        <form onSubmit={addTask}>
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
              <button className="btn btn-sm btn-danger" onClick={() => removeTask(index)}><i className="bi bi-trash"></i></button>
              <input
                type="checkbox"
                className="form-check-input"
                checked={task.done}
                onChange={() => toggleTaskDone(index)}
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
