window.onload = () => {
    // Pedimos a la API los libros actuales en base de datos
    fetchBooks();

    // Añadimos al botón de submit del formulario un listener para enlazarlo a la función createBook
    document.querySelector('#createButton').addEventListener('click', createBook);
}

function fetchBooks() {
    let apiUrl = "http://localhost/M6/AC5/library_crud";
    let xhr = new XMLHttpRequest();

    xhr.open("GET", apiUrl, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let books = JSON.parse(xhr.responseText);

            eraseTable();
            // Poblamos la tabla con el contenido del JSON
            updateTable(books);
        }
    };
    xhr.send();
}

function eraseTable() {
    // Accedemos a la lista de filas de la tabla <tr> y las borramos todas
    let filas = Array.from(document.querySelectorAll('tbody tr'));
    for (let fila of filas) {
        fila.remove();
    }
}

function updateTable(books) {
    let table = document.getElementById("book-table");

    // Iteramos books: por cada book
    for (let book of books) {
        let row = document.createElement('tr');
        table.append(row);

        let celdaId = document.createElement('td');
        celdaId.innerHTML = book.id;
        row.append(celdaId);

        let celdaTitulo = document.createElement('td');
        celdaTitulo.innerHTML = book.title;
        celdaTitulo.contentEditable = true;
        row.append(celdaTitulo);

        let celdaAutor = document.createElement('td');
        celdaAutor.innerHTML = book.author;
        celdaAutor.contentEditable = true;
        row.append(celdaAutor);

        let celdaAno = document.createElement('td');
        celdaAno.innerHTML = book.year;
        celdaAno.contentEditable = true;
        row.append(celdaAno);

        let celdaAcciones = document.createElement('td');
        row.append(celdaAcciones);

        let buttonEdit = document.createElement('button');
        buttonEdit.innerHTML = "Modificar";
        buttonEdit.addEventListener('click', editBook);
        celdaAcciones.append(buttonEdit);

        let buttonDelete = document.createElement('button');
        buttonDelete.innerHTML = "Eliminar";
        buttonDelete.addEventListener('click', deleteBook);
        celdaAcciones.append(buttonDelete);
    }
}

function deleteBook(event) {
    let celdas = event.target.parentElement.parentElement.children;
    let id = celdas[0].innerHTML;
    let apiUrl = "http://localhost/M6/AC5/library_crud/api.php";

    let xhr = new XMLHttpRequest();
    xhr.open("DELETE", apiUrl, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
            fetchBooks();
        }
    };

    let deletedBook = JSON.stringify({ id });
    xhr.send(deletedBook);
}

function editBook(event) {
    let celdas = event.target.parentElement.parentElement.children;
    let id = celdas[0].innerHTML;
    let titulo = celdas[1].innerHTML;
    let autor = celdas[2].innerHTML;
    let ano = celdas[3].innerHTML;
    let apiUrl = "http://localhost/M6/AC5/library_crud";

    let xhr = new XMLHttpRequest();
    xhr.open("PUT", apiUrl, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
            fetchBooks();
        }
    };

    let modifiedBook = JSON.stringify({ id, title: titulo, author: autor, year: ano });
    xhr.send(modifiedBook);
}

function createBook(event) {
    let titulo = document.querySelector("#book-title").value;
    let autor = document.querySelector("#book-author").value;
    let ano = document.querySelector("#book-year").value;
    let apiUrl = "http://localhost/M6/AC5/library_crud";

    let xhr = new XMLHttpRequest();
    xhr.open("POST", apiUrl, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
            fetchBooks();
        }
    };

    let newBook = JSON.stringify({ title: titulo, author: autor, year: ano });
    xhr.send(newBook);
}
