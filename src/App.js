import React, { useState } from 'react';
import Todo from './Components/Todo';
import TodoForm from './Components/TodoForm';

import logo from './logo.svg';
import './App.css';

function App() {

  const initialTodo = [
    { id: 1, task: "Learn ReactJs", completed: false },
    { id: 2, task: "Learn VueJs", completed: false }
  ]
  const [todoList, updateTodoList] = useState(initialTodo);

  const handleCompleted = (id) => {

    let newTodoList = [...todoList];

    newTodoList.map(todo => {
      if (todo.id === id) {
        todo.completed = true
        return todo
      }
    })
    updateTodoList(newTodoList)
  }

  const handleAdd = (todo) => {
    let newTodoList = [...todoList]
    newTodoList.push(todo)
    updateTodoList(newTodoList)
  }


  return (
    <div className='App'>
      <div className="App-header">
      <h1>MY TODO LIST</h1>
        <div className="frame">
          <div className="container">
            <ul className="list-group">
              <Todo lists={todoList} completeTodo={handleCompleted} />
            </ul>
            <div className="row">
              <TodoForm addTodo={handleAdd} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
