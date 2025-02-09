export default function Main(){
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    function submitForm(event) {
        event.preventDefault();
        console.log("Form submited");
        
    }

    let ingredientListItems = ingredients.map((item, index)=>{
        return <li key={index}>{item}</li>
    })
    

    return (
        <main>
            <form action="" method="post" className="ingredient-form" onSubmit={submitForm}>
                <input type="text" id="add-ingredient" className="add-ingredien" placeholder="e.g. Sucre" />
                <button >Add </button>
            </form>

            <h2>Ingredients on hand</h2>

            <ul>
                {ingredientListItems}
            </ul>

            
        </main>
    )
}