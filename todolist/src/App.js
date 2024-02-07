import "./App.css";
import Header from "./components/TodoHead/Header";
import TodoList from "./components/Todolist/TodoList";
import { useState } from "react";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  const filters = ["all", "active", "completed"];
  const [filter, setFilter] = useState(filters[0]);
  console.log(filter);

  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
