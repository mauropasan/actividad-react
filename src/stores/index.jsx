import axios from "axios"
import { create } from "zustand"

export const useStore = create((set) => ({
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