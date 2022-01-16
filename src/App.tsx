import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Outlet, Link, useRoutes, useParams } from "react-router-dom";
import routes from "./router";
function App() {
  let element = useRoutes(routes);
  return <div className="App">{element}</div>;
}

export default App;
