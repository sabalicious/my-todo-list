import { useState } from "react";

function TodoForm({ onAdd }) {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Write a new task"
      />
      <button
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
