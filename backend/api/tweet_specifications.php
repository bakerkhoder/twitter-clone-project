<?php
include("../db/connection.php");

//this query gives the count of users who like a specific tweet 
//in addition to the name of its owner

$query = $mysqli->prepare("SELECT count(likes_tweets.user_id), users.id, users.username FROM likes_tweets
join users
on users.id = likes_tweets.user_id
WHERE likes_tweets.tweets_id = 2");

$query->execute();
$array = $query->get_result();

$response = [];

while ($a = $array->fetch_assoc()) {
    $response[] = $a;
}

$json = json_encode($response);
echo $json;
