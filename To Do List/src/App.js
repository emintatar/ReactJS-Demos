import React, { useState } from "react";
import "./App.css";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const getInput = (e) => {
    e.preventDefault();
    setNewTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const deleteAllTodos = (e) => {
    e.preventDefault();
    setTodos([]);
  };

  const scratch = (e) => {
    e.preventDefault();
    e.target.style.textDecoration = "line-through";
  };

  const deleteTodo = (e) => {
    e.preventDefault();
    e.target.parentElement.remove();
  };

  return (
    <div className="App">
      <h1>To Do List</h1>

      <form>
        <input
          value={newTodo}
          onChange={getInput}
          type="text"
          placeholder="Add Todo"
        />
        <button className="addBtn" onClick={addTodo}>
          Add
        </button>
        <button className="deleteAllBtn" onClick={deleteAllTodos}>
          Delete
        </button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li onClick={scratch} key={index}>
            {todo}{" "}
            <button className="deleteBtn" onClick={deleteTodo}>
              X
            </button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
