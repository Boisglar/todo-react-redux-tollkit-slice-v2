import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState : {
        todos : [],
    }, 
    reducers: {
        addTodo(state, actions) {
            state.todos.push({
                id: Math.floor(Math.random() * 1000),
                text: actions.payload,
                complated: false
            })
        },
        deleteTodo(state, actions) {
            state.todos = state.todos.filter((item)=> {
                if(item.id !== actions.payload) {
                    return item
                } return false
            })
        },
        toggleTodo(state, actions) {
            state.todos.find((item)=> {
                if(item.id === actions.payload) {
                   return item.complated = !item.complated
                } return false
            })
        }
    }
})

export const  {addTodo, deleteTodo, toggleTodo} = todoSlice.actions
export default todoSlice.reducer