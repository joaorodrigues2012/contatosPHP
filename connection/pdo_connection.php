<?php

ini_set('display_errors', true);
error_reporting(E_ALL);

function getConnection()
{
    $dsn = "mysql:host=localhost;dbname=contatophp";
    $username = "root";
    $password = "";

    try {
        $pdo = new PDO($dsn, $username, $password);
        return $pdo;
    } catch (PDOException $e) {

        echo "Erro: ", $e->getMessage();

    }
}


