<?php 
  $actionkind=$_POST['actionkind'];//操作类型
  $firstname=$_POST['firstname'];
  $lastname=$_POST['lastname'];
  $phone=$_POST['phone'];
  $email=$_POST['email'];//邮箱地址
  $password =$_POST['password'];//用户密码
/** 
* Check检测类 
*/ 
class Check{ 
 function IsUsername($Argv){ 
  $RegExp="/^[-A-Za-z0-9_\x{4e00}-\x{9fa5}]{6,16}+$/u"; 
  return preg_match($RegExp,$Argv); 
 } 
         
 function IsMail($Argv){ 
  $RegExp = "/^([0-9A-Za-z\\-_\\.]+)@([0-9a-z]+\\.[a-z]{2,3}(\\.[a-z]{2})?)$/i"; 
  return preg_match($RegExp,$Argv); 
 } 

  function IsPhone($Argv){ 
  $RegExp = "#^13[\d]{9}$|^14[5,7]{1}\d{8}$|^15[^4]{1}\d{8}$|^17[0,6,7,8]{1}\d{8}$|^18[\d]{9}$#"; 
  return preg_match($RegExp,$Argv); 
 } 
}
$check = new Check();
if($actionkind=="user[email]")
{
  if($check->IsMail($email))
    echo "trueemail" ;
  else
    echo "erroremail";
}
else if($actionkind=="user[password]")
{
  if($check->IsUsername($password))
    echo "truepassword" ;
  else
    echo "errorpassword";
}
else if($actionkind=="user[phone]")
{
  if($check->IsUsername($phone))
    echo "truephone" ;
  else
    echo "errorphone";
}
?>