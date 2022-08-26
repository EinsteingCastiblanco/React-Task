import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext.jsx' 

export default function TaskForm() {
const [title, setTitle] = useState("");
const [descripcion, setDescripcion] = useState("");

const { crearTareas } = useContext(TaskContext); //usa el valor del contexto

function handleSubmit(e){
    e.preventDefault();
    crearTareas(title, descripcion)
    setTitle("");
    setDescripcion("");
}
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-neutral-500 p-10 mb-5 ">
        <h2 className="text-center text-stone-50 text-2xl capitalize font-bold mb-2">Crear tarea</h2>
        <input type="text" placeholder="Añadir nueva tarea" 
        onChange={e => setTitle(e.target.value)}
        value={title}
        className="px-3 py-2 bg-neutral-600 w-full mb-2"
        autoFocus/>
        <textarea name="description" id="description" cols="20" rows="5" placeholder="Añadir descripcion" 
        onChange={ e => setDescripcion(e.target.value)}
        value={descripcion}
        className="px-3 py-2 bg-neutral-600 w-full mb-2"
        ></textarea>
        <button className="text-white text-center bg-green-400 px-3 py-2 hover:bg-green-500 rounded-xl">Enviar</button>
      </form>
    </div>
  )
}
