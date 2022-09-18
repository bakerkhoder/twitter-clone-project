<?php
require('../db/connection.php');
require('functions.php');

//get the id's of users through POST method
$user_blocked = $_POST['user_blocked'];
$user_blocker = $_POST['user_blocker'];

//create a query to allow the users block each other 
$query = $mysqli->prepare("INSERT INTO users_block(user_blocked,user_blocker) VALUES (?,?)");
$query->bind_param('ss', $user_blocked,$user_blocker);

$query->execute();

/*test the response*/
$response = [];
$response["success"] = true;
echo json_encode($response);
