
export default function Main(){


    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    let ingredientListItems = ingredients.map((item, index)=>{
        return <li key={index}>{item}</li>
    })

    function submitForm(event) {
        event.preventDefault();
        console.log("Form submited");

        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("add-ingredient")
        console.log({newIngredient});

        
    }

    return (
        <main>
            <form action="" method="post" className="ingredient-form" onSubmit={submitForm}>
                <input type="text" id="add-ingredient" name="add-ingredient" className="add-ingredient" placeholder="e.g. Sucre" />
                <button >Add </button>
            </form>

            <h2>Ingredients on hand</h2>

            <ul>
                {ingredientListItems}
            </ul>

            
        </main>
    )
}