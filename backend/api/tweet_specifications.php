<?php
include("../db/connection.php");
$id = $_POST['id'];
//this query gives the id, content, name and  username to a specific tweet 
$query = $mysqli->prepare("
    SELECT tweet_id, tweets.content, tweets.user_id, users.first_name, users.username
    FROM `likes_tweets`
    join tweets on tweets.id = likes_tweets.tweet_id
    join users on users.id = tweets.user_id
    where tweet_id =". $id ." limit 1");

$query->execute();
$array = $query->get_result();

$response = [];

while ($a = $array->fetch_assoc()) {
    $response[] = $a;
}

$json = json_encode($response);
echo $json;
