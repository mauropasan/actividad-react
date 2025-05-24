import { create } from "zustand";

export const useStore = create((set) => ({
  data: null,
  isLoading: false,
  error: null,
  fetchData: async () => {
    /**
     * Primero ponemos isLoading a true para decir que estamos cargando los datos
     * y el error en null, luego manejaremos con un try catch una respuesta del
     * enlace https://jsonplaceholder.typicode.com/users para obtener los usuarios,
     * si obtiene los datos, guardamos la respuesta en la variable data, pero si
     * captura un error, poner el mensaje de error en la variable error, en ambos
     * casos isLoading se pondrá en false.
     */
  }
}))