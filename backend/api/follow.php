<?php
require('../db/connection.php');
require('functions.php');

//get the id's of users through POST method
$user_follower = $_POST['user_follower'];
$user_followed = $_POST['user_followed'];

$query = $mysqli->prepare("INSERT INTO users_follow(user_follower,user_followed) VALUES (?, ?)");
$query->bind_param('ss', $user_follower,$user_followed);

$query->execute();
/*test the response*/
$response = [];
$response["success"] = true;
echo json_encode($response);
