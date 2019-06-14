<?php

require_once('../credentials.php');
require_once('../functions.php');
startup();
$input = file_get_contents('php://input');
$_POST = json_decode($input, true);

$status = $_POST['status'];
$request_ID = $_POST['request_id'];

$query = "UPDATE `tenant_requests` SET `status` = '$status' WHERE `tenant_requests`.`id` = $request_ID";
$result = mysqli_query($conn, $query);

if (!$result) {
    print(mysqli_error($conn));
    exit();
}

print(json_encode(
    [
        'result' => true,
    ]
));