const { useState } = React;

function PerfilUsuario() {
  // Estados del componente
  const [nombre, setNombre] = useState('Juan');
  const [apellido, setApellido] = useState('Pérez');
  const [editando, setEditando] = useState(false);

  // Cambia entre modo edición y visualización
  const manejarEnvioFormulario = (e) => {
    e.preventDefault();
    setEditando(!editando);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
      <form onSubmit={manejarEnvioFormulario} className="space-y-4">
        <div>
          <label className="block font-semibold">Nombre</label>
          {editando ? (
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="border px-3 py-1 rounded w-full"
            />
          ) : (
            <p>{nombre}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">Apellido</label>
          {editando ? (
            <input
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              className="border px-3 py-1 rounded w-full"
            />
          ) : (
            <p>{apellido}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editando ? 'Guardar perfil' : 'Editar perfil'}
        </button>
      </form>

      <p className="mt-6 text-lg font-medium" id="textoSaludo">
        ¡Hola {nombre} {apellido}!
      </p>
    </div>
  );
}

const raiz = ReactDOM.createRoot(document.getElementById('app'));
raiz.render(<PerfilUsuario />);
