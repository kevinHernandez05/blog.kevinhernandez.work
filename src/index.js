import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


//TO DO: implement enviroments
// if(process.env.NODE_ENV === 'production') serviceWorker.register();
// else serviceWorker.unregister();


