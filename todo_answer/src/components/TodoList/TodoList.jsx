import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import { v4 as uuidv4 } from "uuid";
import Todo from "../Todo/Todo";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    { id: uuidv4(), text: "장보기", status: "active" },
    { id: uuidv4(), text: "공부하기", status: "active" },
  ]);
  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };
  const handleUpdate = (updated) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };
  const handleDelete = (deleted) =>
    setTodos(todos.filter((todo) => todo.id !== deleted.id));

  const filterd = getFilteredItems(todos, filter);
  return (
    <div>
      <section>
        <ul>
          {filterd.map((item) => (
            <Todo
              key={item.id}
              todo={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      </section>
      <AddTodo onAdd={handleAdd} />
    </div>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
