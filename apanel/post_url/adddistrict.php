<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	
	$cls_district = new cls_district();
	
	$country_name =$db->connection()->real_escape_string(trim("$_POST[country_name]"));
	
	$districtname = $db->connection()->real_escape_string(trim("$_POST[districtname]"));
	
	$status = "$_POST[status]";
 
	
	echo $cls_district->data_insert($country_name,$districtname,$status);
?>