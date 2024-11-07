import TodoList from "./TodoList";
import RandomText from "./RandomText";
export default function App() {
  return (
    <>
      <div className="main-wrapper">
        <div className="container">
          <div className="left-section">
            <TodoList />
          </div>
          <div className="right-section">
            <RandomText />
          </div>
        </div>
      </div>
    </>
  );
}
