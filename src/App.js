import TodosIndex from "./components/ToDo/Index";
import UsersIndex from "./components/Users/Index";
import DarkMode from "./components/Theme/DarkMode";
import { Routes, Route } from "react-router-dom"
function App() {

  return (
    <div className="App">
       <DarkMode />
      <Routes>
         
        <Route path="/todos" element={<TodosIndex />} />
        <Route path="/" element={<UsersIndex />} />
      </Routes>
    </div>


  )
}
export default App;

