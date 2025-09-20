function TodoItem({ id, text, completed, onToggle, onDelete }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <span>{text}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
