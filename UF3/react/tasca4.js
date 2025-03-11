window.onload = () => {
  renderApp();
}

function renderApp() {
  const app = document.getElementById('app');

  // Componente HomePage
  function HomePage() {
    return (
      <div>
        <PackingList />
      </div>
    );
  }

  // modifico el componente Item para utilizar el operador condicional (cond ? a : b).
  // antes, solo se mostraba el ✅ si isPacked era true
  // ahora si isPacked es false, se mostrara un ❌ para mayor claridad visual.
  function Item({ name, isPacked }) {
    return (
      <li className="item">
        {name} {isPacked ? '✅' : '❌'}
      </li>
    );
  }
    
  function PackingList() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item isPacked={true} name="Space suit" />
          <Item isPacked={true} name="Helmet with a golden leaf" />
          <Item isPacked={false} name="Photo of Tam" />
        </ul>
      </section>
    );
  }

  const root = ReactDOM.createRoot(app);
  root.render(<HomePage />);
}
