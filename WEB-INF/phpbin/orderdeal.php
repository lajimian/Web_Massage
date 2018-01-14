<?php
	$order = $_POST['order'];//操作类型  关联数组类型 可以直接使用的哦$order['price']
    $orderjson = json_encode($order); // 转换成json类型
    // json_decode($json)返回一个php对象呀

    $servername = "localhost";
    $username  = "root";
    $upassword = "521947";
    $database = "massage";
    $conn = new mysqli($servername, $username, $upassword, $database);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    
    $sql = "insert into orderform values('".$order['email']."','".$order['workername1']."','".$order['workername2']."','".$order['price']."','".$order['datas']."','".$order['time']."','".$order['long']."','".$order['types']."','".$order['province']."','".$order['code']."','".$order['parking']."','".$order['stree1']."','".$order['stree2']."')";
    if($conn->query($sql))
        echo "ordercreatesuccess";
    else
        echo $sql;
    $conn->close();
?>