import type { Todo as TodoType } from "../App";
import Todo from "./Todo";

export default function List({ todos }: { todos: TodoType[] }) {
  return (
    <ul className="grid gap-3">
      {todos.map((todo) => (
        <Todo {...todo}></Todo>
      ))}
    </ul>
  );
}
