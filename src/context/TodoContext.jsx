import { createContext, useContext, useState } from "react";
const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
  const [filter, setFilter] = useState("all");

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || [
      {
        id: 1,
        todo: "Learn React",
        completed: false,
      },
    ]
  );

  const toggleTodo = (id) => {
    const clone = [...todos];
    const itemIndex = clone.findIndex((item) => item.id === id);
    const item = clone[itemIndex];
    item.completed = !item.completed;
    setTodos(clone);
  };

  const toggleFilter = (text) => {
    setFilter(text);
    localStorage.setItem("filtername", text);
  };

  const destroy = (id) => {
    const clone = [...todos];
    const itemIndex = clone.findIndex((item) => item.id === id);
    clone.splice(itemIndex, 1);
    setTodos(clone);
    localStorage.setItem("todos", JSON.stringify(clone));
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const values = {
    todos,
    setTodos,
    toggleTodo,
    destroy,
    filter,
    setFilter,
    toggleFilter,
    clearCompleted,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  return context === undefined
    ? console.log("useTodo hook must be called inside TodoProvider component")
    : context;
};
