window.onload = () => {
    renderApp();
};

function renderApp() {
    const app = document.getElementById('app');

    // Componente HomePage
    function HomePage() {
        return (
            <div>
                <Profile />
            </div>
        );
    }

    // Nuevo componente Card para evitar la duplicación de código
    function Card({ children }) {
        return (
            <div className="card">
                <div className="card-content">
                    {children} 
                </div>
            </div>
        );
    }

    // Componente Profile utilizando Card
    function Profile() {
        return (
            <div>
                {/* Aquí uso el componente Card y le paso como children la imagen */}
                <Card>
                    <h1>Photo</h1>
                    <img
                        className="avatar"
                        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ93gcuw3opnNWa7oAEjQ2kiNEA2M1GmeWqyWLoWpcH7rhBp2N0"
                        alt="Aklilu Lemma"
                        width={70}
                        height={70}
                    />
                </Card>
                
                {/* Aquí uso el componente Card y le paso como children el texto descriptivo */}
                <Card>
                    <h1>About</h1>
                    <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
                </Card>
            </div>
        );
    }

    const root = ReactDOM.createRoot(app);
    root.render(<HomePage />);
}
