<?php
  require 'connect.php';
  $id = "1234";//mysql_real_escape_string($_POST["id"]);
  $passwd = "qwer";//mysql_real_escape_string($_POST["passwd"]);
  $Correct = array("Mode"=>'SUCCESS');
  $Wrong = array("Mode"=>'ERROR');
  $result = mysql_query("SELECT account,password,UID FROM regist WHERE account = '$id' and password = '$passwd'");
  $row = mysql_fetch_array($result);
  if (count($row) != 1){
    setcookie("username", $id);
    setcookie("uid", $row["UID"]);
    echo JSON_encode($Correct["Mode"]);
    //header("Location: login.html");
  }
  else{
    echo JSON_encode($Wrong["Mode"]);
    //header("Location: login.html");
  }
  mysql_close($con);
?>
