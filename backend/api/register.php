<?php
require('../db/connection.php');
require('functions.php');

//check_input():it removes space and special characters from data
//in order to prevent the database from malicious data

$firstName =check_input($_POST['first_name']);
$lastName = check_input($_POST['last_name']);
$userName = check_input($_POST['username']);
$dob = check_input($_POST['dob']);
$email = check_input($_POST['email']);

/* hashing the password*/
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

$query = $mysqli->prepare("INSERT INTO users(first_name,last_name,username,dob,email, password) VALUES (?, ?,?,?,?,?)");
$query->bind_param('ssssss', $firstName, $lastName, $userName, $dob, $email, $password);

$query->execute();
/*test the response*/
$response = [];
$response["success"] = true;
echo json_encode($response);
