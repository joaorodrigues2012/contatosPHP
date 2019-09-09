<?php
include "../connection/pdo_connection.php";

$idContato = $_POST['idContato'];
$pdo = getConnection();

$consulta = $pdo->query("SELECT * FROM contato where idContato = $idContato;");


while ($linha = $consulta->fetch(PDO::FETCH_ASSOC)) {
    //echo "Nome: {$linha['nome']} - Usuário: {$linha['usuario']}<br />";
$contato[] = array_map('utf8_encode',$linha);
}

echo json_encode($contato);

