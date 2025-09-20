import { nanoid } from "nanoid";

export const initialTodos = [
  {
    id: nanoid(),
    text: "Learn React",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: nanoid(),
    text: "Learn English",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: nanoid(),
    text: "Move abroad",
    completed: false,
    createdAt: new Date(),
  },
];
