import React, { useContext, useState } from 'react';
import Creatable from 'react-select/creatable';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
 
const UserForm = () => {
  const { users,activeUser,dispatchActiveUser, dispatchUsers } = useContext(UserContext);
  const [userName, setUserName] = useState('');
 
  const navigate=useNavigate();
 
  async function handleChange(s) {
   
    await dispatchActiveUser({ type: 'SET_SELECTED_USER', user: { 'userName':s.label,'userId':s.value }});
    navigate("/todos")
    
  };

  async function createNewUser(userName) {
   await dispatchUsers({ type: 'ADD_USER', user: { userName}});
    setUserName('');
    
  }
   

  return (
<div   id={"userFormDiv"}style={{width: '400px'} }>
  <h1>Please Select One Or Create New User... </h1>
    <Creatable
 
    value={activeUser.userName}
    onChange={handleChange}
    onCreateOption={createNewUser}
    options={ users.map(({ userId, userName
    }) => ({ label: userName
      , value: userId }))}
      isSearchable
      autoFocus
  />
  </div>
    
  );
}
 
export default UserForm;