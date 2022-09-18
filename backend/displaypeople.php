<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Content-Type: application/json');
require('connection.php');
require('functions.php');

//create a query for login
$query = $mysqli->prepare("SELECT first_name,email FROM users ");
$query->execute();
//create a variable array  to store the results
$array = $query->get_result();

$response = [];

while ($a = $array->fetch_assoc()) {
    $response[] = $a;
}

$json=json_encode($response);
echo $json;
?>