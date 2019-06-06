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

$idClause = 1;

$query = "SELECT property_name, street_address, city, 'state', zip, 'sqft', parking_spaces, manager_contact, manager_phone 
FROM `properties` AS p 
JOIN `units` AS u 
JOIN `tenants` AS t 
WHERE t.unit_id = u.id AND t.id = " . $idClause;

$result = mysqli_query($conn, $query);
$output = [];

if (!$result) {
    throw new Exception (mysqli_error($conn));
}

while ($row = mysqli_fetch_assoc($result)) {
    $propertyData = [
        'property_name' => $row['property_name'],
        'street_address' => $row['street_address'],
        'city' => $row['city'],
        'state' => $row['state'],
        'zip' => $row['zip'],
        'sqft' => $row['sqft'],
        'parking_spaces' => $row['parking_spaces'],
        'manager_contact' => $row['manager_contact'],
        'manager_phone' => $row['manager_phone']
    ];
        $output = $propertyData;
};


$json_output = json_encode($output);
print($json_output);

?>