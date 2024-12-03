import React, { Component } from "react";
import "./TodoList.css";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      useLocalStorage: true,
    };
  }

  componentDidMount() {
    this.loadTodos();
  }

  loadTodos() {
    const storage = this.state.useLocalStorage ? localStorage : sessionStorage;
    const savedTodos = storage.getItem("todos");
    this.setState({ todos: savedTodos ? JSON.parse(savedTodos) : [] });
  }

  saveTodos() {
    const storage = this.state.useLocalStorage ? localStorage : sessionStorage;
    storage.setItem("todos", JSON.stringify(this.state.todos));
  }

  toggleStorage = () => {
    this.setState(
      (prevState) => ({ useLocalStorage: !prevState.useLocalStorage }),
      () => this.loadTodos()
    );
  };

  addTodo = (todo) => {
    this.setState(
      (prevState) => ({ todos: [...prevState.todos, todo] }),
      () => this.saveTodos()
    );
  };

  deleteTodo = (index) => {
    this.setState(
      (prevState) => ({
        todos: prevState.todos.filter((_, i) => i !== index),
      }),
      () => this.saveTodos()
    );
  };

  render() {
    const { todos, useLocalStorage } = this.state;

    return (
      <div className="todo-app">
        <h1>TODO List</h1>
        <label>
          <input
            type="checkbox"
            checked={useLocalStorage}
            onChange={this.toggleStorage}
          />
          Use LocalStorage
        </label>
        <TodoLists todos={todos} onDelete={this.deleteTodo} />
        <AddTodo onAdd={this.addTodo} />
      </div>
    );
  }
}

class TodoLists extends Component {
  render() {
    const { todos, onDelete } = this.props;
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
  }
}

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { newTodo: "" };
  }

  handleChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { newTodo } = this.state;
    if (newTodo.trim()) {
      this.props.onAdd(newTodo.trim());
      this.setState({ newTodo: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="text-box"
          type="text"
          value={this.state.newTodo}
          onChange={this.handleChange}
          placeholder="Add a new TODO"
        />
        <button className="btn-main" type="submit">
          Add
        </button>
      </form>
    );
  }
}

export default TodoList;
