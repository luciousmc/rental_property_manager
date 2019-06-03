<?php
require_once('../../credentials.php');
require_once('functions.php');
startup();
$query = "SELECT p.`id`, p.`property_name`, p.`street_address`, p.`city`, p.`state`, p.`zip`, p.`sqft`, p.`parking_spaces`, p.`property_type`, p.`manager_contact`, p.manager_phone, u.`id` AS unit_id, u.`unit_number`, u.`sqft` AS unit_sqft, u.`rent`, t.business_name, t.contact_name, t.tenant_phone, t.tenant_email, t.`move_in_date`, t.lease_end_date, t.rent_due_date
    FROM `properties` AS p
    JOIN `units` AS u
    ON u.property_id = p.id
    JOIN `tenants` AS t 
    ON t.`unit_id` = u.id";
//    "SELECT p.`id`, p.`property_name`, p.`street_address`, p.`city`, p.`state`, p.`zip`, p.`sqft`, p.`parking_spaces`, p.`property_type`, p.`manager_contact`, u.`unit_number`, u.`sqft` AS unit_sqft, u.`rent`, t.business_name, t.contact_name, t.tenant_phone, t.tenant_email, t.`move_in_date`, t.lease_end_date, t.rent_due_date
//    FROM `properties` AS p
//    JOIN `units` AS u
//    ON u.property_id = p.id
//    JOIN `tenants` AS t
//    ON t.`unit_id` = u.id";
$result = mysqli_query($conn, $query);
if (!$result) {
    throw new Exception (mysqli_error($conn));
}
$output = [];




while ($row = mysqli_fetch_assoc($result)) {
    $thisData = [];
    $thisData['unit_id'] = $row['unit_id'];
    $thisData['unitNumber'] = $row['unit_number'];
    $thisData['rent'] = $row['rent'];
    $thisData['image'] = $row['image'];
    $thisData['unit_sqft'] = $row['unit_sqft'];
    unset($row['unit_id']);
    unset($row['unit_sqft']);
    unset($row['unit_number']);
    unset($row['rent']);
    unset($row['image']);
    if(empty($output[$row['unit_id']])) {
        $row['units'] = [];
        $row['units'][] =  $thisData;
        $output[$row['unit_id']] = $row;
    }
    else {
        $output[$row['unit_id']]['units'][] = $thisData;
    }
};


$json_output = json_encode($output);
print($json_output);