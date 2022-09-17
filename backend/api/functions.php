<?php
//this function removes all the free spaces and special characters
function check_input($data){
    
    $data = htmlspecialchars($data);
    $data = trim($data);
    return $data;
}
?>