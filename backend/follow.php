<?php
require('connection.php');
require('functions.php');

//get the id's of users through POST method
$user_follower = ($_POST['user_follower']);
$user_followed = ($_POST['user_followed']);
//create a query to allow the users follow each other 
$query = $mysqli->prepare("INSERT INTO users_follow(SELECT users.id FROM users WHERE users.email=$user_follower),(SELECT users.id FROM users WHERE users.email=$user_follower)) ");
$query->execute();
/*test the response*/
$response = [];
$response["success"] = true;
echo json_encode($response);
?>