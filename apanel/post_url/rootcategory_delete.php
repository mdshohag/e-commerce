<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	
	$cls_root_category = new cls_root_category();
	
	$root_cat_id = "$_POST[rootcate]";
	 
	echo $result = $cls_root_category->rootcategory_delete($root_cat_id);
	
	
?>