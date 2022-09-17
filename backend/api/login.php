<?php
require('../db/connection.php');
// require('functions.php');

$email =  $_POST['email'];
$password = $_POST['password'];


        $query = $mysqli->prepare("SELECT * FROM users WHERE email = ? limit 1");
        $query->bind_param('s', $email);
        $query->execute();
        
        $array = $query->get_result();

        $response = [];

        while ($a = $array->fetch_assoc()) {
            $response[] = $a;
        }

        if(empty($response))
        {
            echo"operation failed";
        }

        $user = $response[0];
     

        if(password_verify($password, $user['password']))
        {
           echo"login successed";

        }
        echo"login failed";

        // ma mesh lhal

        $json = json_encode($response);
        echo $json;