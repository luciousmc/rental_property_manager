<?php
require_once('../credentials.php');
require_once('../functions.php');
startup();
$id = $_GET['id'];

if(empty($_GET['id'])){
    $whereClause = '';
}else {
    $whereClause = "WHERE p.`id` = $id";
}

$query = "SELECT p.`id`, p.`property_name`, p.`street_address`, p.`city`, p.`state`, p.`zip`, p.`sqft`, p.`parking_spaces`, p.`property_type`, p.`manager_contact`, p.manager_phone, u.`id` AS unit_id, u.`unit_number`, u.`sqft` AS unit_sqft, u.`rent`, t.id AS tenant_id, t.business_name, t.contact_name, t.tenant_phone, t.tenant_email, t.`move_in_date`, t.lease_end_date, t.rent_due_date
    FROM `properties` AS p
    LEFT JOIN `units` AS u
    ON u.property_id = p.id
    LEFT JOIN `tenants` AS t 
    ON t.`unit_id` = u.id " . $whereClause;
$query1 = "SELECT p.`id`, p.`property_name`, p.`street_address`, p.`city`, p.`state`, p.`zip`, p.`sqft`, p.`parking_spaces`, p.`property_type`, p.`manager_contact`, p.manager_phone, i.url AS image, u.`id` AS unit_id, u.`unit_number`, u.`sqft` AS unit_sqft, u.`rent`, u.`status`, t.id AS tenant_id, t.business_name, t.contact_name, t.tenant_phone, t.tenant_email, t.`move_in_date`, t.lease_end_date, t.rent_due_date
    FROM `properties` AS p
    LEFT JOIN `images` AS i 
    ON i.property_id = p.id
   LEFT JOIN `units` AS u
    ON u.property_id = p.id
    LEFT JOIN `tenants` AS t 
    ON t.`unit_id` = u.id " . $whereClause;

$result = mysqli_query($conn, $query1);
if (!$result) {
    throw new Exception (mysqli_error($conn));
}

$output = [];

while ($row = mysqli_fetch_assoc($result)) {
    $tenantData = [
        'tenant_id' => $row['tenant_id'],
        'business_name' => $row['business_name'],
        'contact_name' => $row['contact_name'],
        'tenant_phone' => $row['tenant_phone'],
        'tenant_email' => $row['tenant_email'],
        'move_in_date' => $row['move_in_date'],
        'lease_end_date' => $row['lease_end_date'],
        'rent_due_date' => $row['rent_due_date']
    ];

    $unitData = [
        'unit_id' => $row['unit_id'],
        'unitNumber' => $row['unit_number'],
        'rent' => $row['rent'],
        'unit_sqft' => $row['unit_sqft'],
        'tenants' => $tenantData,
        'status' => $row['status']
    ];

    if ($output === []) {
        $propertyData = [
            'id' => $row['id'],
            'property_name' => $row['property_name'],
            'street_address' => $row['street_address'],
            'city' => $row['city'],
            'state' => $row['state'],
            'zip' => $row['zip'],
            'sqft' => $row['sqft'],
            'image' => $row['image'],
            'parking_spaces' => $row['parking_spaces'],
            'property_type' => $row['property_type'],
            'manager_contact' => $row['manager_contact'],
            'manager_phone' => $row['manager_phone']
        ];

        $output = $propertyData;
        $output['units'][] = $unitData;
    } else {
        $output['units'][] = $unitData;

    }

};


$json_output = json_encode($output);
print($json_output);