import React from 'react';
import ReactDOM from 'react-dom/client';

window.onload = () => {
    renderApp();
}

function renderApp() {
    const app = document.getElementById('app');

    function HomePage() {
        return (
            <div>
                <Gallery />
            </div>
        );
    }

    function Profile({ name, image, profession, awards, discovery }) {
        return (
            <section className="profile">
                <h2>{name}</h2>
                <img className="avatar" src={image} alt={name} width={70} height={70} />
                <ul>
                    <li><b>Profession: </b>{profession}</li>
                    <li><b>Awards: </b>{awards}</li>
                    <li><b>Discovered: </b>{discovery}</li>
                </ul>
            </section>
        );
    }

    function Gallery() {
        return (
            <div>
                <h1>Notable Scientists</h1>
                <Profile 
                    name="Maria Skłodowska-Curie"
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Marie_Curie_%281900%29.jpg/220px-Marie_Curie_%281900%29.jpg"
                    profession="Physicist and Chemist"
                    awards="4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
                    discovery="Polonium (chemical element)"
                />
                <Profile 
                    name="Katsuko Saruhashi"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZG_EyUQ4_4967ox6xqplFARawJYWMSIagFg&s"
                    profession="Geochemist"
                    awards="2 (Miyake Prize for Geochemistry, Tanaka Prize)"
                    discovery="A method for measuring carbon dioxide in seawater"
                />
            </div>
        );
    }

    const root = ReactDOM.createRoot(app);
    root.render(<HomePage />);
}
