
<?php
	//session_start(); 
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	
	$cls_additem = new cls_additem();
	 
	$uniq_id = "$_POST[uniq_id]";
	$mbook_id = "$_POST[mbook_id]";
	 

	
	echo $cls_additem->remove_item($uniq_id,$mbook_id);
?>