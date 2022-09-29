import { useTodo } from "../../../context/TodoContext";
import { useAutoAnimate } from "@formkit/auto-animate/react";
export default function List() {
  const { todos, filter, destroy, toggleTodo } = useTodo();
  const [animationParent] = useAutoAnimate();
  let filtered = "null";
  filtered = [todos];
  if (filter !== "all") {
    filtered = todos.filter((item) =>
      filter === "active" ? item.completed == false : item.completed == true
    );
  } else {
    filtered = [...todos];
  }

  return (
    <ul className="todo-list" ref={animationParent}>
      {filtered.map((item) => {
        return (
          <li key={item.id} className={item.completed === true && "completed"}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={item.completed == true ? true : false}
                onChange={() => toggleTodo(item.id)}
              />
              <label>{item.todo}</label>
              <button
                className="destroy"
                onClick={() => destroy(item.id)}
              ></button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
