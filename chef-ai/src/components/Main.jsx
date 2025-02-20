import React from "react";

export default function Main() {
  const [result, setResult] = React.useState("hello World");
  // console.log({ result });
  // setResult("Hola Mohamed !")

  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  let ingredientListItems = ingredients.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  function submitForm(event) {
    event.preventDefault();
    console.log("Form submited");

    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("add-ingredient");
    console.log({ newIngredient });

    setResult("Hola Mohamed !");
  }

  const [items, setItems] = React.useState([]);

  function addItems() {
    setItems((items) => [...items, "Test"]);
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
      <h3>{result}</h3>

      <ul>{ingredientListItems}</ul>

      <button onClick={addItems}>Add Item</button>
      <section aria-live="polite">{items}</section>
    </main>
  );
}
