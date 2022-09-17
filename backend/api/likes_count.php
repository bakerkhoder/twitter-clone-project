<?php
include("../db/connection.php");
//data will appear according to the id number of a specific user
$id = $_GET['id'];
//this query gives the count of users who like a specific tweet 
$query = $mysqli->prepare("
SELECT COUNT (user_id) FROM likes_tweets WHERE tweet_id =" . $id);

$query->execute();
$array = $query->get_result();

$response = [];

while ($a = $array->fetch_assoc()) {
    $response[] = $a;
}

$json = json_encode($response);
echo $json;
