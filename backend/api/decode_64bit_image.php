<?php
require('../db/connection.php');
require('functions.php');

//this function decoded the 64 bit of an image

echo base64_decode($url);


$query->execute();
$response = [];
$response["success"] = true;
echo json_encode($response);
