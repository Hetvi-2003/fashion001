<?php

 if ($_SERVER["REQUEST_METHOD"] == "POST") {
$userN = $_POST['username'];
 $passW = $_POST['password'];
 //connection
     $servername = "localhost";
     $username = "root";
     $password = "";
     $dbname = "login";

     $connection = mysqli_connect($servername, $username, $password, $dbname);

if (!$connection) {
die("Connection failed: " . mysqli_connect_error());
}
// else{
//    echo '<script>alert("Connected successfully ");</script>  <br>';
// }
}
$sql = "INSERT INTO `login` (`username`, `password`) VALUES ( '$userN', '$passW')";
$result = mysqli_query($connection,$sql);
if ($result) {
echo '<script>alert("New record created successfully ")</script>';
// echo '<script>window.location.href = "index.html";</script>';
header('Location:index.html');
} else {
echo "Error: " . $sql . "<br>" . mysqli_error($connection);
}

 

 ?>