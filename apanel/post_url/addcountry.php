<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	
	 $cls_country = new cls_country();
	
	 $countryname = $db->connection()->real_escape_string(trim("$_POST[countryname]"));
	
	 $status = $db->connection()->real_escape_string("$_POST[status]");

	
	
	echo $cls_country->data_insert($countryname,$status);
?>