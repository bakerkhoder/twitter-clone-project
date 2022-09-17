<?php
require('../db/connection.php');
require('functions.php');

if (isset($_POST['loginButton'])) {
    if (check_input($_POST['email']) == "" or check_input($_POST['password']) == "") {
        echo "Email and password cannot be empty";
    } else {
        $email =  check_input($_POST['email']);
        $password = check_input($_POST['password']);

        $query = $mysqli->prepare("SELECT email,password FROM users WHERE email =? AND password=? limit 1");

        $query->execute([$email, $password]);
        $array = $query->get_result();

        $response = [];

        while ($a = $array->fetch_assoc()) {
            $response[] = $a;
        }

        $json = json_encode($response);
        echo $json;


      // if user's email & password
            // matches the data into databse
            // direct the user towards index.html page
            
        if ($response !== false) {
            header("location:../../frontend/index.php");
        } else
            return "Incorrect email or password";
    }
}
