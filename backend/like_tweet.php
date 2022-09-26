<?php
include_once "connection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

if (isset($_POST['tweet_id']) && isset($_POST['user_id'])) {

    $id = $_POST['tweet_id'];
    $user_id = $_POST['user_id'];


    $response = [];

    $check_existence = "SELECT t.`id` FROM `tweets` t  WHERE t.`id` = ?";
    $check_existence_query = $mysqli->prepare($check_existence);
    $check_existence_query->bind_param("i", $id);
    $check_existence_query->execute();
    $array = $check_existence_query->get_result();
    $check_existence_query->close();

    if ($array->num_rows == 1) {
        $check_liked = "SELECT l.`id`, l.`is_deleted` FROM `likes` l  WHERE l.`tweet_id` = ? AND l.`user_id` = ?";
        $check_liked_query = $mysqli->prepare($check_liked);
        $check_liked_query->bind_param("ii", $id, $user_id);
        $check_liked_query->execute();
        $likes_result = $check_liked_query->get_result();
        $check_liked_query->close();

        if ($likes_result->num_rows == 1) {
            //update existing like
            $row = $likes_result->fetch_assoc();
            if ($row['is_deleted'] == 1) {
                $update_liked = "UPDATE `likes`  SET `is_deleted` = 0  WHERE id = " . $row['id'];
            } else {
                $update_liked = "UPDATE `likes`  SET `is_deleted` = 1 WHERE id = " . $row['id'];
            }
            $result = $mysqli->query($update_liked);
        } else {
            //insert new like
            $insert_sql = "INSERT INTO `likes` (`tweet_id`, `user_id`) VALUES (?,?)";
            $insert_query = $mysqli->prepare($insert_sql);
            $insert_query->bind_param("ii", $id, $user_id);
            $result = $insert_query->execute();
            $insert_query->close();
        }
        if ($result) {
            $all_likes_sql = "SELECT COUNT(*) as count FROM `likes` where tweet_id = ? and is_deleted = 0";
            $stmt = $mysqli->prepare($all_likes_sql);
            $stmt->bind_param('i', $id);
            $stmt->execute();
            $res = $stmt->get_result();
            $row = $res->fetch_assoc();
            $stmt->close();
            $response['success'] = $row['count'];
        } else {
            $response['error'] = 'Something wenrt wrong, Try again!';
        }
    } else {
        $response['empty'] = 'Tweet Not Found';
    }
} else {
    $response['error'] = "No enough data submitted";
}

echo json_encode($response);

?>