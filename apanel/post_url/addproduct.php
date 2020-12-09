<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	
	 $cls_producttype = new cls_producttype();
	
	$product_type = $db->connection()->real_escape_string($_POST['typename']);
	
	$status = $db->connection()->real_escape_string("$_POST[status]");

	
	
	echo $cls_producttype->data_insert($product_type,$status);
?>