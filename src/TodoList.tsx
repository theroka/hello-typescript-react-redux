import React from "react";
import { Button, Table } from "evergreen-ui";
import { Todo } from "./store/todos/types";
import { deleteTodo } from "./store/todos/actions";

interface TodoListProps {
  todos: Array<Todo>,
  deleteTodo: typeof deleteTodo,
}

const TodoList = (props: TodoListProps) => {
  return (
    <Table>
      <Table.Head>
        <Table.TextHeaderCell colSpan="2">ToDo</Table.TextHeaderCell>
      </Table.Head>
      <Table.Body>
        { props.todos.map((t,i) => (
          <Table.Row key={i}>
            <Table.TextCell>{t.text}</Table.TextCell>
            <Table.TextCell>
              <Button onClick={() => props.deleteTodo(t)}>löschen</Button>
            </Table.TextCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export default TodoList
