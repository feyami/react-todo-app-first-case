import UserForm from "./UserForm";
import  UserProvider from '../../contexts/UserContext'

function Index() {
  
  return (
    <UserProvider>
    
      <UserForm  /> 
    
    </UserProvider>
  )
}
export default Index;
 