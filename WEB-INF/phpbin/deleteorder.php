<?php
    $mid= $_POST['mid'];
    $servername ="localhost";
    $username    ="root";
    $upassword     ="521947";
    $database     ="massage";
    $conn = new mysqli($servername, $username, $upassword, $database);

    $email = "123456@qq.com";
    $sql = "delete from orderform where email = '".$mid['email']."'"."and riqi = '".$mid['riqi']."'and startime = '".$mid['startime']."'";
    $conn->query($sql);
    $reault = mysqli_affected_rows($conn);
    if ($reault == 0) 
        echo "deletefailed";
    else 
        echo "deletesucceed";
?>