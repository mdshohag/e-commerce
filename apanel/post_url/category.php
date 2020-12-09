<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	
	$cls_category = new cls_category();
	
	$rcategory_id = "$_POST[root_cat_id]";
	$cat_name = "$_POST[cat_name]";
	$status = "$_POST[cat_status]";
	
	
	echo $cls_category->data_insert($rcategory_id,$cat_name,$status);
?>