import React from "react";

export default function Main() {
  const [ingredients, setIngredientsList] = React.useState([]);
  // "Chicken", "Oregano", "Tomatoes"]
  let ingredientListItems = ingredients.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  function submitForm(event) {
    event.preventDefault();
    console.log("Form submited");

    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("add-ingredient");
    console.log({ newIngredient });

    setIngredientsList((prevIngredients) => [
      ...prevIngredients,
      newIngredient,
    ]);
  }

  const [contact, setContact] = React.useState({
    firstName: "Mohamed",
    lastName: "Draou",
    filled: false,
  });

  function clickStar() {
    setContact((filled) => {
      console.log(filled);
      return {
        firstName: contact.firstName,
        lastName: contact.lastName,
        filled: !contact.filled,
      };
    });
  }

  return (
    <main>
      <form
        action=""
        method="post"
        className="ingredient-form"
        onSubmit={submitForm}
      >
        <input
          type="text"
          id="add-ingredient"
          name="add-ingredient"
          className="add-ingredient"
          placeholder="e.g. Sucre"
        />
        <button>Add </button>
      </form>

      <h2>Ingredients on hand</h2>
      {/* <h3>{result}</h3>  */}

      <ul>{ingredientListItems}</ul>

      <div className="contact">
        <h1>
          {contact.firstName} {contact.lastName}
        </h1>
        <button className="star-button" onClick={clickStar}>
          {contact.filled ? (
            <i className="fas fa-star">★</i>
          ) : (
            <i className="far fa-star"></i>
          )}
        </button>
      </div>
    </main>
  );
}
