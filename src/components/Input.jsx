import React from 'react'

export default function Input({text, setText, hendeleAddTodo}) {
  
  return (
    <form onSubmit={(e)=> e.preventDefault()}>
    <input value={text} onChange = {(e) => setText(e.target.value)} />
    <button onClick ={hendeleAddTodo}>add</button>
 </form>
    
  )
}
