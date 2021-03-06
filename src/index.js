import React from "react";
import { render } from "react-dom";
import App from "./app";
import "normalize.css";
import { GlobalStyles } from "./globalstyles";

render(
  <React.Fragment>
    <GlobalStyles />
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
