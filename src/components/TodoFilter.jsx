import "./TodoFilter.css";

function TodoFilter({ filter, onFilter }) {
  return (
    <div className="todo-filter">
      <button
        onClick={() => onFilter("All")}
        className={`filter-btn ${filter === "All" ? "active" : ""}`}
      >
        All
      </button>

      <button
        onClick={() => onFilter("Active")}
        className={`filter-btn ${filter === "Active" ? "active" : ""}`}
      >
        Active
      </button>

      <button
        onClick={() => onFilter("Done")}
        className={`filter-btn ${filter === "Done" ? "active" : ""}`}
      >
        Done
      </button>
    </div>
  );
}

export default TodoFilter;
