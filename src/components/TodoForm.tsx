import { FC, useState, useContext, FormEvent } from "react";
import { PlusIcon } from "@heroicons/react/16/solid";
import { TodoContext } from "../context/TodoContext";

const TodoForm: FC = () => {
  const [task, setTask] = useState<string>("");
  const [error, setError] = useState<string>("");
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw new Error("TodoContext must be used within a TodoProvider");
  }

  const { addTodo } = todoContext;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
    if (e.target.value.trim() !== "") {
      setError("");
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (task.trim() === "") {
      setError("Task cannot be empty");
      return;
    }
    if (task.trim().length < 3) {
      setError("Task must be at least 3 characters long");
      return;
    }
    if (task.trim().length > 50) {
      setError("Task cannot be more than 50 characters long");
      return;
    }
    const words = task.trim().split(/\s+/);
    for (const word of words) {
      if (word.length > 10) {
        setError("Each word must be at most 10 characters long");
        return;
      }
    }
    addTodo(task);
    setTask("");
  };

  return (
    <div className="w-full sm:w-96">
      <form
        onSubmit={handleSubmit}
        className="flex justify-around items-center mt-4 gap-3 font-redHatText"
      >
        <input
          type="text"
          className="w-full py-3 px-2 bg-slate-700 rounded-lg outline-none"
          placeholder="Write your next task"
          value={task}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="p-2 bg-green-400 hover:bg-green-500 transition-all duration-300 rounded-lg"
        >
          <PlusIcon height={30} />
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default TodoForm;
