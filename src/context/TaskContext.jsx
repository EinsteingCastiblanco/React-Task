import { createContext, useState, useEffect } from 'react'
import { task as data } from "../data/task"

export const TaskContext = createContext(); //almacena los datos

export function TaskContextProvider(props) { //en globa el resto de componentes
  const [tarea, setTarea] = useState([]);

  function crearTareas(tareTitle, tareaDescription) {
    setTarea([...tarea, {
      title: tareTitle,
      id: tarea.length + 1,
      description: tareaDescription
    }])

  }

  function eliminarTareas(idTarea) {
    setTarea(tarea.filter( ta => ta.id !== idTarea))
  }

  useEffect(() =>{
    setTarea(data)
  }, [])
  
  return (
    <TaskContext.Provider value={{
      tarea,
      crearTareas,
      eliminarTareas
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}
