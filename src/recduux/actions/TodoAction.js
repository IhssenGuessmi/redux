import { ADDTODO, DELETETODO, DONETODO, EDITETODO } from "../Types/TodoTypes"

export const addTodo=newTodo=>{
    return {
        type:ADDTODO,
        payload:newTodo
    }
}
export const deleteTodo=id=>{
    return {
        type:DELETETODO,
        payload:id
    }
}
export const doneTodo=id=>{
    return {
        type:DONETODO,
        payload:id
    }
}
export const editeTodo=(id,newText)=>{
    return {
        type:EDITETODO,
        payload:{id,newText}
    }
}