import { FC, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Hero: FC = () => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw new Error("TodoContext must be used within a TodoProvider");
  }

  const { todos } = todoContext;
  const totalTodos = todos.length;
  const checkedTodos = todos.filter((todo) => todo.isChecked).length;

  return (
    <div className="border-2 border-teal-600 rounded-lg w-full max-w-96 sm:w-2/4">
      <div className="flex justify-between items-center min-h-40 p-4 font-redHatText">
        <div>
          <h1 className="text-2xl">Task Done</h1>
          <h3 className="text-md">Keep it up</h3>
        </div>
        <div className="bg-green-500 rounded-full h-28 w-28 flex justify-center items-center font-semibold text-3xl">
          {checkedTodos}/{totalTodos}
        </div>
      </div>
    </div>
  );
};

export default Hero;
