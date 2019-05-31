<?php
require_once('../../credentials.php');
require_once('functions.php');
$query = "SELECT * FROM `properties`";
$result = mysqli_query($conn, $query);
//"SELECT p.`id`, p.`property_name`, p.`street_address`, p.`city`, p.`state`, p.`zip`, p.`sqft`, p.`parking_spaces`, p.`property_type`, p.`manager_contact`, u.`unit_number`, u.`sqft`, u.`rent`
//FROM `properties` AS p
//JOIN `units` AS u
//ON u.property_id = p.id";

if (!$result) {
    throw new Exception (mysqli_error($conn));
}
$output = [];
//if (mysqli_num_rows($result) === 0 && $id !== false) {
//    throw new Exception ('Invalid ID: ' . $id);
//}
while ($row = mysqli_fetch_assoc($result)) {
//    $row['price'] = intval($row['price']);
//    $row['id'] = intval($row['id']);
    $output[] = $row;
}

$json_output = json_encode($output);
print($json_output);