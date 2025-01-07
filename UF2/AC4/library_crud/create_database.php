<?php
$servername = "localhost";
$username = "root";
$password = "";

// Crear conexión al servidor (sin especificar base de datos)
$conn = new mysqli($servername, $username, $password);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Crear la base de datos si no existe
$sql = "CREATE DATABASE IF NOT EXISTS library_crud";
if ($conn->query($sql) === TRUE) {
    echo "Base de datos 'library_crud' creada correctamente o ya existía.<br>";
} else {
    die("Error al crear la base de datos: " . $conn->error);
}

// Seleccionar la base de datos
$conn->select_db("library_crud");

// Crear la tabla si no existe
$sql = "CREATE TABLE IF NOT EXISTS libros (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    año INT(4) NOT NULL
)";
if ($conn->query($sql) === TRUE) {
    echo "Tabla 'libros' creada correctamente.<br>";
} else {
    die("Error al crear la tabla: " . $conn->error);
}

// Insertar un libro de ejemplo
$titulo = "Cien años de soledad";
$autor = "Gabriel García Márquez";
$año = 1967;

// Comprobar si el libro ya existe
$check_sql = "SELECT * FROM libros WHERE titulo='$titulo' AND autor='$autor' AND año=$año";
$result = $conn->query($check_sql);

if ($result->num_rows === 0) {
    $insert_sql = "INSERT INTO libros (titulo, autor, año) VALUES ('$titulo', '$autor', $año)";
    if ($conn->query($insert_sql) === TRUE) {
        echo "Libro insertado correctamente: $titulo por $autor.<br>";
    } else {
        echo "Error al insertar el libro: " . $conn->error;
    }
} else {
    echo "El libro ya existe en la base de datos.<br>";
}

// Cerrar la conexión
$conn->close();
?>
