window.onload = () => {
  renderApp();
}

function renderApp() {
  const app = document.getElementById('app');

  // Componente HomePage
  function HomePage() {
    return (
      <div>
        <RecipeList />
      </div>
    );
  }
  
  const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
  }, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
  }, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
  }];

  function RecipeList() {
    return (
      <div>
        <h1>Recipes</h1>
      </div>
    );
  }

  const root = ReactDOM.createRoot(app);
  root.render(<HomePage />);
}
