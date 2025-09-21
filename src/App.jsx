import * as helpers from "./utils/todoHelpers";
import { initialTodos as InitialData } from "./data/todosStructure";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(InitialData);
  const handleAddTodo = (text) => {
    setTodos(helpers.addTodo(todos, text));
  };

  const handleDeleteTodo = (id) => {
    setTodos(helpers.deleteTodo(todos, id));
  };

  const handleToggleTodo = (id) => {
    setTodos(helpers.toggleTodo(todos, id));
  };

  const todoItems = todos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        id={todo.id}
        text={todo.text}
        completed={todo.completed}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
    );
  });

  return (
    <div>
      <TodoForm onAdd={handleAddTodo} />
      {todoItems}
    </div>
  );
}

export default App;
