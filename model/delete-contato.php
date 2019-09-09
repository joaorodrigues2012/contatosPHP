<?php
include '../connection/pdo_connection.php';

$id = $_POST['idContato'];

try {
    $pdo = getConnection();
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->prepare('DELETE FROM contato WHERE idContato = :idContato');
    $stmt->bindParam(':idContato', $id);
    $stmt->execute();

   // echo $stmt->rowCount();
    $sucess = array("return" => true);
    echo json_encode($sucess);
} catch (PDOException $e) {
    echo 'Error: ' . $e->getMessage();
}