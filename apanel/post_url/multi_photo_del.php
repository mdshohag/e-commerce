<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	
	$cls_productmanage = new cls_productmanage();
	 
	$photo_id = "$_POST[photo_id]";
	 
	 $filename =$cls_productmanage->get_image($photo_id);
	 
	$cls_productmanage->del_image($photo_id);
	
	unlink('../uploaded/' . $filename);
	
	
?>