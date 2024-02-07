import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./TodoCreate.module.css";
export default function TodoCreate({ onCreate }) {
  const [todo, setTodo] = useState("");

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo.trim().length === 0) {
      return;
    }

    onCreate({ id: uuidv4(), text: todo, status: "active" });
    setTodo("");
  };

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <input
        className={style.input}
        type="text"
        onChange={onChange}
        placeholder="Add Todo"
        value={todo}
      />
      <button className={style.button} type="submit">
        Add
      </button>
    </form>
  );
}
