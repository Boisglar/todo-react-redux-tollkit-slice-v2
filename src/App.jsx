import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import { addTodo } from "./store/todoSlice";


function App() {
  const [text, setText] = useState("")
  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch()

   const hendeleAddTodo = () =>{
    if(text !== "") {
      dispatch(addTodo(text), setText(""))
      } 
   } 
   
    

  return (
    <div className="wrapper">
      <Input 
      hendeleAddTodo = {hendeleAddTodo}
      text ={text}
      setText = {setText}
      /> 
      <ul>
        {todos.map((item)=> {
          return(
            <TodoItem  key={item.id}
            item = {item}
            />
          )
        })}
      </ul>

    </div>
  )
}
  

export default App;
