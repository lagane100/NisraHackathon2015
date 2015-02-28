<?php
  require 'connect.php';
  $id = mysql_real_escape_string($_POST["id"]);
  $passwd = mysql_real_escape_string($_POST["passwd"]);
  $sex = mysql_real_escape_string($_POST["sex"]);
  $racial = mysql_real_escape_string($_POST["racial"]);
  $Correct = array("Mode"=>'SUCCESS');
  $Wrong = array("Mode"=>'ERROR');
  $username = mysql_query("SELECT account FROM regist where account = '$id'");
  $row = mysql_fetch_array($username);
  if (count($row) == 1) {
    mysql_query("INSERT INTO regist (sex, account, password, racial) VALUES ('$sex', '$id', '$passwd', '$racial')");
    echo "INSERT INTO regist (sex, account, password, racial) VALUES ('$sex', '$id', '$passwd', '$racial')";
    $UID = mysql_query("SELECT UID FROM regist where account = '$id'");
    mysql_query("INSERT INTO personal (UID, health, sex, racial, ATK, LV, killer, death, exp) VALUES ('$UID', 100, '$sex', '$racial', 10, 1, 0, 0, 0)");
    echo JSON_encode($Correct["Mode"]);
  }
  else{
    echo JSON_encode($Wrong["Mode"]);
  }
  mysql_close($con);
?>
