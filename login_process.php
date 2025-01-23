<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") { 
    $username = $_POST['username'];
    $password = $_POST['password'];

    $servername = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "login";

    // Connection
    $conn = mysqli_connect($servername, $dbUsername, $dbPassword, $dbname);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    } 

    $stmt = $conn->prepare("SELECT password FROM login WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($stored_password);
    $stmt->fetch();

    // Checking
    if ($stmt->num_rows > 0) {
        if ($password == $stored_password) {
         echo '<script>alert("Valid credentials");</script>';
            echo '<script>window.location.href = "home.html";</script>';
        } else {
            echo '<script>alert("Invalid credentials");</script>';
            echo '<script>window.location.href = "login_process.php";</script>';
        }
    } else {
        echo '<script>alert("Invalid credentials");</script>';
        echo '<script>window.location.href = "login_process.php";</script>';
    }

    $stmt->close();
    $conn->close();
}

?>
