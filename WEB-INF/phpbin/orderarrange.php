<?php
    $email= $_POST['email'];
    $servername ="localhost";
    $username    ="root";
    $upassword     ="521947";
    $database     ="massage";
    $conn = new mysqli($servername, $username, $upassword, $database);

    session_start();
    $email =$_SESSION['email']; 
    $sql = "select * from orderform where email = '".$email."'";

    $result = $conn->query($sql);
    $rows = array();
    while($row = mysqli_fetch_array($result)){
        $rows[] = $row;
    }
    echo json_encode($rows);
?>