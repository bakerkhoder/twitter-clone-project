<?php
require('../db/connection.php');

$firstName = $_POST['first_name'];
$lastName = $_POST['last_name'];
$userName = $_POST['username'];
$dob = $_POST['dob'];
$email = $_POST['email'];

/* hashing the password*/
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

$query = $mysqli->prepare("INSERT INTO users(first_name,last_name,username,dob,email, password) VALUES (?, ?,?,?,?,?)");
$query->bind_param('ssssss', $firstName, $lastName, $userName, $dob, $email, $password);

$query->execute();
/*test the response*/
$response = [];
$response["success"] = true;
echo json_encode($response);
