<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	
	 $cls_producttype = new cls_producttype();
	 $productid = "$_POST[para2]";
	 echo $cls_producttype->product_delete($productid);
?>