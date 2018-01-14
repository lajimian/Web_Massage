<?php
	$actionkind=$_POST['actionkind'];//操作类型
	$firstname=$_POST['firstname'];
	$lastname=$_POST['lastname'];
	$phone=$_POST['phone'];
	$email=$_POST['email'];//邮箱地址
	$password =$_POST['password'];//用户密码

    $servername ="localhost";
    $username    ="root";
    $upassword     ="521947";
    $database     ="massage";
    $conn = new mysqli($servername, $username, $upassword, $database);
    session_start();

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    if($actionkind == "login"){
    	$sql = "select * from  user where email = '". $email ." 'and password ='".$password."'";
    	if ($conn->query($sql)->num_rows > 0) 
        {
            if(isset($_SESSION['email']))
                ;
            else
                $_SESSION['email'] = $email;
            $sql = "update user set issignin = 'false' ";
            $conn->query($sql);
            $sql = "update user set issignin = 'true' where email = '".$email."'";
            $conn->query($sql);
    		echo "loginsuccess";
        }
        else 
	        echo "loginfailed";
    }
    else if($actionkind == "signup"){
    	$sql = "select * from  user where email = '". $email ."'";
    	if ($conn->query($sql)->num_rows > 0) {
    		echo "emailused";//邮箱已存在
    		exit();
    	}
    	else{
    		$sql = "insert into user values('".$email."','".$firstname."','".$lastname."','".$password."','".$phone."','".'0000'."','".'false'."')";
    		if($conn->query($sql))
            {
                $sql = "update user set issignin = 'false' ";
                $conn->query($sql);
                $sql = "update user set issignin = 'true' where email = '".$email."'";
                $conn->query($sql);
    			echo "signupsuccess";//账号创建成功
            }
    		else
    			echo "signupfailed";//账号创建失败
    	}
    }
    $conn->close();
?>