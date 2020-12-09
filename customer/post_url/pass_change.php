<?php

	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	$cls_customer = new cls_customer();
	
	//$customer_id = $_SESSION['customer_id'];
	
	$id = "$_POST[customer_id]";
	
	$old_password = md5($_REQUEST['old_password']);
	$new_password = md5($_REQUEST['new_password']);
	$retype_pass = md5($_REQUEST['retype_pass']);
	
	$q7 = $cls_customer->check_password($id);
	
		$r7 = $q7->fetch_assoc();
		$password = $r7['password'];
		//print_r($password);
	    //die();
	
		if($old_password == $password)
	{
		$cls_customer->update_password($new_password,$id);
	echo '1';

	} else {
			echo '0';
		}
	
	
?>