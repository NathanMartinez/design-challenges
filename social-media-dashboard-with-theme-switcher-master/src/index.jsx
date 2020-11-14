import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import ThemeProvider from "./Context/ThemeProvider";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
