import React from "react"
import useInputChange from "../hooks/inputChange"
import { Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { editTodo } from "../Actions/todoAction"

const TodoEdit = ({task, toggle}) => {
  const [state, setState] = useInputChange(task.text)

   const dispatch= useDispatch()

  const submitHandle = (e) => {
    e.preventDefault()
    dispatch(editTodo(state, task.id ))
    toggle()
  }

  return (
    <>
      <Form onSubmit={submitHandle}>
        <Form.Group className="mb-3" controlId="formBasicSearch">
          <Form.Control 
          value={state} 
          onChange={setState} />
        </Form.Group>
      </Form>
    </>
  )
}

export default TodoEdit
