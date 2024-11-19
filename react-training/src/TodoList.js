import "./TodoList.css";
export default function TodoList() {
  const TodoList = [
    "Review and prioritize tasks for the day",
    "Answer urgent emails",
    "Quick team check-in",
    "Outline main goals for the day",
    "Plan breaks to maintain focus",
  ];

  return (
    <div>
      <h2>TO-DO List</h2>
      <ul>
        {TodoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
