import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";
import Counters from "./components/Asynchronous";

ReactDOM.render(<Counter />, document.getElementById("root"));
ReactDOM.render(<Counters />, document.getElementById("root"));
