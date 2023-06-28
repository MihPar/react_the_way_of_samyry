import "./index.css";
import store from "./components/redux/redux_store";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <BrowserRouter>
      {/* <React.StrictMode> */}
        <App
          state={state}
          dispatch={store.dispatch.bind(store)}
          store={store}
        />
      {/* </React.StrictMode> */}
    </BrowserRouter>
  );
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
});
