import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'

export default function ListTodos() {
    const todos=useSelector(state=>state.TodoReducer.todos)
  return (
    <div>
        {todos.map(todo=><Todo key={todo.id} todo={todo} />)}
    </div>
  )
}
