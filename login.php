<?php
session_start();

// Define the correct password (in a real application, use hashed passwords stored securely in a database)
$correct_password = 'chrisandkris25';

// Retrieve the input from the POST request
$name = $_POST['name'];
$password = $_POST['password'];

// Validate the password
if ($password === $correct_password) {
    // Log the login attempt
    $log = date('Y-m-d H:i:s') . " - Login successful for: " . htmlspecialchars($name) . "\n";
    file_put_contents('login_log.txt', $log, FILE_APPEND);

    // Set session variable to indicate successful login
    $_SESSION['logged_in'] = true;
    $_SESSION['username'] = htmlspecialchars($name);

    // Redirect to the welcome page with the name as a query parameter
    header("Location: welcome-page.html?to=" . urlencode($name));
    exit();
} else {
    // Log the failed login attempt
    $log = date('Y-m-d H:i:s') . " - Login failed for: " . htmlspecialchars($name) . "\n";
    file_put_contents('login_log.txt', $log, FILE_APPEND);

    // Redirect back to the login page with an error message
    header("Location: login.html?error=Incorrect%20password");
    exit();
}
?>