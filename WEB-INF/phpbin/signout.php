<?php
	$name = $_POST['mid'];//操作类型  关联数组类型 可以直接使用的哦$order['price']
    //$orderjson = json_encode($order); // 转换成json类型
    // json_decode($json)返回一个php对象呀

    session_start();
    $servername = "localhost";
    $username  = "root";
    $upassword = "521947";
    $database = "massage";
    $conn = new mysqli($servername, $username, $upassword, $database);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    
    session_destroy();
    echo "succeed";
    $conn->close();
?>