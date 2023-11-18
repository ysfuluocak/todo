import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const initialValue = { id: 0, title: "", completed: false };

function TodoForm({ handleTodos, data }) {
  const [form, setForm] = useState(initialValue);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.title === "") {
      return false;
    }
    handleTodos(form);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <input
          type="text"
          placeholder="New Todo"
          onChange={(e) =>
            setForm({ ...form, id: data.length + 1, title: e.target.value })
          }
        />
      </Form.Field>
    </Form>
  );
}

export default TodoForm;
