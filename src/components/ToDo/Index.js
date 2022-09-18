import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { ToDoProvider } from '../../contexts/ToDoContext'
import React,{ useRef } from 'react'
function Index() {
  const formInputRef = useRef(); 
  return (
    <ToDoProvider>
    <>
      <ToDoForm formInputRef={formInputRef} /> 
      <ToDoList  formInputRef={formInputRef}/>
    </>
    </ToDoProvider>
  )
}
export default Index;
 