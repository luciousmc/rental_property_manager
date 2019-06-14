<?php
require_once('../credentials.php');
require_once('../functions.php');
startup();

$query = "SELECT DISTINCT p.street_address, u.unit_number, t.unit_id, r.id AS request_id, r.tenant_phone, r.tenant_email, r.repair_request, r.tenant_id, r.status
FROM `tenant_requests` AS r
JOIN `properties` AS p
JOIN `tenants` AS t 
ON t.id = r.tenant_id
JOIN `units` as u
ON p.id = u.property_id
WHERE t.unit_id = u.id AND r.status != 'Approved'";

$result = mysqli_query($conn, $query);
$output = [];

if (!$result) {
    throw new Exception (mysqli_error($conn));
}

while ($row = mysqli_fetch_assoc($result)) {
    $requestData = [
        'street_address' => $row['street_address'],
        'unit_number' => $row['unit_number'],
        'request_id' => $row['request_id'],
        'status' => $row['status'],
        'tenant_email' => $row['tenant_email'],
        'tenant_phone' => $row['tenant_phone'],
        'repair_request' => $row['repair_request']
    ];
        $output[] = $requestData;
};


$json_output = json_encode($output);
print($json_output);

?>