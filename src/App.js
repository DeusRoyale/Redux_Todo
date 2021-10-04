import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from "./Home/home";

import Todo from "./TodoApp/todo";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route path='/' component={Home} exact/>
          <Route path='/todo' component={Todo}/>
        </header>
      </div>
    </Router>
  );
}

export default App;
