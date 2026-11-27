import type { Todo as TodoType } from "../App";
import Todo from "./Todo";

type Props = {
  todos: TodoType[];
  toggleDone: (id: string) => void;
};

export default function List({ todos, toggleDone }: Props) {
  return (
    <ul className="grid gap-3">
      {todos.map((todo) => (
        <Todo todo={todo} toggleDone={() => toggleDone(todo.id)}></Todo>
      ))}
    </ul>
  );
}
