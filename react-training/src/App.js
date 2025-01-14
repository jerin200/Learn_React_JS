import TodoList, { TodoApp } from "./TodoList";
import RandomText from "./RandomText";
export default function App() {
  return (
    <>
      <div className="main-wrapper">
        <div className="container">
          <div className="left-section">
            <TodoApp />
          </div>
          {/* <div className="right-section">
            <RandomText />
          </div> */}
        </div>
      </div>
    </>
  );
}
