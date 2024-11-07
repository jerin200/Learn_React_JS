import TodoList from "./TodoList";
export default function App() {
  return (
    <>
      <div className="main-wrapper">
        <div className="container">
          <div className="left-section">
            <TodoList />
          </div>
        </div>
      </div>
    </>
  );
}
