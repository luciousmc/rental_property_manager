<?php
require_once('../functions.php');
require_once('../credentials.php');
startup();
$query = "SELECT p.id, p.street_address AS streetAddress, p.city, p.state,p.zip, p.property_type AS type, p.sqft, COUNT(`u`.`property_id`) AS units, sum( status = 'Vacant' ) AS vacancies, GROUP_CONCAT(DISTINCT property_images.url) AS image
    FROM `properties` AS p 
    LEFT JOIN `units` AS `u`
    ON `u`.`property_id` = `p`.`id`
    LEFT JOIN `property_images` ON property_images.property_id = p.id
    GROUP BY p.id";
$result = mysqli_query($conn, $query);
if (!$result){
    throw new Exception(mysqli_error($conn));
}

$output = [];
while ($row = mysqli_fetch_assoc($result)){
    $output[] = $row;
}
$json_output = json_encode($output);
print($json_output);
