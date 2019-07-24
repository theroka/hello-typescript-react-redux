import { createStore, combineReducers } from "redux";
import todosReducer from "./todos"

const rootReducer = combineReducers({
  todos: todosReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default createStore(rootReducer)
