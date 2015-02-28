<?php
  require 'connect.php';
  $id = mysql_real_escape_string($_POST["id"]);
  $passwd = mysql_real_escape_string($_POST["passwd"]);
  $result = mysql_query("SELECT account,password,UID FROM regist WHERE account = '$id' and password = '$passwd'");
  $row = mysql_fetch_array($result);
  if (count($row) != 1){
    setcookie("username", $id);
    setcookie("uid", $row["UID"]);
    echo 'Success!';
    header("Location: login.html");
  }
  else{
    echo 'Error!';
    header("Location: login.html");
  }
  mysql_close($con);
?>
