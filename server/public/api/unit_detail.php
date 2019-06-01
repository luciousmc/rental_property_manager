<?php
require_once('functions.php');
require_once ('../../credentials.php');
startup();
$query = "SELECT u.id, u.unit_number, u.status, u.sqft, t.move_in_date, t.lease_end_date, t.rent_due_date, t.business_name, t.contact_name, t.tenant_phone, t.tenant_email, i.url FROM `units` AS u JOIN `tenants` AS t ON t.unit_id = u.id
JOIN `images` AS i ON i.property_id = u.property_id";

$result = mysqli_query($conn, $query);
if(!$result){
    throw new Exception(mysqli_error($conn));
}
$output = [];
while($row = mysqli_fetch_assoc($result)){
    $output[] = $row;
}
$json_output = json_encode($output);
print($json_output);