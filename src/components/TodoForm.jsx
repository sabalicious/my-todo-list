import "./TodoForm.css";
import { useState } from "react";

function TodoForm({ onAdd }) {
  const [value, setValue] = useState("");

  return (
    <div className="todo-form">
      <input
        className="todo-input"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Write a new task"
      />
      <button
        className="add-btn"
        onClick={() => {
          onAdd(value);
          setValue("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default TodoForm;
