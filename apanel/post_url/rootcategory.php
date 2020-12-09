<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	
	$cls_root_category = new cls_root_category();
	
	$rcategory = $db->connection()->real_escape_string("$_POST[root_category]");
	$cat_status = "$_POST[cat_status]";
	$status = "$_POST[status]";
	
	
	echo $cls_root_category->data_insert($rcategory,$cat_status,$status);
?>