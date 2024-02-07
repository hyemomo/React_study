import React, { useEffect, useState } from "react";
import TodoCreate from "../TodoCreate/TodoCreate";
import Todo from "../Todo/Todo";
import style from "./TodoList.module.css";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(readTodo);

//처음 마운트 될 때, todos가 변경될때마다 localstorage에서 todos라는 이름으로 todos를 받아옴
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onCreate = (todo) => {
    setTodos(todos.concat(todo));
  };
  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const onUpdate = (updated) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };
  const filtered = getFilteredItem(todos, filter);
  return (
    <section className={style.container}>
      <ul className={style.list}>
        {filtered.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </ul>
      <TodoCreate onCreate={onCreate} />
    </section>
  );
}

const readTodo = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};
const getFilteredItem = (todos, filter) => {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
};
