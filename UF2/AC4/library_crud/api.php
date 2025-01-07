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
    // Verificar si la acción es agregar o eliminar
    if (isset($_GET['action']) && $_GET['action'] === 'delete') {
        // Eliminar un libro
        $data = json_decode(file_get_contents('php://input'), true);
        $id = $data['id'];

        // Usar sentencias preparadas para evitar SQL Injection
        $stmt = $conn->prepare("DELETE FROM libros WHERE id = ?");
        $stmt->bind_param("i", $id);

        if ($stmt->execute()) {
            echo json_encode(["message" => "Libro eliminado"]);
        } else {
            echo json_encode(["message" => "Error al eliminar el libro"]);
        }

        // Cerrar la sentencia
        $stmt->close();
    } else {
        // Agregar un libro
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
}

// Cerrar la conexión
$conn->close();
?>
