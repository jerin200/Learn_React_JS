import React, { useState, useEffect } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [useLocalStorage, setUseLocalStorage] = useState(true);

  useEffect(() => {
    loadTodos();
  }, [useLocalStorage]);

  const loadTodos = () => {
    const storage = useLocalStorage ? localStorage : sessionStorage;
    const savedTodos = storage.getItem("todos");
    setTodos(savedTodos ? JSON.parse(savedTodos) : []);
  };

  const saveTodos = () => {
    const storage = useLocalStorage ? localStorage : sessionStorage;
    storage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => {
    saveTodos();
  }, [todos]);

  const toggleStorage = () => {
    setUseLocalStorage((prev) => !prev);
  };

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const deleteTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-app">
      <h1>TODO List</h1>
      <label>
        <input
          type="checkbox"
          checked={useLocalStorage}
          onChange={toggleStorage}
        />
        Use LocalStorage
      </label>
      <TodoLists todos={todos} onDelete={deleteTodo} />
      <AddTodo onAdd={addTodo} />
    </div>
  );
};

const TodoLists = ({ todos, onDelete }) => {
  return (
    <ul className="wrapper-todo">
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}{" "}
          <div className="dlt-btn-conatiner">
            <button className="dlt-btn" onClick={() => onDelete(index)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

const AddTodo = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim()) {
      onAdd(newTodo.trim());
      setNewTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="text-box"
        type="text"
        value={newTodo}
        onChange={handleChange}
        placeholder="Add a new TODO"
      />
      <button className="btn-main" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoList;
