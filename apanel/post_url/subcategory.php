<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	
	$cls_subcategory = new cls_subcategory();
	
	$root_name = "$_POST[cate_name_id]";
	$cate_name = "$_POST[category_name_id]";
	$subcategory_name = "$_POST[subcategory_name]";
	$status = "$_POST[status]";
	
	echo $cls_subcategory->sub_data_insert($root_name,$cate_name,$subcategory_name,$status);
?>