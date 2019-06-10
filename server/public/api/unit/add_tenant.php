<?php
require_once('../credentials.php');
require_once('../functions.php');
startup();
$input = file_get_contents('php://input');
$_POST = json_decode($input, true);

// $tenantID = $_POST['tenant_id'];
$unitID = $_POST['unit_id'];
$businessName = $_POST['business_name'];
$contactName = $_POST['contact_name'];
$tenantPhone = $_POST['tenant_phone'];
$tenantEmail = $_POST['tenant_email'];
$moveInDate = $_POST['move_in_date'];
$leaseEndDate = $_POST['lease_end_date'];
$rentDueDate = $_POST['rent_due_date'];
$rent = $_POST['rent'];

$query = "INSERT INTO `tenants` (`tenant_id`, `unit_id`, `business_name`, `contact_name`, `tenant_phone`, `tenant_email`, `move_in_date`, `lease_end_date`, `rent_due_date`, `rent`)
VALUES ('$unitID', '$businessName', '$contactName', '$tenantPhone', '$tenantEmail', '$moveInDate', '$leaseEndDate', '$rentDueDate', '$rent')";
// print($query);
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

