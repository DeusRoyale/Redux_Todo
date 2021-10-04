import React, { useState, useEffect } from "react"
import TodoForm from "./todoForm"
import TodoList from "./todoList"
import { v4 as uuidv4 } from "uuid"

const Todo = () => {
  const [listOfTasks, setListOfTasks] = useState([])

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('Key'))
    if(storedData){
      setListOfTasks(storedData)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('Key', JSON.stringify(listOfTasks))
  }, [listOfTasks])

  const todoTask = (i) => {
    console.log("task: " + i)
    setListOfTasks([...listOfTasks, { id: uuidv4(), task: i, done: false }])
  }

  const removeTask = (i) => {
    console.log("remove: " + i.task)
    setListOfTasks(listOfTasks.filter((z) => z.id !== i.id))
  }
  
  const completed = (i) => {
    console.log("done: " + i.task)
    setListOfTasks(listOfTasks.map((z) => {
      return (z.id === i.id ? {...z,  done: !z.done} : z)
    }))
  }

  const edit = (id, state) => {
    setListOfTasks(listOfTasks.map(
      z => {
        return (z.id === id ? {...z, task:state} : z)
      }
    ))
  }

  return (
    <div>
      THE APP
      <TodoForm todoTask={todoTask} />
      <TodoList
        listOfTasks={listOfTasks}
        removeTask={removeTask}
        completed={completed}
        edit={edit}
      />
    </div>
  )
}

export default Todo
