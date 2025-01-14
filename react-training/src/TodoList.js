import React, { createContext, useReducer, useContext } from "react";
import "./TodoList.css";

const initialState = {
  todos: [],
};

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const UPDATE_TODO = "UPDATE_TODO";

function todoReducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
        ),
      };
    default:
      return state;
  }
}

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
}

export function TodoApp() {
  return (
    <TodoProvider>
      <TodoList />
      <AddTodoForm />
    </TodoProvider>
  );
}

function TodoList() {
  const { state, dispatch } = useTodos();

  const handleRemove = (id) => {
    dispatch({ type: REMOVE_TODO, payload: id });
  };

  return (
    <ul>
      {state.todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => handleRemove(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

function AddTodoForm() {
  const { dispatch } = useTodos();
  const [text, setText] = React.useState("");

  const handleAdd = () => {
    const newTodo = { id: Date.now(), text };
    dispatch({ type: ADD_TODO, payload: newTodo });
    setText("");
  };

  return (
    <div className="main-conatiner">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a TODO"
      />
      <button onClick={handleAdd}>Add TODO</button>
    </div>
  );
}
