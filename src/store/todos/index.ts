import { TodoState, TodoActionTypes } from "./types"

const initialState: TodoState = {
  todos: []
};

const reducer = (state = initialState, action: TodoActionTypes): TodoState => {
  const { type, payload } = action
  switch (type) {
    case "ADD_TODO":
      return { todos: [ ...state.todos, payload ] }
    case "DELETE_TODO":
      return { todos: state.todos.filter(t => t.text != payload.text) }
    default:
      return { ...state }
  }
}

export default reducer
