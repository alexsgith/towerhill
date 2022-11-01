import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { useState } from "react";
import Login from "./Login";
import Home from "./home/Home";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [activePage, setActivePage] = useState("login");

  switch (activePage) {
    case "home":
      return <Home activePage={activePage} setActivePage={setActivePage} />; //Self closing
    case "login":
      return <Login activePage={activePage} setActivePage={setActivePage} />;
    default:
      return null;
  }

}

export default App;
