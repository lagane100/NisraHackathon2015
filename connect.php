<?php
  $con = mysql_connect("localhost","root","whatthefuck");

  if(!$con){
    die('Could not connect due to ' . mysql_error());
  }
  mysql_query("SET NAMES 'utf-8'");
  mysql_select_db("nisra_hackathon_2015");
?>
