<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	
	 $cls_slider = new cls_slider();
	
	// $sliderimage = $db->connection()->real_escape_string(trim("$_FILES[sliderimage][name]"));
	 $sliderimage = $_FILES['sliderimage']['name'];
	 
	 $status = $db->connection()->real_escape_string("$_POST[status]");
	 
	echo $cls_slider->data_insert($sliderimage,$status);
?>