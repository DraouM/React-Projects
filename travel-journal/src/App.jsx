import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item";
import Contact from "./components/Contact";
import Joke from "./components/Joke";

// import images (static assets in vite)
import person from "./assets/person.png";
import face_ai from "./assets/face_ai.jpg";
import kid from "./assets/kid.png";
import marker from "./assets/marker.png";

import jokesData from "../src/jokesData";
import placesData from "./placesData";

function App() {
  // const jokesElem = jokesData.map((joke) => {
  //   return <Joke {...joke} />;
  // });
  
  const placesElem = placesData.map((place) => {
    return (
      <Item
        title={place.title}
        location={place.location}
        date={place.startDate + " - " + place.endDate}
        description={place.description}
        image={place.image}
        link={place.link}
      />
    );
  });

  console.log(placesData);
  return (
    <main className="card">
      <Header />
      {placesElem}
    </main>
  );
}

export default App;

{
  /* <div className="card">
      <Header />
      <Item 
        image = {{
          src : "/src/assets/place_1.jpg",
          alt : "beautiful place"
        }}
        country = "United States"
        location = "Seattle, Seattle"
        date = "February 22, 2022, Mars 26, 2022"
        description ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        obcaecati minus facere expedita hic Vero. voluptatem voluptate quaerat
        quasi, odio perferendis alias similique, corrupti ullam explicabo
        doloribus! Ut, sed odit."
        link = "https://www.google.com"

      />


      {/* <div className="contact-list">
        <Contact
          img={person}
          name="Sarah James"
          phone="0523652165"
        />
        <Contact
          img={face_ai}
          name="Jhon Powl"
          phone="6587983265"
        />
        <Contact
          img={kid}
          name="Little Mickle"
          phone="9898653254"
        />
      </div> */
}

{
  /* <div className="jokes">
        <Joke
        num={1} 
          title="1. Tech Support"
          setup="Why did the computer go to the doctor?"
        />

        <Joke
          num={ [2,2]}
          title="2. Coffee Lover"
          setup="Why did the coffee file a police report?"
          punchline="It got mugged!"
        />

        <Joke
          num={54.65}
          title="3. Math Class"
          setup="Why was the equal sign so humble?"
          punchline="Because it knew it wasn’t less than or greater than anyone else"
        />
        <Joke
          num={true ? "isPun" : 4}
          title="4. Gardening"
          setup="Why don’t skeletons fight each other?"
          punchline="They don’t have the guts!"
        />
      </div> 
    </div> */
}
