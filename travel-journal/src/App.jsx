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
        <Joke
          title="1. Tech Support"
          setup="Why did the computer go to the doctor?"
        />

        <Joke
          title="2. Coffee Lover"
          setup="Why did the coffee file a police report?"
          punchline="It got mugged!"
        />

        <Joke
          title="3. Math Class"
          setup="Why was the equal sign so humble?"
          punchline="Because it knew it wasn’t less than or greater than anyone else"
        />
        <Joke
          title="4. Gardening"
          setup="Why don’t skeletons fight each other?"
          punchline="They don’t have the guts!"
        />
      </div>
    </div>
  );
}

export default App;
