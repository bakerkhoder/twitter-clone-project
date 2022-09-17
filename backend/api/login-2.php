<?php
require('../db/connection.php');
$con = mysql_connect("$host", "$username", "$password") or die("cannot connect");
mysql_select_db("$db_name") or die("cannot select DB");
$sql    = "select * from test_table";
$result = mysql_query($sql);
$json   = array();
if (mysql_num_rows($result))
    {
      while ($row = mysql_fetch_row($result))
       {
    $json['items'] = $row;
       }
    }
mysql_close($db_name);
echo json_encode($json, JSON_PRETTY_PRINT);
?>
Edit

I have now started working on another system, which is pretty much what I am looking to do (after I found an example here: http://www.dreamincode.net/forums/topic/235556-how-to-create-a-php-login-with-data-from-mysql-database/) except every time that I request something like https://www.example.com/login.php?username=root&password=password - I get the JSON error 1 code

<?php
$host = "localhost"; // Host name
$db_username = "root"; // Mysql username
$db_password = "password"; // Mysql password
$db_name = "test"; // Database name
$tbl_name = "test_table"; // Table name

// Connect to server

mysql_connect("$host", "$db_username", "$db_password") or die("cannot connect");

// Select the database

mysql_select_db("$db_name") or die("cannot select DB");

// Get the login credentials from user

$username = $_POST['username'];
$userpassword = $_POST['password'];

// Secure the credentials

$username = mysql_real_escape_string($_POST['username']);
$userpassword = mysql_real_escape_string($_POST['password']);

// Check the users input against the DB.

$query = "SELECT * FROM test_table WHERE user = '$username' AND password = '$userpassword'";
$result = mysql_query($query) or die("Unable to verify user because " . mysql_error());
$row = mysql_fetch_assoc($result);

if ($row['total'] == 1) {

    // success

    $response["success"] = 1;

    // echoing JSON response

    echo json_encode($response);
}
else {

    // username and password not found
    // failed

    $response["failed"] = 1;

    // echoing JSON response

    echo json_encode($response);
}

?>