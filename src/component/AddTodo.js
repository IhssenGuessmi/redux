import React, { useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTodo } from '../recduux/actions/TodoAction'

export default function AddTodo() {
    const [text, setText]= useState('');
    const dispatch=useDispatch();
    const handelAdd =(e)=>{
        e.preventDefault()
        if(text){dispatch(addTodo({id:Math.random(),done:false,text}))
        setText('')}
    }
  return (
    <div >
        <Form onSubmit={handelAdd} style={{width:'50%', display:'flex', margin:'auto' }}>
            <FormControl type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
            <Button variant='warning' type='submit' >Add</Button>
        </Form>
    </div>
  )
}
