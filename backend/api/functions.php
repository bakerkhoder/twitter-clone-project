<?php
<?php
include("../db/connection.php");
//this function removes all the free spaces and convert special characters into html entities
function check_input($data){
    
    $data = htmlspecialchars($data);
    $data = trim($data);
    $data =  mysqli_real_escape_string($mysqli,$data);
    return $data;
}
?>