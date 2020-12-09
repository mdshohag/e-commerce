<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	
	$cls_thana = new cls_thana();
	
	$country = "$_POST[country]";
	$selectdistrict = "$_POST[selectdistrict]";
	$thananame = "$_POST[thananame]";
	
	$status = "$_POST[status]";
	
	
	echo $cls_thana->data_insert($country,$selectdistrict,$thananame,$status);
?>