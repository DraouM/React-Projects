import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item";
import Contact from "./components/Contact";
import Joke from "./components/Joke";

function App() {
  return (
    <div className="card">
      <Header />
      <Item />
      <div className="contact-list">
        <Contact
          img="../src/assets/person.png"
          name="Sarah James"
          phone="0523652165"
        />
        <Contact
          img="../src/assets/face_ai.jpg"
          name="Jhon Powl"
          phone="6587983265"
        />
        <Contact
          img="../src/assets/kid.png"
          name="Little Mickle"
          phone="9898653254"
        />
      </div>

      <div className="jokes">
        <Joke />
        <Joke />
        <Joke />
        <Joke />
        <Joke />
      </div>
    </div>
  );
}

export default App;
