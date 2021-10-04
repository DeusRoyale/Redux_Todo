import React from "react"
import { Form, Button } from "react-bootstrap"
import useInputChange from "../hooks/inputChange"

const TodoForm = ({ todoTask }) => {
  const [state, setState, reset] = useInputChange("")

  const submitHandle = (e) => {
    e.preventDefault()
    //console.log(state)
    todoTask(state)
    reset()
  }

  return (
    <div>
      <Form onSubmit={submitHandle}>
        <Form.Group className="mb-3" controlId="formBasicSearch">
          <Form.Control
            type="search"
            placeholder="Search"
            value={state}
            onChange={setState}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onSubmit={submitHandle}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default TodoForm
