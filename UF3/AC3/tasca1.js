renderApp();


function renderApp() {
    const app = document.getElementById('app');

    function Form() {
        // Usamos useState para almacenar y actualizar los valores de los inputs.
        const [firstName, setFirstName] = React.useState('');
        const [lastName, setLastName] = React.useState('');

        function handleFirstNameChange(e) {
            setFirstName(e.target.value);
        }

        function handleLastNameChange(e) {
            setLastName(e.target.value);
        }

        function handleReset() {
            setFirstName('');
            setLastName('');
        }

        return (
            <form onSubmit={e => e.preventDefault()}>
                <input
                    placeholder="First name"
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
                <input
                    placeholder="Last name"
                    value={lastName}
                    onChange={handleLastNameChange}
                />
                <h1>Hi, {firstName} {lastName}</h1>
                <button type="button" onClick={handleReset}>Reset</button>
            </form>
        );
    }

    const root = ReactDOM.createRoot(app);
    root.render(<Form />);
}
