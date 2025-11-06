<?php
// definição do header
// header("CONTENT-TYPE: application/json");

// array de resposta do servidor para consulta de erros

// declaração das variaveis que recebem o POST
$nome = $_POST['nome'];
$descricao = $_POST['descricao'];
$price = $_POST['price'];

// variaveis para conexão com o banco de dados
$host = "localhost";
$port = "3306";
$username = "root";
$pwd = "PUC@1234";
$db_name = "db_cadastro"

// conexão com o banco de dados
$con = mysqli_connect("localhost:3306", $username, $pwd, $db_name);

// criação da query para **INSERT** dos valores
$query_ins = "INSERT INTO produto(nome,descricao,preco) VALUES(?,?,?)";

// query de SELECT all da tabela do MySQL
// criação do statement de conexão 
$stmt = mysqli_stmt_init($con);
// prep da statement
mysqli_stmt_prepare($stmt, $query_ins)

// fase de bind
mysqli_stmt_bind_param($stmt, 'ssi', $nome, $descricao, $price)

// executar a query
mysqli_stmt_execute($stmt);

// armazenar o resultado da query
$result = mysqli_stmt_get_result($stmt);
// Fazer o ASSOC dos resultado e armazenar em uma variavel
$dados = mysqli_fetch_all($result, MYSQLI_ASSOC)

// encerrar as conexões
mysqli_close($con);
// dar o echo json_encode(dados) pro javascript ler
echo json_encode($dados)

exit;

?>