import React, { Component } from "react";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    this.loadTodos();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
     
    }
  }
  loadTodos() {
    const todosJSON = [
      "Review and prioritize tasks for the day",
      "Answer urgent emails",
      "Quick team check-in",
      "Outline main goals for the day",
      "Plan breaks to maintain focus",
    ];

    this.setState({ todos: todosJSON });
  }

  render() {
    const { todos } = this.state;

    return (
      <div className="todo-list-container">
        <h2>TODO List</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">
              {todo}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
