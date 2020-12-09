<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	
	$cls_thana = new cls_thana();
	 
	$thana_id = "$_POST[para2]";
	 

	
	echo $cls_thana->thana_delete($thana_id);
?>