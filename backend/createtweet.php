<?php
include_once "connection.php";
include_once "convert_base64_function.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

if (isset($_POST['user_id'])) {

    $profile = isset($_POST['image']) ? $_POST['image'] : '';


    $profile_path = '';
    if ($profile != '') {
        $profile_img_data = convertToBase64($profile,'../frontend/images/', 'images/');
        $profile_path = $profile_img_data['db_save'];
    }

 $userId =($_POST['user_id']);
 $content =($_POST['content']);


// create a query to insert a tweet post into databse
$query = $mysqli->prepare("INSERT INTO tweets(user_id,content,image) VALUES (?,?,?)");
$query->bind_param('iss', $userId, $content, $profile_path);
$query->execute();
$response = [];
$response["success"] = true;
echo json_encode($response);}
  if ($profile != '') {
            file_put_contents($profile_img_data['folder_save'], $profile_img_data['base64string']); //add image to the folder
        }
?>