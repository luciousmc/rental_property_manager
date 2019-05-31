<?php
function error_handler($error){
    print($error->getMessage());
}
set_exception_handler('error_handler');

