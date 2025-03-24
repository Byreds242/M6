function renderApp() {
  const app = document.getElementById("app");

  function RequestTracker() {
    const [pending, setPending] = React.useState(0);
    const [completed, setCompleted] = React.useState(0);

    async function handleClick() {
      // Aumentamos el contador correctamente usando la función de actualización
      setPending((prevPending) => prevPending + 1);

      await delay(3000);

      // Reducimos "pending" y aumentamos "completed" de forma segura
      setPending((prevPending) => Math.max(prevPending - 1, 0)); // Evita valores negativos
      setCompleted((prevCompleted) => prevCompleted + 1);
    }

    return (
      <>
        <h3>Pending: {pending}</h3>
        <h3>Completed: {completed}</h3>
        <button onClick={handleClick}>Buy</button>
      </>
    );
  }

  function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  const root = ReactDOM.createRoot(app);
  root.render(<RequestTracker />);
}
