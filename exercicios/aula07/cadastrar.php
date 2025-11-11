<?php

    $email = $_POST["email"];
    $password = $_POST["password"];
    $name = $_POST["username" + "last_name"];
    $birthday = $_POST["b-day"];

    $con = mysqli_connect("localhost:3306",
     "root",
     "PUC@1234",
    "name_without_creativity");

    $stmt = mysqli_stmt_init($con); // Initiate a statement
    $query = "INSERT INTO Web_User(email, password, name_user, birthday) VALUES (?,?,?,?)";
    // makes a query = to a INSERT of the data we just got!
    mysqli_stmt_prepare($stmt, $query);
    // prepares the query, passing the connection to our database and our pre made query
    mysqli_stmt_bind_param($stmt, 'ss', $email, $password, $name, $birthday);
    $resultado = mysqli_stmt_execute($stmt);

    if($resultado == true) {
        $retorno["status"] = "s";
        $retorno["mensagem"] = "Cadastrado com sucesso!";
    } else {
        $retorno["status"] = "n";
        $retorno["mensagem"] = "Erro ao cadastrar o usuário!";
    }

    $json = json_encode($retorno);
    echo $json;


?>