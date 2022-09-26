<?php
include_once "connection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');


    $sql =
        "SELECT main.*, l.likes FROM(
            SELECT t.*, u.first_name, u.prof_image FROM tweets AS t
            INNER JOIN users u ON u.id = t.user_id
        ) as main 
        LEFT JOIN (SELECT tweet_id, count(id) likes FROM likes where is_deleted=0 GROUP BY tweet_id)  l ON main.id = l.tweet_id
        ORDER BY  main.id DESC";

    $query = $mysqli->prepare($sql);
    $query->execute();
    $array = $query->get_result();

    $response['num'] = $array->num_rows;

    if ($array->num_rows > 0) {
        while ($i = $array->fetch_assoc()) {
            $response['tweets_info'][] = $i;
        }
    } else {
        $response['empty'] = "No Data Found";
    }

    $query->close();


//returns a response with ["tweet_id","tweet_user_id","tweet","tweet_picture","is_public_tweet","tweet_created_at","tweet_updated_at","name","username","profile_image_path"]
//all the fields same as the names in th db, "tweet" keyword for more declaration
echo json_encode($response);

;?> 