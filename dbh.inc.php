<?php

$dbServername = '127.0.0.1:3306';
$dbUsername = 'foregqmx_chris';
$dbPassword = 'lit8ccb7xg9e92';
$dbName = 'foregqmx_messages';

$conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName) or die('Not connected : Ah sh*t ' . mysqli_error());
?>
// if(!$conn){
//     die('Died: ’ . mysqli_error($conn));
// }

// User: foregqmx_chris
// Database: foregqmx_messages

https://ubuntu.com/server/docs/how-to-install-and-configure-php
php -S 127.0.0.1:4000