import { FC } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoContext";

const App: FC = () => {
  return (
    <TodoProvider>
      <div className="mx-auto max-w-screen-2xl  h-screen  text-white">
        <div className="">
          <Header />
          <div className="flex flex-col justify-center items-center w-full p-4">
            <Hero />
            <TodoForm />
            <TodoList />
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
