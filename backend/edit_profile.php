<?php
include_once "connection.php";
include_once "convert_base64_function.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

if (isset($_POST['id'])) {
     $id =($_POST['id']);
     $first_name = isset($_POST['first_name']) ? $_POST['first_name'] : '';
     $dob = isset($_POST['dob']) ? $_POST['dob'] : '';
     $profile= isset($_POST['prof_image']) ? $_POST['prof_image'] : '';
      
   echo $profile;
    $profile_path = '';
    if ($profile != '') {
        $profile_img_data = convertToBase64($profile,'../frontend/images/', 'images/');
        $profile_path = $profile_img_data['db_save'];
    }






// create a query to insert a tweet post into databse


$edit_user_sql = "UPDATE users SET `first_name` = ?, `dob` = ?, `prof_image` = ? WHERE `id` = ?";
$edit_user_stmt = $mysqli->prepare($edit_user_sql);
$edit_user_stmt->bind_param('sssi', $first_name,$dob, $profile_path, $id);
$edit_user_result = $edit_user_stmt->execute();
$response = [];

echo $profile_path;
echo $dob;
$response["success"] = true;
echo json_encode($response);}
 if ($profile != '') {
            file_put_contents($profile_img_data['folder_save'], $profile_img_data['base64string']); //add image to the folder
      }
?>


