<?php
$servername = "localhost";
$username = "root";
$password = "";

// Crear conexión
$conn = new mysqli($servername, $username, $password);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// SQL para eliminar la base de datos
$sql = "DROP DATABASE library_crub";

if ($conn->query($sql) === TRUE) {
    echo "Base de datos 'library_crub' eliminada correctamente.";
} else {
    echo "Error al eliminar la base de datos: " . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>
