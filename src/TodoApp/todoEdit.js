import React from "react"
import useInputChange from "../hooks/inputChange"
import { Form } from "react-bootstrap"

const TodoEdit = () => {
  const [state, changeInput] = useInputChange()

  const submitHandle = (e) => {
    e.preventDefault()
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
