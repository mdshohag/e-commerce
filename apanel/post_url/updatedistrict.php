<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	
	$cls_district = new cls_district();
	
	$country_edit =$db->connection()->real_escape_string(trim("$_POST[country_edit]"));
	
	$hiddenid = $db->connection()->real_escape_string(trim("$_POST[hiddenid]"));

	$districtedit =$db->connection()->real_escape_string(trim("$_POST[districtedit]"));
	
	$statusedit = "$_POST[statusedit]";
	
	echo $cls_district->district_update($hiddenid,$country_edit,$districtedit,$statusedit);
?>