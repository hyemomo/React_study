import React from "react";
import style from "./Header.module.css";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDarkMode } from "../../context/DarkModeContext";

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={`${style.header} ${darkMode && style.darkheader}`}>
      <button onClick={toggleDarkMode} className={style.button}>
        {!darkMode && <FaMoon />}
        {darkMode && <FaSun style={{ color: "white" }} />}
      </button>

      <ul className={style.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${style.filter} ${
                filter === value && style.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
