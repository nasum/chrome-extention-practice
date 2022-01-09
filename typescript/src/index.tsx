import React from "react";
import ReactDOM from "react-dom";

const body = document.getElementsByTagName("body")[0];

const app = document.createElement("div");
app.setAttribute("id", "app");

body.appendChild(app);

const App = () => {
  return <div>Hello World</div>;
};

ReactDOM.render(<App />, document.getElementById("app"));
