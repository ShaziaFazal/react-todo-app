import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "./redux/todosSlice";
import "./App.css";
import Header from './components/Header'
import Footer from './components/Footer'

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
    <Header/>
    <div className="p-4 container max-w-md mx-auto">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border outline-none focus:outline-none rounded p-2 mr-2"
      />
      <button onClick={handleAddTodo} className="border bg-[#ff6f3c] rounded p-2">
        Add Todo
      </button>
      <ul>
        {todos.map((todo) => (
          <>
            <li
              key={todo.id}
              className={`p-2 flex gap-2 bg-white shadow my-2 ${todo.completed ? "line-through" : ""}`}
            >
             
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                className="ml-2"
              />
              <p>
              {todo.title}

              </p>
            </li>
          </>
        ))}
      </ul>
    </div>
    <div className=" absolute bottom-0 w-full">
    <Footer/>

    </div>
</div>
  );
}

export default App;
