import React, { useState, useEffect, useRef } from "react";
import "../css/todo.css";

export default function Todo() {
  const [addTodo, setAddTodo] = useState("");
  const [todo, setTodo] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false); //다크모드 상태도 저장해놓으면 좋을듯, context API
  const [todoFilter, setTodoFilter] = useState("all");
  const mounted = useRef(false);

  useEffect(() => {
    setTodo(JSON.parse(localStorage.getItem("todo")));
  }, []);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true; //처음 mount될 때 실행되는 것을 막기위해 넣은 코드임.
    } else {
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
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
      //현재 영어로 Input 넣고 엔터치면 되는데, 한글로 input 넣고 엔터치면 중복으로 todo 등록됨.
      //=> onKeyDown -> onKeyPress로 바꾸면 해결 됨.
    }
  };
  const handleDeleteTodo = (deleteTodoIndex) => {
    let newArr = [...todo];
    newArr.splice(deleteTodoIndex, 1);
    setTodo(newArr);
  };

  return (
    <div className="container">
      {isDarkMode ? (
        // 다크 모드
        <div className="darkmode">
          <button onClick={() => setIsDarkMode((darkmode) => !darkmode)}>
            lightmode
          </button>
          {todo.map((selectTodo, index) => {
            return (
              <div key={index}>
                <input type="checkbox" name="todo" id="todo" />
                <label htmlFor="todo">{selectTodo}</label>
                <button
                  onClick={() => {
                    // 자꾸 arrow function 인자 안에 index, todo 넣어서 안되는 것이었음. 주의해야 함.
                    handleDeleteTodo(index);
                  }}
                >
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
            onKeyPress={(e) => handleKeyPress(e)}
          />
          <button onClick={() => handleAddTodo()}>Add</button>
        </div>
      ) : (
        // 라이트 모드
        <div className="lightmode">
          <div className="buttons">
            <button onClick={() => setIsDarkMode((darkmode) => !darkmode)}>
              darkmode
            </button>
            <button onClick={() => setTodoFilter("all")}>all</button>
            <button onClick={() => setTodoFilter("active")}>active</button>
            <button onClick={() => setTodoFilter("completed")}>
              completed
            </button>
          </div>
          <div className="todos">
            {todo.map((selectTodo, index) => {
              return (
                <div key={index}>
                  <input
                    type="checkbox"
                    className="todos_checkbox"
                    name="todo"
                    id="todo"
                  />
                  <label htmlFor="todo" className="todos_label">
                    {selectTodo}
                  </label>
                  <button
                    className="todos_button"
                    onClick={() => handleDeleteTodo(index)}
                  >
                    지우기
                  </button>
                  {/* deleteTodo: arrow function 인자 안에 index, todo 넣어서 안되는
                것이었음. 주의해야 함. */}
                </div>
              );
            })}
          </div>
          <div className="create">
            <input
              className="create_input"
              type="text"
              name="addTodo"
              placeholder="Add Todo"
              value={addTodo}
              onChange={(e) => handleChange(e)}
              onKeyPress={(e) => handleKeyPress(e)}
            />
            <button className="create_button" onClick={() => handleAddTodo()}>
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
