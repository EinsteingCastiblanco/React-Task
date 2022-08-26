import TaskCard from './TaskCard'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext.jsx' 

function TaskList(){

    const {tarea, eliminarTareas} = useContext(TaskContext); //usa el valor del contexto

    if(tarea.length === 0){
        return ( <h1 className="text-white text-3xl capitalize font-bold text-center">No hay tareas</h1> )
    }
    return (
        <div className="grid grid-cols-4 gap-2">
            { tarea.map( (task) => {
                return <TaskCard key={task.id} task={task} />             
            })} 
        </div>
    )
}
export default TaskList;