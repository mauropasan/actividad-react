import axios from "axios"
import { create } from "zustand"

// Esta store se usa para el contador
export const useCounterStore = create((set) => ({
  counter: 0,
  error: null,
  increase: () => set((state) => ({ counter: state.counter + 1, error: null })),
  decrease: () => set((state) => { 
    if(state.counter === 0) {
      state.error = "El contador no puede tener valor negativo"
      console.error(state.error)
      return state
    }
    return { counter: state.counter - 1}
  }),
  setCounter: (value) => set({ counter: value })
}))

// Esta store será usada para las tareas
export const useToDoStore = create((set) => ({
  tasks: [],
  addTask: (text) => 
    set((state) => ({
      tasks: [ ...state.tasks, { text, done: false }]
    })),
  toggleTask: (index) =>
    set((state) => {
      const updatedTasks = [...state.tasks]
      updatedTasks[index].done = !updatedTasks[index].done
      return { tasks: updatedTasks }
    }),
  removeTask: (index) => 
    set((state) => ({
      tasks: state.tasks.filter((_, i) => i !== index),
    })),
}))

// Esta store se crea para la lista de los usuarios
export const useUserStore = create((set) => ({
  data: null,
  isLoading: false,
  error: null,
  fetchData: async () => {
    /**
     * Primero manejaremos con un try catch toda la función,
     * luego ponemos isLoading a true para decir que estamos cargando
     * los datos y el error en null. Los datos los obtenemos en este enlace:
     * https://jsonplaceholder.typicode.com/users
     * para obtener los usuarios, si obtiene los datos, guardamos la
     * respuesta en la variable data, pero si captura un error, poner
     * el mensaje de error en la variable error, en ambos casos isLoading
     * se pondrá en false.
     */
    try {
      set({isLoading: true, error: null})
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      set({data: response.data, isLoading: false})
    } catch(error) {
      set({isLoading: false, error: error.message})
    }
  }
}))