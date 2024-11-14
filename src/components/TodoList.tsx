import { FC, useContext, useState } from "react";
import {
  TrashIcon,
  PencilSquareIcon,
  CheckIcon,
} from "@heroicons/react/16/solid";
import { TodoContext } from "../context/TodoContext";

const TodoList: FC = () => {
  const todoContext = useContext(TodoContext);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newText, setNewText] = useState<string>("");
  const [error, setError] = useState<string>("");

  if (!todoContext) {
    throw new Error("TodoContext must be used within a TodoProvider");
  }

  const { todos, toggleTodo, deleteTodo, updateTodo } = todoContext;

  const handleEditClick = (id: number, currentText: string) => {
    setEditingId(id);
    setNewText(currentText);
  };

  const handleUpdateTodo = (id: number) => {
    if (newText.trim() === "") {
      setError("Task cannot be empty");
      return;
    }
    if (newText.trim().length < 3) {
      setError("Task must be at least 3 characters long");
      return;
    }
    if (newText.trim().length > 50) {
      setError("Task cannot be more than 50 characters long");
      return;
    }
    const words = newText.trim().split(/\s+/);
    for (const word of words) {
      if (word.length > 10) {
        setError("Each word must be at most 10 characters long");
        return;
      }
    }
    updateTodo(id, newText);
    setEditingId(null);
    setNewText("");
    setError("");
  };

  return (
    <div className="w-full sm:w-96 mt-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="border border-white flex justify-between items-center p-2 mt-2"
        >
          <div className="flex items-center">
            <label
              htmlFor={`task-${todo.id}`}
              className="flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id={`task-${todo.id}`}
                className="custom-checkbox bg-blue-300 p-2"
                checked={todo.isChecked}
                onChange={() => toggleTodo(todo.id)}
              />
              {editingId === todo.id ? (
                <input
                  type="text"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="pl-2 ml-2 py-1 w-11/12 sm:w-72 outline-none bg-gray-700 text-white rounded custom-editing-input"
                />
              ) : (
                <p className={`pl-2 ${todo.isChecked ? "line-through" : ""}`}>
                  {todo.text}
                </p>
              )}
            </label>
          </div>
          <div className="flex space-x-2">
            {editingId === todo.id ? (
              <button
                className="cursor-pointer"
                aria-label="Save Task"
                onClick={() => handleUpdateTodo(todo.id)}
              >
                <CheckIcon
                  height={20}
                  className="hover:text-green-400 transition-all duration-300"
                />
              </button>
            ) : (
              <button
                className="cursor-pointer"
                aria-label="Edit Task"
                onClick={() => handleEditClick(todo.id, todo.text)}
              >
                <PencilSquareIcon
                  height={20}
                  className="hover:text-amber-400 transition-all duration-300"
                />
              </button>
            )}
            <button
              className="cursor-pointer"
              aria-label="Delete Task"
              onClick={() => {
                setError("");
                deleteTodo(todo.id);
              }}
            >
              <TrashIcon
                height={20}
                className="hover:text-red-400 transition-all duration-300"
              />
            </button>
          </div>
        </div>
      ))}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default TodoList;
