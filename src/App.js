import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addtodo, removeTodo, toggleTodo } from "./store/todoSlice";


function App() {
const [text, setText] = useState("")
const dispatch = useDispatch()

 const todos = useSelector((state) => state.todos.todos)

 const handeleAddTodo = () => {
   if (text !== ""){
   dispatch(addtodo(text), setText(""))
 } }


  return (
    <div className="wrapper">
      <form onSubmit={(e)=> e.preventDefault()}>
          <input value={text} onChange = {(e)=>setText(e.target.value) } />
          <button onClick={handeleAddTodo}>add</button>
          </form>
          <ul>
            {todos.map((item)=> {
              return(
                <li>
                  <input type="checkbox" checked = {item.complated} onClick={()=>dispatch(toggleTodo(item.id))}/>
                  <span className="text">{item.text}</span>
                  <span className="delete" onClick={()=> dispatch(removeTodo(item.id))}>&times;</span>
                </li>
              )
            })}
          </ul>
          
 
    </div>
  );
}

export default App;
