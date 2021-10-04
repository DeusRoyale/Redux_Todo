import React from "react"
import { Card } from "react-bootstrap"
import TodoTask from "./todoTask"

const TodoList = ({ listOfTasks, removeTask, completed, edit }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} bg="warning">
        {listOfTasks.map((i) => (
          <TodoTask
            task={i}
            key={i.id}
            removeTask={removeTask}
            completed={completed}
            edit={edit}
          />
        ))}
      </Card>
    </div>
  )
}

export default TodoList
