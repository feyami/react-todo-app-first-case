import uuid from 'react-uuid';

export const userReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, {
        userName: action.user.userName.toUpperCase(), 
        userId: uuid()}
      ]
    case 'REMOVE_USER':
      return state.filter(user => user.userId !== action.user.userId);
    default:
      return state;

      case 'SET_SELECTED_USER':
        return [{
          userName: action.user.userName.toUpperCase(), 
          userId: action.user.userId}
        ]
  }
} 