
window.onload = () => {
    // Pedimos a la API los libros actuales en base de datos
    fetchBooks();

    // Añadimos al botón de submit del formulario un listener para enlazarlo a la función createBook
}

async function fetchBooks() {
    let apiUrl = "http://localhost/library_crud/api2.php";
    let res = await fetch(apiUrl);
    let books = await res.json();
    // console.log(books);

    //Borramos el contenido de la tabla
    eraseTable();
    // Poblamos la tabla con el contenido del JSON
    updateTable(books);
}

function eraseTable() {
    // Accedemos a la lista de filas de la tabla <tr> y las borramos todas
}

function updateTable(books) {
    let table = document.getElementById("book-table");
    // Iteramos books: por cada book
    // Creamos y añadimos a la tabla una nueva fila (<tr>)

    // Creamos y añadimos a la fila las celdas de id, título, autor, año, acciones.
    // Las celdas id, título, autor, año se deben rellenar con la info del JSON.
    // Las celdas título, autor, año deben tener el atributo contenteditable a true.

    // Creamos dos botones (editar y eliminar) y los añadimos a la celda acciones.
    // Hay que añadir a cada botónn el listener correspondiente para enlazarlos a las funciones editBook i deleteBook, respectivamente.
}

async function deleteBook(event) {
    // Leemos el contenido de la columna id de esa fila
    // Hacemos la petición de DELETE a la API pasando un FormData en el cuerpo del mensaje

    // Muestra respuesta de la API (JSON) por consola

    // Volvemos a pedir libros
    fetchBooks();
}

function editBook(event) {
    // Leemos el contenido de las columnas id, título, autor, año de esa fila

    // Hacemos la petición de PUT correspondiente pasando un FormData en el cuerpo del mensaje
    // p.ej. { "id": 1, "title": "titulo", "author": "autor", "year": 1980 }

    // Muestra respuesta de la API (JSON) por consola

    //Volvemos a pedir libros
    fetchBooks();
}

function createBook(event){
    // Leemos el contenido del formulario: título, autor, año
    
    // Hacemos la petición de POST correspondiente pasando un FormData en el cuerpo del mensaje
    // p.ej. { "title": "titulo", "author": "autor", "year": 1980 }
    // No añadir id, es autoincremental

    // Muestra respuesta de la API (JSON) por consola

    //Volvemos a pedir libros
    fetchBooks();
}
