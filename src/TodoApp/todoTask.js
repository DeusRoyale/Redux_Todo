import React from "react"
import { ListGroup, Button } from "react-bootstrap"
import useToggler from "../hooks/toggler"
import TodoEdit from "./todoEdit"

const TodoTask = ({ task, removeTask, completed, edit }) => {
  const [toggle, setToggle] = useToggler()

  const removeTaskHandle = () => {
    removeTask(task)
  }

  const editTaskHandle = () => {
    setToggle()
    console.log(toggle)
  }

  const checkBox = () => {
    completed(task)
  }

  return (
    <>
      {toggle ? 
        (
        <TodoEdit
          task={task.task}
          id={task.id}
          toggle={setToggle}
          edit={edit}
        />
      ) 

        :

        (
        <ListGroup>
          <ListGroup.Item
            style={{ textDecoration: task.done ? "line-through" : null }}
          >
            <input type="checkbox" checked={task.done} onChange={checkBox} />

            {task.task}

            <Button onClick={removeTaskHandle}>❌</Button>
            <Button onClick={editTaskHandle}>📝</Button>
          </ListGroup.Item>
        </ListGroup>
      )}
    </>
  )
}

export default TodoTask
