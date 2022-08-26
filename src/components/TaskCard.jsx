import { useContext } from 'react'
import {TaskContext} from '../context/TaskContext.jsx'

export default function TaskCard({task}) {
  const {eliminarTareas} = useContext(TaskContext); //usamos el contexto y el nombre del contexto

  return (
    <div className="bg-slate-700 text-white p-4 rounded-xl">
        <h2 className="capitalize font-bold text-xl">{task.title}</h2>
        <p className="text-gray-500 text-sm">{task.description}</p>
        <button className="bg-red-600 px-3 py-2 rounded-md mt-2 hover:bg-red-400 " onClick={() => { eliminarTareas(task.id)} }>Eliminar</button>
    </div>
  )
}
