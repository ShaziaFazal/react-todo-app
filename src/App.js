import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./redux/todosSlice";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div className="h-screen relative">
      <Header />
      <div className="p-4 container max-w-md mx-auto">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border outline-none focus:outline-none rounded w-full p-2 mr-2"
          />
          <button
            onClick={handleAddTodo}
            className="border text-nowrap bg-[#ff6f3c] rounded p-2"
          >
            Add Todo
          </button>
        </div>

        <ul className="my-4">
          {todos.map((todo) => (
            <>
              <li
                key={todo.id}
                className={`p-2 flex justify-between bg-white shadow my-2 `}
              >
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => dispatch(toggleTodo(todo.id))}
                    className="ml-2"
                  />
                  <p className={`${todo.completed ? "line-through" : ""}`}>
                    {todo.title}
                  </p>
                </div>

                <button
                  onClick={() => dispatch(deleteTodo(todo.id))}
                  className="text-red-500 hover:text-red-700 ml-2"
                >
                  Delete
                </button>
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className=" absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
