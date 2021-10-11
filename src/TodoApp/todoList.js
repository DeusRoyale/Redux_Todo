import React from "react"
import { Card } from "react-bootstrap"
import TodoTask from "./todoTask"
import { useSelector } from 'react-redux'

const TodoList = () => {

  const addedTodo = useSelector(state => state.todoList)
  

  return (
    <div>
      <Card style={{ width: "18rem" }} bg="warning">
        {addedTodo.map(i => <TodoTask key={i.id} task={i}/>)}
      </Card>
    </div>
  )
}

export default TodoList
