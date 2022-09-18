<?php
include("../db/connection.php");
$id = $_GET['id'];
$query = $mysqli->prepare("SELECT COUNT(user_id) as count FROM likes_tweets WHERE tweet_id = ? ");
$query->execute();
$array = $query->get_result();
$query->execute();
$response = [
    'success' => true
];
echo json_encode($response);