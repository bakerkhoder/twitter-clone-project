<?php
require('../db/connection.php');
require('functions.php');






$query->execute();
$response = [];
$response["success"] = true;
echo json_encode($response);
