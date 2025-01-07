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

    const bookData = {
        titulo: document.getElementById("titulo").value,
        autor: document.getElementById("autor").value,
        año: document.getElementById("año").value
    };

    fetch('http://localhost/M6/library_crud/api.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Libro agregado', data);
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


<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Configuración de conexión
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "library_crud";

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Si la solicitud es un GET, se obtienen los libros
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Obtener los libros desde la base de datos
    $sql = "SELECT id, titulo, autor, año FROM libros";
    $result = $conn->query($sql);

    $books = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $books[] = $row;
        }
    }

    // Devolver los libros como JSON
    echo json_encode($books);
}


// Si la solicitud es un POST, se inserta un nuevo libro
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos del libro en formato JSON
    $data = json_decode(file_get_contents('php://input'), true);
    $titulo = $data['titulo'];
    $autor = $data['autor'];
    $año = $data['año'];

    // Usar sentencias preparadas para evitar SQL Injection
    $stmt = $conn->prepare("INSERT INTO libros (titulo, autor, año) VALUES (?, ?, ?)");
    $stmt->bind_param("ssi", $titulo, $autor, $año);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Libro agregado"]);
    } else {
        echo json_encode(["message" => "Error al agregar el libro"]);
    }

    // Cerrar la sentencia
    $stmt->close();
}

// Cerrar la conexión
$conn->close();
?>