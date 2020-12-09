<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	
	$cls_order = new cls_order();
	
	$order_id = "$_POST[order_id]";
	 
	echo $result = $cls_order->update_procssing($order_id);
	
	
?>