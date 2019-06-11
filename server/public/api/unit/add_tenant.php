<?php
require_once('../credentials.php');
require_once('../functions.php');
startup();
$input = file_get_contents('php://input');
$tenant = json_decode($input, true);

$businessName = $tenant['business_name'];
$contactName = $tenant['contact_name'];
$tenantPhone = $tenant['tenant_phone'];
$tenantEmail = $tenant['tenant_email'];
$moveInDate = $tenant['move_in_date'];
$leaseEndDate = $tenant['lease_end_date'];
$rentDueDate = $tenant['rent_due_date'];
$unitID = $tenant['unit_id'];


$query = "INSERT INTO `tenants` ( `unit_id`, `business_name`, `contact_name`, `tenant_phone`, `tenant_email`, `move_in_date`, `lease_end_date`, `rent_due_date`)
                        VALUES ('$unitID','$businessName', '$contactName', '$tenantPhone', '$tenantEmail', '$moveInDate', '$leaseEndDate', '$rentDueDate')";
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

