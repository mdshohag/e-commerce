<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	
	$cls_login = new cls_login();
	
	$email = htmlspecialchars($_REQUEST['para_email'], ENT_QUOTES, 'UTF-8');
	$pass = htmlspecialchars($_REQUEST['para_pass'], ENT_QUOTES, 'UTF-8');

	
	
	echo $cls_login->admin_access($email,$pass);
?>