<?php

require_once('../credentials.php');
require_once('../functions.php');
startup();
$input = file_get_contents('php://input');
$_POST = json_decode($input, true);



$query = ""

$result = mysqli_query($conn, $query);
if(!$result){
    throw new Exception(mysqli_error($conn));
}
print(json_encode(
    [
        'result' => true,
    ]
));

?>