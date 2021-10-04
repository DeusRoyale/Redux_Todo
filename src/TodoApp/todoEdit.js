import React from "react"
import useInputChange from "../hooks/inputChange"
import { Form } from "react-bootstrap"

const TodoEdit = ({ task, id, toggle, edit }) => {
  const [state, changeInput] = useInputChange(task)

  const submitHandle = (e) => {
    e.preventDefault()
    console.log(`edited ${task} to ${state}`)
    toggle()
    edit(id, state)
  }

  return (
    <>
      <Form onSubmit={submitHandle}>
        <Form.Group className="mb-3" controlId="formBasicSearch">
          <Form.Control 
          value={state} 
          onChange={changeInput} />
        </Form.Group>
      </Form>
    </>
  )
}

export default TodoEdit
