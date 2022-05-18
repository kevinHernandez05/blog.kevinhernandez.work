import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

//TO DO: implement enviroments
// if(process.env.NODE_ENV === 'production') serviceWorker.register();
// else serviceWorker.unregister();
