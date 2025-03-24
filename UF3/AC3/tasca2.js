renderApp();


function renderApp() {
    const app = document.getElementById('app');

    function FeedbackForm() {
        // Definimos ambos estados antes de cualquier retorno para evitar violar las reglas de los hooks.
        const [isSent, setIsSent] = React.useState(false);
        const [message, setMessage] = React.useState('');

        // Si el mensaje ya ha sido enviado, mostramos el mensaje de agradecimiento.
        if (isSent) {
            return <h1>Thank you!</h1>;
        }

        return (
            <form onSubmit={e => {
                e.preventDefault();
                alert(`Sending: "${message}"`);
                setIsSent(true);
            }}>
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <br />
                <button type="submit">Send</button>
            </form>
        );
    }

    const root = ReactDOM.createRoot(app);
    root.render(<FeedbackForm />);
}
