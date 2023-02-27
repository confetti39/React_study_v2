import React, { useState } from "react";

export default function Todo() {
  const [addTodo, setAddTodo] = useState("");
  const [todo, setTodo] = useState(["밥먹기", "공부하기"]);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  return (
    <div>
      {isDarkMode ? (
        <div>
          <button onClick={() => setIsDarkMode((darkmode) => !darkmode)}>
            lightmode
          </button>
          {todo.map((todo, i) => {
            return (
              <div>
                <input type="checkbox" name="todo" id="todo" />
                <label for="todo">{todo}</label>
              </div>
            );
          })}
          <input
            type="text"
            name="addTodo"
            placeholder="Add Todo"
            value={addTodo}
            onChange={(e) => {
              handleChange(e);
            }}
            onKeyDown={(e) => {
              handleKeyDown(e);
            }}
          />
          <button
            onClick={() => {
              handleAddTodo();
              setAddTodo("");
            }}
          >
            Add
          </button>
        </div>
      ) : (
        <div>
          <button onClick={() => setIsDarkMode((darkmode) => !darkmode)}>
            darkmode
          </button>
          {todo.map((todo) => {
            return (
              <div>
                <input type="checkbox" name="todo" id="todo" />
                <label for="todo">{todo}</label>
              </div>
            );
          })}
          <input
            type="text"
            name="addTodo"
            placeholder="Add Todo"
            value={addTodo}
            onChange={(e) => {
              handleChange(e);
            }}
            // onKeyDown={(e) => {
            //   handleKeyDown(e);
            // }}
          />
          <button
            onClick={() => {
              handleAddTodo();
              setAddTodo("");
            }}
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
}
