import React, { useState } from "react";
import { Button, TextInput } from "evergreen-ui";
import { Todo } from "./store/todos/types";
import { addTodo } from "./store/todos/actions";

interface TodoInputProps {
  addTodo: typeof addTodo
}

const TodoInput = (props: TodoInputProps) => {
  const [state, setState] = useState({ text: "" });

  const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, text: evt.target.value })
  }

  const handleSubmit = () => {
    props.addTodo({ id: 1, text: state.text })
  }

  return (
    <div>
      <TextInput
        placeholder="Todo eingeben..."
        onChange={handleInput}
      />
      <Button onClick={handleSubmit}>hinzufügen</Button>
    </div>
  )
}

export default TodoInput
