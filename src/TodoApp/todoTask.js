import React from "react"
import { ListGroup, Button } from "react-bootstrap"
import useToggler from "../hooks/toggler"
import TodoEdit from "./todoEdit"
import { useDispatch } from "react-redux"
import { deleteTodo, doneTodo } from "../Actions/todoAction"

const TodoTask = ({ task }) => {
  const [toggle, setToggle] = useToggler()

  const dispatch = useDispatch()

  return (
    <>
      {toggle ? (
        <TodoEdit task={task} toggle={setToggle}/>
      ) : (
        <ListGroup>
          <ListGroup.Item
            style={{ textDecoration: task.done ? "line-through" : null }}
          >
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => dispatch(doneTodo(task.id))}
            />
            {task.text}{" "}
            <Button onClick={() => dispatch(deleteTodo(task.id))}>❌</Button>
            <Button onClick={setToggle}>📝</Button>
          </ListGroup.Item>
        </ListGroup>
      )}
    </>
  )
}

export default TodoTask
