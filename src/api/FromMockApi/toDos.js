import{post,get,put,remove} from "./request"

export const getToDos=()=>get('/todos') ;
export const getToDoDetail=id=>get(`/todos/${id}`) ;
export const newToDo=data=>post('/todos',data) ;
export const toggleCompletedStatus=(id,data)=>put(`/todos/${id}`,data) ;
export const updateToDo=(id,data)=>put(`/todos/${id}`,data) ;
export const deleteToDo=(id)=>remove(`/todos/${id}`) ;