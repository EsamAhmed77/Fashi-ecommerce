import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducer from "./redux/reducer";
import App from "./App";

//global
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./Layout/components/style/Main.scss";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector("#root")
);
