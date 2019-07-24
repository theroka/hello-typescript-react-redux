import { Todo, ADD_TODO, DELETE_TODO } from "./types"

export const addTodo = (todo: Todo) => ({ type: ADD_TODO, payload: todo })

export const deleteTodo = (todo: Todo) => ({ type: DELETE_TODO, payload: todo })
