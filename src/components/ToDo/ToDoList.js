import React,{ useContext,useEffect }from 'react'
import ToDoItem from './ToDoItem'

import TodoContext from '../../contexts/ToDoContext'
const ToDoList = ({formInputRef}) => {
  const { ToDos,fillToDos } = useContext(TodoContext)
  useEffect(() => {
  
      fillToDos()
      },[]);
    
      
  return (
   <div className="toDo-container">
     {ToDos&&ToDos.map((toDo)=>(//*I got error without "toDos&&".
      <ToDoItem id={toDo.id} toDo={toDo}  key={toDo.id} formInputRef={formInputRef}  />
    ))}
   </div>
  )
}

export default ToDoList