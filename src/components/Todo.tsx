import type { Todo } from "../App";
import trash from "../assets/trash.svg";

export default function Todo({ value, done }: Todo) {
  return (
    <li className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b-gray-600/20 border-b-2 pbe-2">
      <input type="checkbox" checked={done} />
      <span className="text-gray-700">{value}</span>
      <button className="bg-gray-300/30 p-3 rounded-full cursor-pointer">
        <img src={trash} alt="Trash can" width={24} />
      </button>
    </li>
  );
}
