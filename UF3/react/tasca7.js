window.onload = () => {
  renderApp();
}

function renderApp() {
  const app = document.getElementById('app');

  // Componente HomePage
  function HomePage() {
    return (
      <>
        <Profile person={{
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqiGDWxu58BS_M9_hloRMYzZ_f7LMEs8a6qA&s',
          name: 'Subrahmanyan Chandrasekhar',
        }} />
        <Profile person={{
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVeTLnUbv8mNk5qxugU3PdNduUzCTWGHxawg&s',
          name: 'Creola Katherine Johnson',
        }} />
      </>
    );  
  }

  function Profile({ person }) {
    return (
      <Panel>
        <Header person={person} />
        <Avatar person={person} />
      </Panel>
    );
  }

  function Header({ person }) {
    return <h1>{person.name}</h1>;
  }

  function Avatar({ person }) {
    return (
      <img
        className="avatar"
        src={person.imageUrl}
        alt={person.name}
        width={50}
        height={50}
      />
    );
  }

  function Panel({ children }) {
    const [open, setOpen] = React.useState(true);
    return (
      <section className="panel">
        <button onClick={() => setOpen(!open)}>
          {open ? 'Collapse' : 'Expand'}
        </button>
        {open && children}
      </section>
    );
  }

  const root = ReactDOM.createRoot(app);
  root.render(<HomePage />);
}
