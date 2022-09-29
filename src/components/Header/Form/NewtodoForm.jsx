import { Formik, Field, Form } from "formik";
import { useTodo } from "../../../context/TodoContext";
import validations from "./Validations";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
export default function NewtodoForm() {
  const { setTodos, todos } = useTodo();
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <Formik
      initialValues={{
        todo: "",
      }}
      onSubmit={(values, bag) => {
        setTodos((prev) => [
          ...prev,
          { id: uuidv4(), todo: values.todo, completed: false },
        ]);

        bag.resetForm();
      }}
      validationSchema={validations}
    >
      <Form>
        <Field
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          id="todo"
          name="todo"
        />
      </Form>
    </Formik>
  );
}
