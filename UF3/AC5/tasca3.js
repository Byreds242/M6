const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(<LlistaFiltrable />);

// Componente principal que contiene el estado de la búsqueda y filtra la lista
function LlistaFiltrable() {
  const [consulta, setConsulta] = React.useState('');

  const alimentsFiltrats = filterItems(foods, consulta);

  return (
    <>
      <BarraCerca consulta={consulta} canviarConsulta={setConsulta} />
      <hr />
      <Llista items={alimentsFiltrats} />
    </>
  );
}

// Componente que recibe el estado desde el padre
function BarraCerca({ consulta, canviarConsulta }) {
  function manejarCanvi(e) {
    canviarConsulta(e.target.value);
  }

  return (
    <label>
      Buscar:{' '}
      <input
        value={consulta}
        onChange={manejarCanvi}
      />
    </label>
  );
}

// Muestra la lista ya filtrada
function Llista({ items }) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Función que filtra por palabra que empieza por el query
function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter(item =>
    item.name.split(' ').some(word =>
      word.toLowerCase().startsWith(query)
    )
  );
}

// Lista de alimentos
const foods = [
  {
    id: 0,
    name: 'Sushi',
    description: 'Sushi is a traditional Japanese dish of prepared vinegared rice'
  },
  {
    id: 1,
    name: 'Dal',
    description: 'The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added'
  },
  {
    id: 2,
    name: 'Pierogi',
    description: 'Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water'
  },
  {
    id: 3,
    name: 'Shish kebab',
    description: 'Shish kebab is a popular meal of skewered and grilled cubes of meat.'
  },
  {
    id: 4,
    name: 'Dim sum',
    description: 'Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch'
  }
];
