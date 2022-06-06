import { ADDTODO, DELETETODO, DONETODO, EDITETODO } from "../Types/TodoTypes"


const initialState={
    todos:[
        {
            id:1,
            done:false,
            text:'learnRedux'
        },
        {
            id:2,
            done:false,
            text:'learnReact'
        }
    ]
}
const TodoReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADDTODO :
            return {
                ...state,todos:[...state.todos,action.payload]
            }
        case DELETETODO :
            return {
                ...state,todos: state.todos.filter(todo=>todo.id!==action.payload)
            }
        case DONETODO :
            return {
                ...state,todos: state.todos.map(todo=>todo.id===action.payload? {...todo,done:!todo.done}:todo)
            }
        case EDITETODO :
            return {
                ...state,todos: state.todos.map(todo=>todo.id===action.payload.id? {...todo,text:action.payload.newText}:todo)
            }
        default : 
        return state
    }
}
export default TodoReducer