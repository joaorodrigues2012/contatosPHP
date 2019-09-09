<?php
include_once '../connection/pdo_connection.php';

$nomeContato = $_POST['nomeContato'];
$enderecoContato = $_POST['enderecoContato'];
$telefoneContato = $_POST['telefoneContato'];
$celularContato = $_POST['celularContato'];
$emailContato = $_POST['emailContato'];

//$data = array("return" => "O contato " . $nomeContato . ", com o celular " . $celularContato . ", foi cadastrado com sucesso!");

$nomeContato = utf8_decode($nomeContato);
$enderecoContato = utf8_decode($enderecoContato);

$ds = getConnection();

if ($nomeContato != "" && $telefoneContato != "") {
    try {

        $ds->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $ds->prepare("INSERT INTO CONTATO(nomeContato,endereco,telefoneContato,celularContato,emailContato, usuario_id)
     VALUES(:nomeContato,:endereco,:telefoneContato,:celularContato,:emailContato, :usuario_id)");
        $stmt->execute(array(
            ':nomeContato' => $nomeContato,
            ':endereco' => $enderecoContato,
            ':telefoneContato' => $telefoneContato,
            ':celularContato' => $celularContato,
            ':emailContato' => $emailContato,
            ':usuario_id' => '1'
        ));

//    echo $stmt->rowCount();
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
    $data = array("return" => true);
    echo json_encode($data);

} else {
    $data = array("return" => "Os campos nome e telefone são obrigatorios!");
    echo json_encode($data);
}