import React from "react";
import { List, Button, Icon, Checkbox } from "semantic-ui-react";

function TodoList({ data, toggleCheckbox, todoDelete }) {
  return (
    <List divided relaxed>
      {data.map((todo) => (
        <List.Item key={todo.id}>
          <List.Content floated="right">
            <Button icon color="red" onClick={() => todoDelete(todo.id)}>
              <Icon name="delete" />
            </Button>
          </List.Content>
          <List.Content>
            <List.Header>
              <Checkbox
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
                label={todo.title}
                checked={todo.completed}
                onChange={() => toggleCheckbox(todo.id)}
              />
            </List.Header>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
}

export default TodoList;
