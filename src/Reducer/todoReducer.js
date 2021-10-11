import { v4 as uuidv4 } from "uuid"

export const todoListReducer = (state = [], action) => {
  switch (action.type){
    case 'ADD_TODO':
      return [...state, {id: uuidv4(), text: action.payload, done: false}]
    case 'DEL_TODO':
      return state.filter(i => i.id !== action.payload)
    case 'DONE_TODO':
      return state.map(z => z.id === action.payload ? {...z, done: !false} : z)
    default:
      return state
  }
}