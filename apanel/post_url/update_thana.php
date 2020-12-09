<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	
	$cls_thana = new cls_thana();
	
	$country = $db->connection()->real_escape_string(trim("$_POST[country]"));
	$selectdistrict =$db->connection()->real_escape_string(trim("$_POST[selectdistrict]"));
	$thananame =$db->connection()->real_escape_string(trim("$_POST[thananame]"));
	$hidenid = "$_POST[hidenid]";

	$status = "$_POST[status]";
	
	
	echo $cls_thana->update_thana($country,$selectdistrict,$thananame,$hidenid,$status);
?>