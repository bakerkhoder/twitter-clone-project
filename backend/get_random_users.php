<?php
include_once "connection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

   if(isset($_POST['id'])){
    $current_id=$_POST['id'];
    $sql =
        "SELECT u.id, u.first_name, u.prof_image
         FROM users u 
         WHERE u.id !=$current_id
        --  LEFT JOIN friends f
        --  ON (f.user_id = u.id OR f.friend_id = u.id) 
        --  LEFT JOIN blocks b ON (b.user_id = u.id OR b.blocked_user_id = u.id)
        --  ORDER BY rand() ;
        ";

    $query = $mysqli->prepare($sql);
  
    $query->execute();

    $array = $query->get_result();

    $response = [];

    if ($array->num_rows > 0) {
        while ($i = $array->fetch_assoc()) {
            $response[] = $i;
        }
    } else {
        $response['empty'] = "No Data Found";
    }

    $query->close();


echo json_encode($response);
   }?>