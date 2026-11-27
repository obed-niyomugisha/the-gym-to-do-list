import type { Todo } from "../App";
import trash from "../assets/trash.svg";

type Props = {
  todo: Omit<Todo, "id">;
  toggleDone: () => void;
  deleteTask: () => void;
};

export default function Todo({
  todo: { value, done },
  toggleDone,
  deleteTask,
}: Props) {
  return (
    <li className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b-gray-600/20 border-b-2 pbe-2">
      <input type="checkbox" checked={done} onChange={toggleDone} />
      <span className={["text-gray-700", done ? "line-through" : ""].join(" ")}>
        {value}
      </span>
      <button
        className="bg-gray-300/30 p-3 rounded-full cursor-pointer"
        onClick={deleteTask}
      >
        <img src={trash} alt="Trash can" width={24} />
      </button>
    </li>
  );
}
