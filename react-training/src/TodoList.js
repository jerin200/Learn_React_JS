import React, { createContext, useReducer, useContext, useState } from "react";
import "./TodoList.css";
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload }];
    default:
      return state;
  }
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");
  const [error, setError] = useState("");

  const validateInput = () => {
    if (!todoText.trim()) {
      setError("TODO text cannot be empty.");
      return false;
    }
    if (todoText.trim().length < 3) {
      setError("TODO text must be at least 3 characters long.");
      return false;
    }
    setError("");
    return true;
  };

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
    if (error) validateInput();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateInput()) return;

    dispatch({ type: "ADD_TODO", payload: todoText.trim() });

    setTodoText("");
  };

  return (
    <div className="todo-container">
      <h1>TODO Application</h1>
      <form onSubmit={handleFormSubmit} className="todo-form">
        <div className="input-group">
          <input
            type="text"
            value={todoText}
            onChange={handleInputChange}
            placeholder="Enter TODO"
            className={`todo-input ${error ? "error-border" : ""}`}
          />
          {error && <p className="error-text">{error}</p>}
        </div>
        <button type="submit" className="add-button">
          Add TODO
        </button>
      </form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
