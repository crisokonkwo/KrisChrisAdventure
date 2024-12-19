<?php
// Allow CORS
header("Access-Control-Allow-Origin: https://www.foreverchrisandkris.com");
// header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Database credentials
$servername = "127.0.0.1";
$port = 5522;
$username = "foregqmx_chris";
$password = "lit8ccb7xg9e92";
$dbname = "foregqmx_messages";
// lit8ccb7xg9e92

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
//$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $loginName = urldecode($_POST['loginName']);

    $stmt = $conn->prepare("INSERT INTO `login_db` (`user_name`) VALUES (?)");
    $stmt->bind_param("s", $loginName);

    if ($stmt->execute()) {
        http_response_code(200);
        echo json_encode(["success" => "Name stored successfully."]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Failed to store name."]);
    }

    $stmt->close();
} else {
    http_response_code(405);
    echo json_encode(["error" => "Method Not Allowed"]);
}

$conn->close();
?>
