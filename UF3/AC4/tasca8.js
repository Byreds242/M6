renderApp();

function renderApp() {
  const app = document.getElementById('app');

  let nextId = 3;
  const initialTodos = [
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat tacos', done: false },
    { id: 2, title: 'Brew tea', done: false },
  ];

  function TaskApp() {
    const [todos, setTodos] = React.useState(initialTodos);
  
    function handleAddTodo(title) {
      setTodos(prevTodos => [
        ...prevTodos,
        { id: nextId++, title, done: false }
      ]);
    }
  
    function handleChangeTodo(nextTodo) {
      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo.id === nextTodo.id ? nextTodo : todo
        )
      );
    }
  
    function handleDeleteTodo(todoId) {
      setTodos(prevTodos =>
        prevTodos.filter(todo => todo.id !== todoId)
      );
    }
  
    return (
      <>
        <AddTodo onAddTodo={handleAddTodo} />
        <TaskList
          todos={todos}
          onChangeTodo={handleChangeTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      </>
    );
  }
  

  function AddTodo({ onAddTodo }) {
    const [title, setTitle] = React.useState('');
    return (
      <>
        <input
          placeholder="Add todo"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button onClick={() => {
          setTitle('');
          onAddTodo(title);
        }}>Add</button>
      </>
    )
  }

  function TaskList({
    todos,
    onChangeTodo,
    onDeleteTodo
  }) {
    return (
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <Task
              todo={todo}
              onChange={onChangeTodo}
              onDelete={onDeleteTodo}
            />
          </li>
        ))}
      </ul>
    );
  }
  
  function Task({ todo, onChange, onDelete }) {
    const [isEditing, setIsEditing] = React.useState(false);
    let todoContent;
    if (isEditing) {
      todoContent = (
        <>
          <input
            value={todo.title}
            onChange={e => {
              onChange({
                ...todo,
                title: e.target.value
              });
            }} />
          <button onClick={() => setIsEditing(false)}>
            Save
          </button>
        </>
      );
    } else {
      todoContent = (
        <>
          {todo.title}
          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      );
    }
    return (
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={e => {
            onChange({
              ...todo,
              done: e.target.checked
            });
          }}
        />
        {todoContent}
        <button onClick={() => onDelete(todo.id)}>
          Delete
        </button>
      </label>
    );
  }

  const root = ReactDOM.createRoot(app);
  root.render(<TaskApp />);
}