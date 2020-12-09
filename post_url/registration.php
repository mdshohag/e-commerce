<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	
	$db = new cls_dbconfig();
	$cls_registration = new cls_registration();
	
	
	$full_name = htmlspecialchars(ucwords ($_REQUEST['full_name']), ENT_QUOTES, 'UTF-8');
	$email = htmlspecialchars($_REQUEST['email_name'], ENT_QUOTES, 'UTF-8');
	$mobile = htmlspecialchars($_REQUEST['mobile'], ENT_QUOTES, 'UTF-8');
	$password = md5($_REQUEST['password_u']);
	
	
	echo $cls_registration->registration($full_name,$email,$mobile,$password);
	
	
	
?>