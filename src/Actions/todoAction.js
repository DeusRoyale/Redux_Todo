export const addTodo = (task) => ({
  type: "ADD_TODO",
  payload: task,
})

export const deleteTodo = (id) => ({ 
  type: "DEL_TODO", 
  payload: id 
})
