<?php
include("../db/connection.php");
$id = $_GET['id'];
$query = $mysqli->prepare("SELECT first_name, last_name, username FROM users where id = ? limit 1");
$query->bind_param('i', $id);
$query->execute();
$array = $query->get_result();
$response = [];
while ($a = $array->fetch_assoc()) {
    $response[] = $a;
}
$json = json_encode($response[0]);
echo $json;
