<?php
require_once('../../credentials.php');
require_once('functions.php');
startup();
$pName = $GET_(property_name);
$street = $GET_(street_address);
$city = $GET_(city);
$state = $GET_(state);
$zip = $GET_(zip);
$sqft = $GET_(sqft);
$type = $GET_(property_type);
$cName = $GET_(manager_contact);
$phone = $GET_(manager_phone);
$park = $GET_(parking_spaces);
$query= "INSERT INTO `properties`(`property_name`, `street_address`, `city`, `state`, `zip`, `sqft`, `property_type`, `manager_contact`, `manager_phone`, `parking_spaces`) 
VALUES ($pName, $street, $city, $state, $zip, $sqft, $type, $cName, $phone, $park

)";

