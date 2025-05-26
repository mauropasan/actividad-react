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

  const removeTask = (indexToRemove) => {
    return tasks.filter((_, i) => i !== indexToRemove)
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
            <li key={index}>
              <button className="btn btn-danger" onClick={removeTask}><i className="bi bi-trash"></i></button>
              <input
                type="checkbox"
                className="form-check-input me-2"
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
