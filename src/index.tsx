import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store"
import App from "./App"

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const root = document.getElementById("root");
render(<Root />, root);
