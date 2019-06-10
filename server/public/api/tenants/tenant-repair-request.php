<?php
require_once('../credentials.php');
require_once('../functions.php');
startup();
$input = file_get_contents('php://input');
$_POST = json_decode($input, true);

$tenantPhone = $_POST['tenant_phone'];
$tenantEmail = $_POST['tenant_email'];
$repairRequest = $_POST['repair_request'];

$query = "INSERT INTO `tenant_requests` (`tenant_phone`, `tenant_email`, `repair_request`)
VALUES ('$tenantPhone', '$tenantEmail', '$repairRequest')";

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