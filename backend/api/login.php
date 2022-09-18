<?php
require('../db/connection.php');
require('functions.php');
$email =  $_POST['email'];
$password = $_POST['password'];
$query = $mysqli->prepare("SELECT * FROM users WHERE email = ? limit 1");
$query->bind_param('s', $email);
$query->execute();
$array = $query->get_result();

$response = [];

while ($a = $array->fetch_assoc()) {
    $response[] = $a;
}

if (empty($response)) {
    echo "operation failed";
    exit;
}

$user = $response[0];

//use password_verify() to check the hashed password in database
if (password_verify($password, $user['password'])) {
    echo "login succeeded";
}
echo "login failed";
exit;
$json = json_encode($response);
echo $json;
