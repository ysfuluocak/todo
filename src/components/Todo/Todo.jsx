import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { Header, Button, Grid, Container } from "semantic-ui-react";

function Todo() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn JavaScript",
      completed: true,
    },
    {
      id: 2,
      title: "Learn React",
      completed: false,
    },
    {
      id: 3,
      title: "Have a Life",
      completed: false,
    },
  ]);

  const [filteredTodos, setFilteredTodos] = useState(todos);

  const handleTodos = (newTodo) => setTodos([...todos, newTodo]);

  const handleToggle = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleTodoDelete = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  useEffect(() => {}, [filteredTodos]);

  return (
    <Container>
      <Header
        as="h1"
        style={{ fontSize: "100px", color: "rgba(175, 47, 47, 0.15)" }}
      >
        todos
      </Header>
      <TodoForm handleTodos={handleTodos} data={filteredTodos} />
      <TodoList
        data={filteredTodos}
        toggleCheckbox={handleToggle}
        todoDelete={handleTodoDelete}
      />
      <Grid columns={3}>
        <Grid.Column>
          <p style={{ fontSize: "16px" }}>
            {filteredTodos.filter((todo) => todo.completed === false).length}
            items left
          </p>
        </Grid.Column>
        <Grid.Column textAlign="center">
          <Button
            primary
            onClick={() => {
              setFilteredTodos(todos);
            }}
          >
            All
          </Button>
          <Button
            secondary
            onClick={() => {
              setFilteredTodos(todos.filter((todo) => todo.completed === false));
            }}
          >
            Active
          </Button>
          <Button
            tertiary
            onClick={() => {
              setFilteredTodos(todos.filter((todo) => todo.completed === true));
            }}
          >
            Completed
          </Button>
        </Grid.Column>
        <Grid.Column textAlign="right">
          <Button
            onClick={() =>
              setTodos((prevTodos) =>
                prevTodos.filter((todo) => todo.completed !== true)
              )
            }
            primary
          >
            Clear Completed
          </Button>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default Todo;
