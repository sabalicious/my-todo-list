import * as helpers from "./utils/todoHelpers";
import { initialTodos as InitialData } from "./data/todosStructure";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import TodoFilter from "./components/TodoFilter";
import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(InitialData);
  const [filter, setFilter] = useState("All");

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  const handleChange = (newText, id) => {
    setTodos(helpers.updateTodoText(todos, id, newText));
  };

  const handleAddTodo = (text) => {
    setTodos(helpers.addTodo(todos, text));
  };

  const handleDeleteTodo = (id) => {
    setTodos(helpers.deleteTodo(todos, id));
  };

  const handleToggleTodo = (id) => {
    setTodos(helpers.toggleTodo(todos, id));
  };

  const filteredTodos = helpers.filterTodo(todos, filter);

  const todoItems = filteredTodos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        id={todo.id}
        text={todo.text}
        completed={todo.completed}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
        onChange={handleChange}
      />
    );
  });

  return (
    <div className="app">
      <h1 className="app-title">My Todo App</h1>
      <TodoForm onAdd={handleAddTodo} />
      <TodoFilter filter={filter} onFilter={handleFilter} />
      <div className="todo-list">{todoItems}</div>
    </div>
  );
}

export default App;
