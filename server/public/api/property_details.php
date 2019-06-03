<?php
require_once('../../credentials.php');
require_once('functions.php');
startup();
$query = "SELECT p.`id`, p.`property_name`, p.`street_address`, p.`city`, p.`state`, p.`zip`, p.`sqft`, p.`parking_spaces`, p.`property_type`, p.`manager_contact`, p.manager_phone, u.`id` AS unit_id, u.`unit_number`, u.`sqft` AS unit_sqft, u.`rent`, t.id AS tenant_id, t.business_name, t.contact_name, t.tenant_phone, t.tenant_email, t.`move_in_date`, t.lease_end_date, t.rent_due_date
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
    $tenantData = [];
    $tenantData['tenant_id'] = $row['tenant_id'];
    $tenantData['business_name'] = $row['business_name'];
    $tenantData['contact_name'] = $row['contact_name'];
    $tenantData['tenant_phone'] = $row['tenant_phone'];
    $tenantData['tenant_email'] = $row['tenant_email'];
    $tenantData['move_in_date'] = $row['move_in_date'];
    $tenantData['lease_end_date'] = $row['lease_end_date'];
    $tenantData['rent_due_date'] = $row['rent_due_date'];
    unset($row['tenant_id']);
    unset($row['business_name']);
    unset($row['contact_name']);
    unset($row['tenant_phone']);
    unset($row['tenant_email']);
    unset($row['move_in_date']);
    unset($row['lease_end_date']);
    unset($row['rent_due_date']);
    if(empty($output[$row['tenant_id']])) {
        $row['tenants'] = [];
        $row['tenants'][] =  $tenantData;
        $output[$row['tenant_id']] = $row;
    }
    else {
        $output[$row['tenants_id']]['tenants'][] = $tenantData;
    }
    
    $unitData = [];
    $unitData['unit_id'] = $row['unit_id'];
    $unitData['unitNumber'] = $row['unit_number'];
    $unitData['rent'] = $row['rent'];
    $unitData['image'] = $row['image'];
    $unitData['unit_sqft'] = $row['unit_sqft'];
    unset($row['unit_id']);
    unset($row['unit_sqft']);
    unset($row['unit_number']);
    unset($row['rent']);
    unset($row['image']);
    if(empty($output[$row['unit_id']])) {
        $row['units'] = [];
        $row['units'][] =  $unitData;
        $output[$row['unit_id']] = $row;
    }
    else {
        $output[$row['unit_id']]['units'][] = $unitData;
    }
};


$json_output = json_encode($output);
print($json_output);