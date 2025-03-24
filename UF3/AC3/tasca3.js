renderApp();

function renderApp() {
    const app = document.getElementById('app');

    function FeedbackForm() {
        const [name, setName] = React.useState('');
      
        function handleClick() {
            const newName = prompt('What is your name?'); // Guardamos el nuevo valor
            setName(newName); // Actualizamos el estado
            alert(`Hello, ${newName}!`); // Usamos directamente el nuevo valor
        }
      
        return (
          <button onClick={handleClick}>
            Greet
          </button>
        );
    }

    const root = ReactDOM.createRoot(app);
    root.render(<FeedbackForm />);
}
