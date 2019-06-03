<?php
require_once('../../../credentials.php');
require_once('../functions.php');
startup();
$pName = $_POST['property_name'];
$street = $_POST['street_address'];
$city = $_POST['city'];
$state = $_POST['state'];
$zip = $_POST['zip'];
$sqft = $_POST['sqft'];
$type = $_POST['property_type'];
$cName = $_POST['manager_contact'];
$phone = $_POST['manager_phone'];
$park = $_POST['parking_spaces'];

$query= "INSERT INTO `properties`(`property_name`, `street_address`, `city`, `state`, `zip`, `sqft`, `property_type`, `manager_contact`, `manager_phone`, `parking_spaces`) 
VALUES ('$pName', '$street', '$city', '$state', '$zip', '$sqft', '$type', '$cName', '$phone', '$park')";

$result = mysqli_query($conn, $query);

if(!$result){
    print(mysqli_error());
}



