// action types
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export interface Todo {
  id: number | string,
  text: string,
}

export interface TodoState {
  todos: Array<Todo>
}

interface AddTodoAction {
  type: typeof ADD_TODO
  payload: Todo
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO
  payload: Todo
}

export type TodoActionTypes = AddTodoAction | DeleteTodoAction
