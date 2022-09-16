<?php
include("../db/connection.php");

//select the number of users who like a tweet
//select the owner of a specific tweet
$query = $mysqli->prepare("SELECT count(likes_tweets.user_id) ,users.id, users.first_name FROM  likes_tweets
join users
on users.id = likes_tweets.user_id
WHERE likes_tweets.tweets_id = 2");

//get the name of the
$query->execute();
$array = $query->get_result();

$response = [];

while ($a = $array->fetch_assoc()) {
    $response[] = $a;
}

$json = json_encode($response);
echo $json;
