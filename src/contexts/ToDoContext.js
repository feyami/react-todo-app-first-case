import React,{ createContext, useState, useEffect } from 'react'
import { ToDoApi } from "../api/index"

const ToDoContext = createContext()

export const ToDoProvider = ({ children }) => {
  const [ToDos, setToDos] = useState([])
  const [activeUser, setActiveUser] = useState(JSON.parse(localStorage.getItem('activeUser')))
 

  useEffect(() => {
    
    fillToDos()
  }, []);

  const fillToDos = () => {
    ToDoApi.getToDos().then(res => setToDos(res.filter(todo => todo.userId === activeUser[0].userId)))
  }

  const addToDo = (content,userId) => {
    return new Promise((resolve) => {
      resolve(ToDoApi.newToDo({ 'content': content, 'userId':userId }))
    });
  }

  const removeToDo = (id) => {
    return new Promise((resolve) => {
      resolve(ToDoApi.deleteToDo(id));
    });
  }

  const updateToDo = (id, newContent) => {
   
     
     
        return new Promise((resolve) => {
        resolve (ToDoApi.updateToDo(id, { 'content': newContent }))
 });
     
   

  };

  const todoCompleted = (id,isCompleted) => {
    return new Promise((resolve) => {
      
      resolve( ToDoApi.updateToDo(id, {'isCompleted':!isCompleted }));
    });
  };

  return (
    <ToDoContext.Provider
      value={{
        ToDos: ToDos,
        setTodos: setToDos,
        fillToDos,
        addToDo,
        removeToDo,
        updateToDo,
        todoCompleted
      }}
    >
      {children}
    </ToDoContext.Provider>
  )
}

export default ToDoContext
