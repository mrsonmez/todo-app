import { useTodo } from "../../context/TodoContext";

export default function Footer() {
  const { todos, filter, toggleFilter, clearCompleted } = useTodo();
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.length}&nbsp;</strong>
        item{todos.length > 1 ? "s" : ""} left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            onClick={() => toggleFilter("all")}
            className={filter == "all" && "selected"}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => toggleFilter("active")}
            className={filter == "active" && "selected"}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => toggleFilter("completed")}
            className={filter == "completed" && "selected"}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={() => clearCompleted()}>
        Clear completed
      </button>
    </footer>
  );
}
