export const addTodo = (task) => ({
  type: "ADD_TODO",
  payload: task,
})

export const deleteTodo = (id) => ({ 
  type: "DEL_TODO", 
  payload: id 
})

export const doneTodo = (id) => ({ 
  type: "DONE_TODO", 
  payload: id
})