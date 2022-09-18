<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Content-Type: application/json');

require('connection.php');
require('functions.php');

//check_input():it removes space and special characters from data
//in order to prevent the database from malicious data

$firstName =($_POST['first_name']);
$lastName = ($_POST['last_name']);

$dob = ($_POST['dob']);
$email =($_POST['email']);

/* hashing the password*/
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

$query = $mysqli->prepare("INSERT INTO users(first_name,last_name,dob,email, password) VALUES ( ?,?,?,?,?)");
$query->bind_param('sssss', $firstName, $lastName, $dob, $email, $password);

$query->execute();
/*test the response*/
  class user{
       
        //public $id;
      
        public $firstname;
        public $email;
        public $dob;
       
        //constructor
        public function __construct($db){
            $this->conn=$db;
        }}


$response = []; 
$res=new user("twitterdb");
$res->firstname=$firstName;
$res->email=$email;
$res->dob=$dob;
/*$query1 = $mysqli->prepare("SELECT `first_name`,`email`,`dob` FROM `users` WHERE `first_name` = `$firstName`");
$query1->execute();
$array1 = $query->get_result();

$response = [];

while($a = $array1->fetch_assoc()){
    $response[] = $a;
}

$json = json_encode($response);
echo $json;*/

$response["data"] = $res;
echo json_encode($response);?>