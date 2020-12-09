<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	
	$cls_slider = new cls_slider();
	 
	$slider_id = "$_POST[slider]";
	
	 $filename = $cls_slider->get_image($slider_id);
	 
	 $cls_slider->silde_delete($slider_id);
	
	unlink('../slider/'. $filename);
?>