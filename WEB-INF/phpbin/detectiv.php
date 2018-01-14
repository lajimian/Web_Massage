<?php
    $email=$_POST['email'];//邮箱地址

    $servername ="localhost";
    $username    ="root";
    $upassword     ="521947";
    $database     ="massage";
    $conn = new mysqli($servername, $username, $upassword, $database);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    $sql = "select * from  user where email = '". $email ."'";
    if ($conn->query($sql)->num_rows > 0) 
      echo "email-used";
    else 
      echo "email-unuse";

    $conn->close();
?>