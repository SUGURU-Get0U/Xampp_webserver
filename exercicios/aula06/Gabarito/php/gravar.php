<?php

    $usuario = $_POST["usuario"];
    $senha = $_POST["senha"];

    $resposta["status"] = "n";
    $resposta["mensagem"] = "";

    if($usuario == "eduardo" && $senha == "1234") 
    {
        $resposta["status"] = "s";
        $resposta["mensagem"] = "Usuário existe!";
    }
    else 
    {
        $resposta["mensagem"] = "Usuário não existe!";
    }

    $json = json_encode($resposta);
    // echo $json; Comando em linux, GIT deu pau


?>

