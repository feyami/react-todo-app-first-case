import React, { createContext, useReducer, useEffect } from 'react';
import { userReducer } from '../reducers/userReducer';

export const UserContext = createContext();


const UserProvider = (props) => {
  

  const [users, dispatchUsers] = useReducer(userReducer, [], () => {
    const localData = localStorage.getItem('users');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const [activeUser, dispatchActiveUser] = useReducer(userReducer, [], () => {
    const localData = localStorage.getItem('activeUser');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('activeUser', JSON.stringify(activeUser));
  }, [activeUser]);

  return (
    <UserContext.Provider value={{ users,activeUser,dispatchActiveUser, dispatchUsers }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;