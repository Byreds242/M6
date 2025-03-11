
// Componente HomePage
function HomePage() {
    return (
      <div>
        <Profile />
        <Bio />
        <Gallery />
      </div>
    );
  }
  
  // Componente Profile
  function Profile() {
    return (
      <img
        src="https://i.imgur.com/jA8hHMpm.jpg"
        alt="Katsuko Saruhashi"
      />
    );
  }
  
  // Componente Bio
  function Bio() {
    return (
      <div className="intro">
        <h1>Welcome to my website!</h1>
        <p className="summary">
          You can find my thoughts here.
          <br />
          <br />
          <b>And <i>pictures</i></b> of scientists!
        </p>
      </div>
    );
  }
  
  // Componente Gallery
  function Gallery() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
  }
  
  // Renderizar en el DOM
  const app = document.getElementById("app");
  const root = ReactDOM.createRoot(app);
  root.render(<HomePage />);
  console.log("Tasca 1 completada");
  