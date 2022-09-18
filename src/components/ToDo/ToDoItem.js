import  React,{ useContext, useEffect, useRef, useState } from 'react'
import TodoContext from '../../contexts/ToDoContext'

const ToDoItem = ({ toDo, id, formInputRef }) => {
  const [editMode, setEditMode] = useState(false);
  const [toDoValue, setToDoValue] = useState(toDo.content)
  const inputRef = useRef();
  const divRef = useRef();
  const {
    fillToDos,
    removeToDo,
    updateToDo,
    todoCompleted
  } = useContext(TodoContext)

  useEffect(() => {

    if (editMode) {
      inputRef.current.select();



    }
  }, [editMode]);

  function toggleEditMode() {
    setEditMode(current => !current);
    !editMode && formInputRef.current.select();
  };

  function cancelEditMode() {
    editMode && toggleEditMode();
    setToDoValue(toDo.content);
  }

  async function deleteToDo(id) {
    await removeToDo(id)
    await fillToDos()
    formInputRef.current.select();
  };

  async function toggleToDoCompletedStatus() {
    await todoCompleted(id, toDo.isCompleted)
    await fillToDos()
    formInputRef.current.select();

  };
  async function editToDo() {
    await updateToDo(id, toDoValue)
  };


  async function handleKeyDownAndEditToDo(e) {



    if (e.key === 'Enter') {

      if (toDoValue.length < 3) {
        alert("At least three characters long.")
      }
      else {
        await editToDo().then(cancelEditMode());
        await fillToDos()
        formInputRef.current.select();
      }

    }
    else if (e.key === 'Escape') {
      cancelEditMode()

    }
  };


  return (
    <div ref={divRef} className="toDo-item" id={toDo.completed ? 'completed' : null} >


      <input ref={inputRef} className={toDo.isCompleted ? 'completed' : null} id='editInput' type="text" readOnly={editMode ? "" : "disabled"} value={editMode ? toDoValue : toDo.content} onChange={(e) => setToDoValue(e.target.value)} onKeyDown={handleKeyDownAndEditToDo} onBlur={cancelEditMode} />

      <div id={"toDoOpr"} className={editMode ? 'invisible' : 'visible'} >

        <i className="fa-solid fa-clipboard-check" onClick={() => { toggleToDoCompletedStatus() }}></i>
        <i className="fa-solid fa-edit icons" onClick={toggleEditMode} ></i>
        <i className="fa-solid fa-trash-can icons" onClick={() => { deleteToDo(id) }}></i>
      </div>
      {/* <div className={editMode ? 'visible' : 'invisible'}>

        <i className="fa-solid fa-circle-check" onClick={editToDo}></i>
        <i className="fa-solid fa-circle-xmark" onClick={cancelEditMode}></i>
      </div> */}
    </div>
  )
}


export default ToDoItem