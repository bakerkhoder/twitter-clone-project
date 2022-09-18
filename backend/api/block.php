<?php
require('../db/connection.php');
require('functions.php');

$user_blocked = $_POST['user_blocked'];
$user_blocker = $_POST['user_blocker'];
$query = $mysqli->prepare("INSERT INTO users_block(user_blocked,user_blocker) VALUES (?,?)");
$query->bind_param('ii', $user_blocked, $user_blocker);

$query->execute();
$response = [
    "success" => true
];
echo json_encode($response);
