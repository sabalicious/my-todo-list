import { useState } from "react";
import "./TodoItem.css";

function TodoItem({ id, text, completed, onToggle, onDelete, onChange }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState("");

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <span className={`todo-text ${completed ? "completed" : ""}`}>
        {isEdit ? (
          <input
            type="text"
            value={editText}
            onChange={(event) => setEditText(event.target.value)}
            onBlur={() => {
              setIsEdit(false);
              onChange(editText, id);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setIsEdit(false);
                setEditText("");
                onChange(editText, id);
              }
              if (event.key === "Escape") {
                setIsEdit(false);
                setEditText("");
              }
            }}
            autoFocus
          />
        ) : (
          <span
            onDoubleClick={() => {
              setIsEdit(true);
              setEditText(text);
            }}
          >
            {text}
          </span>
        )}
      </span>
      <button className="delete-btn" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
