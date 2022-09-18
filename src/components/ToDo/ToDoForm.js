import React,{ useState, useContext } from 'react'
import TodoContext from '../../contexts/ToDoContext'
import { Link } from "react-router-dom";
 
 
const ToDoForm = ({ formInputRef }) => {
  const [toDoValue, setToDoValue] = useState("")
  const [activeUser, setActiveUser] = useState(JSON.parse(localStorage.getItem('activeUser')))

  const {
    fillToDos,
    addToDo
  } = useContext(TodoContext)

  async function handleSubmit() {

    if (toDoValue.length < 3) {
      alert("At least three characters long.")
    }
    else {
      await addToDo(toDoValue, activeUser[0].userId)
      await fillToDos()
      setToDoValue('')
      formInputRef.current.select();
    }
  }
  return (
    <>
    
      <h1 style={{ position: 'fixed',top: '15px',right: '25px'}}>Hoşgeldin<Link to="/"> {activeUser[0].userName}</Link>  </h1>
      
      <form id='toDo-form'>
        <input ref={formInputRef} type="text" id='form-input' autoFocus placeholder='Type your ToDo' onChange={(e) => setToDoValue(e.target.value)} value={toDoValue} />
        <button
          onClick={(e) => {
            e.preventDefault()
            handleSubmit()
          }}>
          <i className='fas fa-plus'></i></button>
      </form>
    </>

  )
}

export default ToDoForm