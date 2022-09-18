<?php
include("../db/connection.php");
//result will appear according to the name inserted into search field
$firstname = $_POST['first_name'];
//query to give the results of search 
$query = $mysqli->prepare("SELECT first_name, last_name FROM users where first_name ='{$firstname}'limit 1");

$query->execute();
$array = $query->get_result();

$response = [];

while ($a = $array->fetch_assoc()) {
    $response[] = $a;
}

$json = json_encode($response);
echo $json;
