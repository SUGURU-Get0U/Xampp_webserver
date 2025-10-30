<?php 

$con = mysqli_connect("localhost:3306", 
"root",
"PUC@1234",
"name_without_creativity");

$query = "SELECT id_user AS id, email AS e FROM Web_User;";

$sqlAnswer = mysqli_query($con,$query);
$data = mysqli_fetch_all($sqlAnswer, MYSQL_ASSOC);

echo json_encode($data);

?>