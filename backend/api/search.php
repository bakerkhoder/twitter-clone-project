<?php
include("../db/connection.php");
//result will appear according to the name inserted into search field
$key = $_GET['key'];
//query to give the results of search 
$query = $mysqli->prepare("SELECT first_name, last_name FROM users where first_name =" . $key);

$query->execute();
$array = $query->get_result();

$response = [];

while ($a = $array->fetch_assoc()) {
    $response[] = $a;
}

$json = json_encode($response);
echo $json;
