import "./TodoItem.css";

function TodoItem({ id, text, completed, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <span className={`todo-text ${completed ? "completed" : ""}`}>
        {text}
      </span>
      <button className="delete-btn" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
