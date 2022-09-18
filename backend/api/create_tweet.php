<?php
require('../db/connection.php');
require('functions.php');
$userId = check_input($_POST['user_id']);
$content = check_input($_POST['content']);

$query = $mysqli->prepare("INSERT INTO tweets(user_id,content) VALUES (?,?)");
$query->bind_param('is', $userId, $content);
$query->execute();
$response = [];
$response["success"] = true;
echo json_encode($response);
