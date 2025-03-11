window.onload = () => {
  renderApp();
};

function renderApp() {
  const app = document.getElementById("app");

  // Componente HomePage
  function HomePage() {
    return (
      <div>
        <RecipeList />
      </div>
    );
  }

  // Defino el array de recetas, cada una con su nombre e ingredientes
  const recipes = [
    {
      id: "greek-salad",
      name: "Greek Salad",
      ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
    },
    {
      id: "hawaiian-pizza",
      name: "Hawaiian Pizza",
      ingredients: ["pizza crust", "pizza sauce", "mozzarella", "ham", "pineapple"],
    },
    {
      id: "hummus",
      name: "Hummus",
      ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
    },
  ];

  // Modifico RecipeList para recorrer el array de recetas y mostrarlas en pantalla.
  function RecipeList() {
    return (
      <div>
        <h1>Recipes</h1>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <h2>{recipe.name}</h2>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  const root = ReactDOM.createRoot(app);
  root.render(<HomePage />);
}
