import React, { useState } from 'react'
import { Button, FormControl, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editeTodo } from '../recduux/actions/TodoAction';

export default function EditeTodo({todo}) {
    const [show, setShow] = useState(false);
    const [text, setText] = useState(todo.text);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch=useDispatch()
  return (
    <div>
      <Button variant="danger" onClick={handleShow}>
        Edite
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edite</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormControl type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleClose();dispatch(editeTodo(todo.id,text))}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
