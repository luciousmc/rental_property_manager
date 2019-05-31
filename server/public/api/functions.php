<?php
function error_handler($error){
    $output = [
        "success" => false,
        "error" => $error -> getMessage()
    ];
    $json_output = json_encode($output);
    print($json_output);
}
set_exception_handler('error_handler');
http_response_code(500);

function startup(){
    header('Content-Type: application/json');
}
?>