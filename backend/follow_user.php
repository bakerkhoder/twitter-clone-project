<?php
include_once "connection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

if (isset($_POST['user_id']) && isset($_POST['other_id'])) {

    $user_id = $_POST['user_id'];
    $other_id = $_POST['other_id'];
    $created_at = date('Y-m-d H:i:s');
    $updated_at = date('Y-m-d H:i:s');

    $response = [];

    $check_follow = "SELECT f.`id`, f.`is_deleted` FROM `friends` f WHERE f.`user_id` = ? AND f.`friend_id` = ?";
    $check_follow_query = $mysqli->prepare($check_follow);
    $check_follow_query->bind_param("ii", $user_id, $other_id);
    $check_follow_query->execute();
    $follow_result = $check_follow_query->get_result();
    $check_follow_query->close();

    if ($follow_result->num_rows == 1) {
        //update existing like
        $row = $follow_result->fetch_assoc();
        if ($row['is_deleted'] == 1) {
            $update_follow = "UPDATE `friends`  SET `is_deleted` = 0, `updated_at` = '" . $updated_at . "'  WHERE id = " . $row['id'];
            $is_follow = 'Follow';
        } else {
            $update_follow = "UPDATE `friends`  SET `is_deleted` = 1, `updated_at` = '" . $updated_at . "'  WHERE id = " . $row['id'];
            $is_follow = 'Unfollow';
        }
        $result = $mysqli->query($update_follow);
    } else {
        //insert new friendship
        $insert_sql = "INSERT INTO `friends` (`user_id`, `friend_id`, `created_at`, `updated_at`) VALUES (?,?,?,?)";
        $insert_query = $mysqli->prepare($insert_sql);
        $insert_query->bind_param("iiss", $user_id, $other_id, $created_at, $updated_at);
        $result = $insert_query->execute();
        $insert_query->close();
        $is_follow = 'Unfollow';
    }
    if ($result) {
        $response['success'] = $is_follow;
    } else {
        $response['error'] = 'Something wenrt wrong, Try again!';
    }
} else {
    $response['error'] = "No enough data submitted";
}

echo json_encode($response);

?>