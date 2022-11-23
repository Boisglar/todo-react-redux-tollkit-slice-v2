import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo } from '../store/todoSlice'


export default function TodoItem({item}) {
    const dispatch = useDispatch()
  return (
    <li>
              <input type="checkbox" checked = {item.complated} onChange = {()=> dispatch(toggleTodo(item.id))} />
              <span>{item.text}</span>
              <span onClick={()=> dispatch(deleteTodo(item.id))}>✕</span>
            </li>
  )
}
