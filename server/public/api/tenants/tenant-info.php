<?php
require_once('../credentials.php');
require_once('../functions.php');
startup();


//Keep to Hard-Code for Later Features
// $id = $_GET['id'];

// if(empty($_GET['id'])){
//     $idClause = '';
// } else {
//     $idClause = $id;
// }

$idClause = 13;

$query = "SELECT business_name, contact_name, tenant_phone, tenant_email, move_in_date, lease_end_date, rent_due_date, u.unit_number, rent 
FROM `tenants` AS t 
JOIN `units` AS u 
JOIN `properties` AS p 
WHERE t.unit_id = u.id AND t.id = " . $idClause;

$result = mysqli_query($conn, $query);
$output = [];

if (!$result) {
    throw new Exception (mysqli_error($conn));
}

while ($row = mysqli_fetch_assoc($result)) {
    $tenantData = [
        'business_name' => $row['business_name'],
        'contact_name' => $row['contact_name'],
        'tenant_phone' => $row['tenant_phone'],
        'tenant_email' => $row['tenant_email'],
        'move_in_date' => $row['move_in_date'],
        'lease_end_date' => $row['lease_end_date'],
        'rent_due_date' => $row['rent_due_date'],
        'unit_number' => $row['unit_number'],
        'rent' => $row['rent']
    ];
        $output = $tenantData;
};


$json_output = json_encode($output);
print($json_output);

?>