<?php
require_once('../credentials.php');
require_once('../functions.php');
startup();

$id = $_GET['id'];

if(empty($_GET['id'])){
    $whereClause = '';
} else {
    $whereClause = " WHERE t.unit_id = $id";
}

$query = "SELECT * FROM `tenants` AS t" . $whereClause;

$result = mysqli_query($conn, $query);
if (!$result) {
    throw new Exception (mysqli_error($conn));
}

$output = [];

while ($row = mysqli_fetch_assoc($result)) {
    $tenantData = [
        'business_name' => $row['business_name'],
        'contact_name' => $row['contact_name'],
        'tenant_phone' => $row['tenant_phone'],
        'tenant_email' => $row['tenant_email'],
        'move_in_date' => $row['move_in_date'],
        'lease_end_date' => $row['lease_end_date'],
        'rent_due_date' => $row['rent_due_date'],
        'monthly_rent' => $row['monthly_rent'],
        'unit_number' => $row['unit_number']
    ];
        $output = $tenantData;
    
};


$json_output = json_encode($output);
print($json_output);

?>