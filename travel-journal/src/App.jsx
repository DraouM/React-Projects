import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item"

function App() {
  return (
    <div className="card">
      <Header />
      <Item />
    </div>
  );
}

export default App;
