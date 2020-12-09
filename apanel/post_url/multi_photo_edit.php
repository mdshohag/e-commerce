<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	
	 $cls_productmanage = new cls_productmanage();

	$photo = $_FILES['upload']['tmp_name'];
	$photo_id = "$_POST[photo_id]";
	
	  
	echo $cls_productmanage->update_photo($photo,$photo_id);
?>