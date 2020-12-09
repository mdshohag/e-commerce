<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	
	$db = new cls_dbconfig();
	
	$cls_customer_login = new cls_customer_login();
	
	$email = htmlspecialchars($_REQUEST['email'], ENT_QUOTES, 'UTF-8');
	$pass = htmlspecialchars($_REQUEST['password'], ENT_QUOTES, 'UTF-8');
	
	
	
	echo $cls_customer_login->customer_access($email,$pass);
	
?>