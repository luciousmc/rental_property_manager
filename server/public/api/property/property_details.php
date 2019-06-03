<?php
require_once('../../../credentials.php');
require_once('../functions.php');
startup();
$query = "SELECT p.`id`, p.`property_name`, p.`street_address`, p.`city`, p.`state`, p.`zip`, p.`sqft`, p.`parking_spaces`, p.`property_type`, p.`manager_contact`, u.`unit_number`, u.`sqft` AS unit_sqft, u.`rent`, t.business_name, t.contact_name, t.tenant_phone, t.tenant_email, t.`move_in_date`, t.lease_end_date, t.rent_due_date
    FROM `properties` AS p
    JOIN `units` AS u
    ON u.property_id = p.id
    JOIN `tenants` AS t 
    ON t.`unit_id` = u.id";
$result = mysqli_query($conn, $query);
if (!$result) {
    throw new Exception (mysqli_error($conn));
}
$output = [];

while ($row = mysqli_fetch_assoc($result)) {
    $output[] = $row;
}

$json_output = json_encode($output);
print($json_output);