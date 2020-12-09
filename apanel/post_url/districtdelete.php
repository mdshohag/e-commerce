<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	
	$cls_district = new cls_district();
	
	$id = "$_POST[para2]";
	 
	echo $cls_district->district_delete($id);
?>