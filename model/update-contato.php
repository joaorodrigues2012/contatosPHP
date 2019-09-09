<?php
include_once '../connection/pdo_connection.php';

$idContato = $_POST['idContato'];
$nomeContato = $_POST['nomeContato'];
$enderecoContato = $_POST['enderecoContato'];
$telefoneContato = $_POST['telefoneContato'];
$celularContato = $_POST['celularContato'];
$emailContato = $_POST['emailContato'];

$nomeContato = utf8_decode($nomeContato);
$enderecoContato = utf8_decode($enderecoContato);

$ds = getConnection();

try {

    $ds->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $ds->prepare("UPDATE CONTATO SET nomeContato = :nomeContato, endereco = :endereco,
 telefoneContato = :telefoneContato,celularContato = :celularContato, emailContato = :emailContato where idContato = :idContato");
    $stmt->execute(array(
        ':nomeContato' => $nomeContato,
        ':endereco' => $enderecoContato,
        ':telefoneContato' => $telefoneContato,
        ':celularContato' => $celularContato,
        ':emailContato' => $emailContato,
        ':idContato' => $idContato
    ));

//    echo $stmt->rowCount();
} catch (PDOException $e) {
    echo 'Error: ' . $e->getMessage();
}
$data = array("return" => true);
echo json_encode($data);
