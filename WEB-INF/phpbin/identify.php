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
    $num = rand(1345,9999);
    $sql = "update user set identify = ".$num." where email ='".$email ."'" ;
    //echo  $sql;
    $conn->query($sql);
    $reault = mysqli_affected_rows($conn);
    if ($reault ==0) 
        echo "resetfailed";
    else if($reault != -1) 
        echo $num;
    $conn->close();
?>