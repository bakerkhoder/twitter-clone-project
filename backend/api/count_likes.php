<?php
include("../db/connection.php");

$query = $mysqli->prepare("SELECT COUNT(user_id) FROM likes_tweets WHERE tweets_id = 3");
$query->execute();
$array = $query->get_result();

$response = [];

while($a = $array->fetch_assoc()){
    $response[] = $a;
}

$json = json_encode($response);
echo $json;

?>
