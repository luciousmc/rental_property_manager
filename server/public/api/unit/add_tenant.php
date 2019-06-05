<?php
require_once('../../../credentials.php');
require_once('../functions.php');
startup();

$tenantID = $_POST['tenant_id'];
$unitID = $_POST['unit_id'];
$businessName = $_POST['business_name'];
$contactName = $_POST['contact_name'];
$tenantPhone = $_POST['tenant_phone'];
$tenantEmail = $_POST['tenant_email'];
$moveInDate = $_POST['move_in_date'];
$leaseEndDate = $_POST['lease_end_date'];
$rentDueDate = $_POST['rent_due_date'];

$query = "INSERT INTO `tenants` (`tenant_id`, `unit_id`, `business_name`, `contact_name`, `tenant_phone`, `tenant_email`, `move_in_date`, `lease_end_date`, `rent_due_date`)
VALUES ('$tenantID', '$unitID', '$businessName', '$contactName', '$tenantPhone', '$tenantEmail', '$moveInDate', '$leaseEndDate', '$rentDueDate')";

$result = mysqli_query($conn, $query);


