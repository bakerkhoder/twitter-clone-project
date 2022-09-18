<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Content-Type: application/json');
require('connection.php');
require('functions.php');

//check_input():it removes space and special characters from data
//in order to prevent the database from malicious data

 $userId =($_POST['user_id']);
 $content =($_POST['content']);


// create a query to insert a tweet post into databse
$query = $mysqli->prepare("INSERT INTO tweets(user_id,content) VALUES (?,?)");
$query->bind_param('ss', $userId, $content);
$query->execute();
$response = [];
$response["success"] = true;
echo json_encode($response);?>