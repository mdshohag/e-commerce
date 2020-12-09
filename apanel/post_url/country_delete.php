<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	
	$cls_country = new cls_country(); 
	
	$countryid = "$_POST[para2]";
	
	echo $result = $cls_country->country_delete_by_id($countryid);

	 
?>