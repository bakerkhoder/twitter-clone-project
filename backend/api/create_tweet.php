<?php
require('../db/connection.php');
require('functions.php');

//check_input():it removes space and special characters from data
//in order to prevent the database from malicious data

$userId =check_input($_POST['user_id']);
$content = check_input($_POST['content']);
$url = $_POST['image_url'];
// create a query to insert a tweet post into databse
$query = $mysqli->prepare("INSERT INTO tweets(user_id,content) VALUES ('?','?')");
$query->bind_param('ss', $userId, $content);

$query->execute();
$response = [];
$response["success"] = true;
echo json_encode($response);
