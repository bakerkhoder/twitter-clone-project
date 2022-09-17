<?php
function check_input($data){
    $data = htmlspecialchars($data);
    $data = trim($data);
    return $data;
}
?>