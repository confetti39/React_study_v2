import React, { useState, useEffect, useRef } from "react";

export default function Todo() {
  const [addTodo, setAddTodo] = useState("");
  const [todo, setTodo] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("todo")));
    setTodo(JSON.parse(localStorage.getItem("todo")));
  }, []);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true; //처음 mount될 때 실행되는 것을 막기위해 넣은 코드임.
    } else {
      console.log("reset");
      localStorage.setItem("todo", JSON.stringify(todo));
    }
  }, [todo]);

  const handleChange = (e) => {
    e.preventDefault();
    setAddTodo(e.target.value);
  };
  const handleAddTodo = () => {
    setTodo(() => [...todo, addTodo]);
    setAddTodo("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
      //현재 영어로 Input 넣고 엔터치면 되는데, 한글로 input 넣고 엔터치면 중복으로 todo 등록됨.
      //좀 더 보완해야 함
    }
  };
  const handleDeleteTodo = (deleteTodo) => {
    const index = todo.findIndex((data) => {
      return data == deleteTodo;
    });
    let newArr = [...todo];
    newArr.splice(index, 1);
    setTodo(newArr);
  };

  return (
    <div>
      {isDarkMode ? (
        <div className="darkmode">
          <button onClick={() => setIsDarkMode((darkmode) => !darkmode)}>
            lightmode
          </button>
          {todo.map((todo, i) => {
            return (
              <div>
                <input type="checkbox" name="todo" id="todo" />
                <label for="todo" htmlFor="todo">
                  {todo}
                </label>
                <button onClick={(todo) => handleDeleteTodo(todo)}>
                  지우기
                </button>
              </div>
            );
          })}
          <input
            type="text"
            name="addTodo"
            placeholder="Add Todo"
            value={addTodo}
            onChange={(e) => handleChange(e)}
            // onKeyDown={(e) => handleKeyDown(e)}
          />
          <button onClick={() => handleAddTodo()}>Add</button>
        </div>
      ) : (
        <div>
          <button onClick={() => setIsDarkMode((darkmode) => !darkmode)}>
            darkmode
          </button>
          {todo.map((todo, i) => {
            return (
              <div>
                <input type="checkbox" name="todo" id="todo" />
                <label for="todo" htmlFor="todo">
                  {todo}
                </label>
                <button onClick={(todo) => handleDeleteTodo(todo)}>
                  지우기
                </button>
              </div>
            );
          })}
          <input
            type="text"
            name="addTodo"
            placeholder="Add Todo"
            value={addTodo}
            onChange={(e) => handleChange(e)}
            // onKeyDown={(e) => handleKeyDown(e)}
          />
          <button onClick={() => handleAddTodo()}>Add</button>
        </div>
      )}
    </div>
  );
}
