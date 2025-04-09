const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(<EntradasSincronizadas />);

// Componente principal que mantiene el estado compartido
function EntradasSincronizadas() {
  const [texto, setTexto] = React.useState('');

  return (
    <>
      <Entrada texto={texto} cambiarTexto={setTexto} etiqueta="Primer input" />
      <Entrada texto={texto} cambiarTexto={setTexto} etiqueta="Segon input" />
    </>
  );
}

// Componente reutilizable que usa props para mantenerse sincronizado
function Entrada({ etiqueta, texto, cambiarTexto }) {
  function manejarCambio(e) {
    cambiarTexto(e.target.value);
  }

  return (
    <label>
      {etiqueta}{' '}
      <input
        type="text"
        value={texto}
        onChange={manejarCambio}
      />
    </label>
  );
}
