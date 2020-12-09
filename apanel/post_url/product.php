<?php
require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	$cls_productmanage = new cls_productmanage();
	
	$root_name = "$_POST[root_id]";
	$category_name = "$_POST[category_name]";
	$subcate_name = "$_POST[subcate_name]";
	$product_type = "$_POST[product_type]";
	$title = "$_POST[title]";
	$pcode = "$_POST[pcode]";
	$pic = $_FILES['title_img']['tmp_name'];
	$quntity = "$_POST[quntity]";
	$weight = "$_POST[weight]";
	$price = "$_POST[price]";
	$discount = "$_POST[discount]";
	$editor1 = $db->connection()->real_escape_string("$_POST[editor1]");
	$termscon = $db->connection()->real_escape_string("$_POST[termscon]");
	
	
	
	echo $cls_productmanage->insert_product($root_name,$category_name,$subcate_name,$product_type,$title,$pcode,$pic,$quntity,$weight,$price,$discount,$editor1,$termscon);
	
	if(count($_FILES['upload']['name']) > 0){
		
			//Loop through each file
		for($i=0; $i<count($_FILES['upload']['name']); $i++){
			
			//Get the temp file path
            $pic = $_FILES['upload']['tmp_name'][$i];
			
	        echo $cls_productmanage->image_insert($pic);
		}
	}
?>