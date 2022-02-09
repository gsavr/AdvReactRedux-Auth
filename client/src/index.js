import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";
import App from "./components/App";

const store = createStore(
  reducers,
  {
    //when app boots up - see if there is a token stored in browser
    auth: { authenticated: localStorage.getItem("token") },
  },
  applyMiddleware(reduxThunk)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
