<?php
include("../db/connection.php");
//data will appear according to the id number of a specific user
$id = $_GET['id'];
//query to give the firstname,lastname and username 
$query = $mysqli->prepare("SELECT first_name, last_name, username FROM users where id =" . $id);

$query->execute();
$array = $query->get_result();

$response = [];

while ($a = $array->fetch_assoc()) {
    $response[] = $a;
}

$json = json_encode($response);
echo $json;
