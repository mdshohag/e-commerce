<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	
	$cls_productmanage = new cls_productmanage();
	
	if(count($_FILES['upload']['name']) > 0){
		
			//Loop through each file
		for($i=0; $i<count($_FILES['upload']['name']); $i++){
			
			//Get the temp file path
            $pic = $_FILES['upload']['tmp_name'][$i];
			
	        echo $cls_productmanage->image_insert($pic);
		}
		
	}
?>