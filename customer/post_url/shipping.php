<?php

	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	$cls_customer = new cls_customer();
	
	$full_name = "$_POST[full_name]";
	$gender = "$_POST[gender]";
	$mobile = "$_POST[mobile]";
	$altmobile = "$_POST[altmobile]";
	$country_name = "$_POST[country_name]";
	$city_name = "$_POST[city_name]";
	$thana_name = "$_POST[thana_name]";
	$delivery = $db->connection()->real_escape_string("$_POST[delivery]");
	
	$id = "$_POST[customer_id]";
	
	echo $cls_customer->update_registration($full_name,$gender,$mobile,$altmobile,$country_name,$city_name,$thana_name,$delivery,$id);
	
?>