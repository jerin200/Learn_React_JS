// import RandomText from "./RandomText";
import TodoApp from "./TodoList.js";
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
