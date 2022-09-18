<?php
require('../db/connection.php');
require('functions.php');
$userId = check_input($_POST['user_id']);
$content = check_input($_POST['content']);
$url_image = check_input($_POST['tweet_image']);

$query = $mysqli->prepare("INSERT INTO tweets(user_id,content,tweet_image) VALUES (?,?,?)");
$query->bind_param('iss', $userId, $content,$url_image);
$query->execute();
$response = [];
$response["success"] = true;
echo json_encode($response);
