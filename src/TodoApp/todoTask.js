import React from "react"
import { ListGroup, Button } from "react-bootstrap"
import useToggler from "../hooks/toggler"
import TodoEdit from "./todoEdit"
import { useDispatch } from "react-redux"
import { deleteTodo } from "../Actions/todoAction"

const TodoTask = ({task}) => {
  const [toggle, setToggle] = useToggler()

  const dispatch = useDispatch()

  return (
    <>
      {toggle ? 
        (
        <TodoEdit/>

      ) 

        :

        (
        <ListGroup>
          <ListGroup.Item
            style={{ textDecoration: task.done ? "line-through" : null }}
          >
            <input type="checkbox" checked={false}/>
              {task.text}{' '}
            <Button onClick={() => dispatch(deleteTodo(task.id))}>❌</Button>
            <Button onClick={setToggle}>📝</Button>
          </ListGroup.Item>
        </ListGroup>
      )}
    </>
  )
}

export default TodoTask
