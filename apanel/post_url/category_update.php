<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	
	
	$db = new cls_dbconfig();
	
	$cls_category = new cls_category();
	
	$rcategory = "$_POST[root_cat_id]";
	$cat_name = "$_POST[cat_name]";
	$status = "$_POST[cat_status]";
	$m_id = "$_POST[h_id]";
	
	$id = "$_POST[category_id]";
	
	echo $cls_category->update_category($rcategory,$cat_name,$status,$id,$m_id);
?>