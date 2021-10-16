import React, {useEffect} from "react"
import { Card } from "react-bootstrap"
import TodoTask from "./todoTask"
import { useSelector } from 'react-redux'

const TodoList = () => {

  var addedTodo = useSelector(state => state.todoList)
  
  useEffect(() => {
    localStorage.setItem('key', JSON.stringify(addedTodo))
  }, [addedTodo])
  

  return (
    <div>
      <Card style={{ width: "18rem" }} bg="warning">
        {addedTodo.map(i => <TodoTask key={i.id} task={i}/>)}
      </Card>
    </div>
  )
}

export default TodoList
