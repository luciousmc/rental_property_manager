<?php

require_once('../credentials.php');
require_once('../functions.php');
startup();
$input = file_get_contents('php://input');
$_POST = json_decode($input, true);

$pID = $_POST['property_id'];
$unitNum = $_POST['unit_number'];
$sqft = $_POST['sqft'];
$rent = $_POST['rent'];
$status = $_POST['status'];

$query = "INSERT INTO `units` (`property_id`, `unit_number`, `sqft`, `rent`, `status`)
VALUES ('$pID', '$unitNum', '$sqft', '$rent', '$status')";

$result = mysqli_query($conn, $query);
if(!$result){
    print(mysqli_error($conn));
    exit();
}
print(json_encode(
    [
        'result' => true,
    ]
));