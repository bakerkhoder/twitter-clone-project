<?php
include("../db/connection.php");
$firstname = $_GET['first_name'];
if ($firstname != true) {
    exit;
}
$query = $mysqli->prepare("SELECT id,first_name, last_name,email FROM users where first_name LIKE'?");
$query->bind_param("s", "%{$firstname}%");
$query->execute();
$response = [
    'success' => true
];
echo json_encode($response);
