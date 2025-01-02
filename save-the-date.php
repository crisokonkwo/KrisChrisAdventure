<?php
// Allow CORS
header("Access-Control-Allow-Origin: https://www.foreverchrisandkris.com");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Database credentials
$servername = "127.0.0.1";
$port = 5522;
$username = "foregqmx_chris";
$password = "lit8ccb7xg9e92";
$dbname = "foregqmx_messages";

// Create connection
// $conn = new mysqli($servername, $username, $password, $dbname);
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Check connection
if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo json_encode(["success" => false, "message" => "Method Not Allowed"]);

    // $name = $_POST['name'];
    // $email = $_POST['email'];
    // $message = $_POST['message'];

    // $stmt = $conn->prepare("INSERT INTO saveTheDate (name, email, message) VALUES (?, ?, ?)");
    // $stmt->bind_param("sss", $name, $email, $message);

    // if ($stmt->execute()) {
    //     echo json_encode(["success" => true, "message" => "Form submitted successfully."]);
    // } else {
    //     echo json_encode(["success" => false, "message" => "Failed to submit form."]);
    // }

    // $stmt->close();
} else {
    echo json_encode(["success" => false, "message" => "Method Not Allowed"]);
}

$conn->close();
?>