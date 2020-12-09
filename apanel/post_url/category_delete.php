<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	
	
	$db = new cls_dbconfig();
	
	$cls_category = new cls_category();
	
	$cate_id = "$_POST[category]";
	
	echo $result = $cls_category->category_delete($cate_id);
	
?>