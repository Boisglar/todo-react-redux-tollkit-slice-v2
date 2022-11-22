import { createSlice,} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos", 
    initialState: {
        todos: [],
    }, 
    reducers: {
        addtodo(state, action) {
            state.todos.push({
                id: Math.floor(Math.random() * 1000), 
                text: action.payload,
                complated: false
            })
        },
        removeTodo (state, action) {
            state.todos = state.todos.filter((item) =>item.id !== action.payload )
        },

        toggleTodo (state, action) {
             state.todos.map( item =>{ 
                if (item.id === action.payload){
                    item.complated = !item.complated
                } return false
              })
        }
    }
}) 
export const { addtodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;