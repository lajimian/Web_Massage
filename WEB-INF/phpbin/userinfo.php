<?php
	$name = $_POST['name'];//操作类型  关联数组类型 可以直接使用的哦$order['price']
    //$orderjson = json_encode($order); // 转换成json类型
    // json_decode($json)返回一个php对象呀

    $servername = "localhost";
    $username  = "root";
    $upassword = "521947";
    $database = "massage";
    $conn = new mysqli($servername, $username, $upassword, $database);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    
    $sql = "select introduce  from therapist where tname = '".$name."'";
    $result = $conn->query($sql);
    $rows = array();
    while($row = mysqli_fetch_array($result)){
            $rows[] = $row;
    }
    echo json_encode($rows);
    $conn->close();
?>