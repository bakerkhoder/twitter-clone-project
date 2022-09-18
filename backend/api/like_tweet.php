<?php
require('../db/connection.php');
require('functions.php');

$tweet_id = $_POST['tweet_id'];
$user_id = $_POST['user_id'];

$query = $mysqli->prepare("INSERT INTO likes_tweets(tweet_id, user_id) VALUES (?,?)");
$query->bind_param('ii', $tweet_id, $user_id);
$query->execute();
$response = [
    'success' => true
];
echo json_encode($response);
