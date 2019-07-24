import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Heading } from "evergreen-ui";
import { TodoState } from "./store/todos/types";
import { addTodo, deleteTodo } from "./store/todos/actions";
import { AppState } from "./store";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

interface AppProps {
  todos: TodoState;
  addTodo: typeof addTodo;
  deleteTodo: typeof deleteTodo;
}

export class App extends Component<AppProps> {
  render() {
    const { todos, addTodo, deleteTodo } = this.props;
    return (
      <Fragment>
        <Heading size={900}>
          ToDo-Liste
        </Heading>
        <TodoInput addTodo={addTodo} />
        <TodoList todos={todos.todos} deleteTodo={deleteTodo} />
      </Fragment>
    );
  }
}

const mapStateToProps = (root: AppState) => ({
  todos: root.todos
});

const mapDispatch = { addTodo, deleteTodo };

export default connect(
  mapStateToProps,
  mapDispatch
)(App);
