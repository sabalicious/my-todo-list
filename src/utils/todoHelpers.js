import { nanoid } from "nanoid";

export function addTodo(todos, newTodo) {
  if (!newTodo.trim()) return todos;

  return [
    ...todos,
    {
      id: nanoid(),
      text: newTodo.trim(),
      completed: false,
      createdAt: new Date(),
    },
  ];
}

export function deleteTodo(todos, id) {
  return todos.filter((todo) => todo.id !== id);
}

export function toggleTodo(todos, id) {
  return todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }

    return todo;
  });
}

export function updateTodoText(todos, id, newText) {
  return todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, text: newText };
    }

    return todo;
  });
}

export function filterTodo(todos, filter) {
  if (filter === "All") {
    return todos;
  } else if (filter === "Active") {
    return todos.filter((todo) => todo.completed === false);
  } else if (filter === "Done") {
    return todos.filter((todo) => todo.completed === true);
  }
}
