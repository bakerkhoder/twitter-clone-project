<?php
require('../db/connection.php');
require('functions.php');
$email =  $_POST['email'];
$password = $_POST['password'];

//create a query for login
$query = $mysqli->prepare("SELECT * FROM users WHERE email = ? limit 1");
$query->bind_param('s', $email);
$query->execute();
//create a variable array  to store the results
$array = $query->get_result();

$response = [];

while ($a = $array->fetch_assoc()) {
    $response[] = $a;
}

if (empty($response)) {
    echo "operation failed";
}

$user = $response[0];

//use password_verify() to check hshed password in database
if (password_verify($password, $user['password'])) {
    echo "login successed";
}
echo "login failed";
$json = json_encode($response);
echo $json;
