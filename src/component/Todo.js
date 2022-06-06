import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTodo, doneTodo } from '../recduux/actions/TodoAction'
import EditeTodo from './EditeTodo'

export default function Todo({todo}) {
    const dispatch=useDispatch()
  return (
    <div style={{display:'flex', width:'50%',justifyContent:'space-between', alignItems:'center',margin:'auto' }}>
        <p style={{textDecoration:todo.done? 'line-through':null}} >{todo.text}</p>
        <Button variant='danger' onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</Button>
        <EditeTodo todo={todo}/>
        <Button variant='danger' onClick={()=>dispatch(doneTodo(todo.id))}>Done</Button>
    </div>
  )
}
