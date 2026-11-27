import { useState } from "react";
import List from "./components/List";

export type Todo = {
  id: string;
  value: string;
  done: boolean;
};

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    setTodos([
      ...todos,
      { id: crypto.randomUUID(), value: inputValue, done: false },
    ]);
    setInputValue("");
  }

  function toggleDone(id: string) {
    const index = todos.findIndex((todo) => todo.id == id);
    const todo = todos[index];

    setTodos(todos.toSpliced(index, 1, { ...todo, done: !todo.done }));
  }

  return (
    <main className="mx-auto mbs-20 w-xl">
      <h1 className="text-center text-8xl text-gray-600/20 font-semibold mbe-14">
        todos
      </h1>
      <form className="relative" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add todo..."
          className="rounded-full w-full py-3 ps-5 pe-16 shadow-[0_0_8px_gray] placeholder:text-black"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />

        <div className="absolute right-6 inset-y-0 grid items-center">
          <button className="bg-cyan-500 rounded-full text-2xl w-8 h-8 text-white font-bold grid place-content-center cursor-pointer">
            +
          </button>
        </div>
      </form>
      <div className="mbs-7">
        <List todos={todos} toggleDone={toggleDone}></List>
      </div>
    </main>
  );
}
