// URL de la API que gestionará los datos de los libros
const apiUrl = 'http://localhost/M6/library_crud/api.php';  // Cambia la URL si es necesario

// Obtener los libros desde el servidor y mostrarlos en la tabla
function loadBooks() {
    fetch(apiUrl)  // Ruta del archivo PHP que muestra los libros
        .then(response => response.json())
        .then(data => {
            console.log(data);  // Verifica si los libros están siendo recibidos
            const tableBody = document.getElementById('book-table');
            tableBody.innerHTML = '';  // Limpiar la tabla antes de agregar los libros

            data.forEach(book => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${book.id}</td>
                    <td>${book.titulo}</td>
                    <td>${book.autor}</td>
                    <td>${book.año}</td>
                    <td>
                        <button onclick="deleteBook(${book.id})">Eliminar</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error al cargar los libros:', error));
}

// Agregar un nuevo libro
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();  // Prevenir el envío tradicional del formulario

    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const año = document.getElementById("año").value;

    // Validar que los campos no estén vacíos
    if (!titulo || !autor || !año) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const bookData = {
        titulo: titulo,
        autor: autor,
        año: año
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Libro agregado', data);
        loadBooks();  // Recargar la lista de libros después de agregar uno
    })
    .catch(error => {
        console.error('Error al agregar el libro:', error);
    });
});

// Eliminar un libro
function deleteBook(bookId) {
    if (confirm('¿Estás seguro de que quieres eliminar este libro?')) {
        fetch(apiUrl + '?action=delete', {  // Asegúrate de que el parámetro de acción sea correcto
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: bookId })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Libro eliminado:', data);
            loadBooks();  // Recargar los libros después de eliminar uno
        })
        .catch(error => console.error('Error al eliminar el libro:', error));
    }
}

// Cargar los libros cuando la página se cargue
window.onload = loadBooks;
