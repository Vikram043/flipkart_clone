import React from "react";
import ReactDOM from "react-dom/client"; 
import { Provider } from "react-redux";
import store from "./redux/store"; 
import App from "./App";

// Get the root element
const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  console.error("Root element not found");
}
