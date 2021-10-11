import { createStore, combineReducers} from "redux";
import {todoListReducer}  from "./Reducer/todoReducer";

import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({todoList: todoListReducer})

const store = createStore(reducer, composeWithDevTools())

export default store

//other reducers