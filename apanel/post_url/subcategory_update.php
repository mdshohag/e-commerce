<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	
	
	$db = new cls_dbconfig();
	
	$cls_subcategory = new cls_subcategory();
	
	 $cate_name_id = "$_POST[cate_name_id]";
	
	$category_name_id = "$_POST[category_name]";

	$subcategory_name = "$_POST[subcategory_name]";
	$status = "$_POST[status]";
	
	$id = "$_POST[subcategory_id]";
	
	
	echo $cls_subcategory->update_subcategory($cate_name_id,$category_name_id,$subcategory_name,$status,$id);
?>