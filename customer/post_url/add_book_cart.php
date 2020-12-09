<?php

	session_start();
	
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	
	$cls_additem = new cls_additem();
	
	$bqt = $_REQUEST['quantity'];
	$Bookid = $_REQUEST['bookid'];
	$Bprice = $_REQUEST['price'];
	$date_time = date("F j, Y, g:i a");
	
	$customer_id = $_SESSION['customer_id'];
	$uniq_id = $_SESSION['uniq_id'];
	
	//$uniq_id = 121;
	if($bqt){
		if(!$uniq_id || empty($uniq_id))
		{
			$uniq_id = time();
			$_SESSION['uniq_id'] = $uniq_id;
			
			 $result = $cls_additem->insert_unique($customer_id,$uniq_id,$date_time);

		}
	
		$maisha_q2 = $cls_additem->select_book_qty($customer_id,$uniq_id,$Bookid);
		$rana_r2 = $maisha_q2->fetch_assoc();
		$book_qty = $rana_r2['book_qty'];
		//$book_qty = 2;
		 if(isset($book_qty) || !empty($book_qty) )
		{
			$update_q2 = $cls_additem->update_quntity($bqt,$uniq_id,$Bookid);
		}
			
		else if(!$book_qty)
		{
			$inser_tem = $cls_additem->insert_temp_details($uniq_id,$customer_id,$Bookid,$bqt,$Bprice);
		}
			
	
		
	}
?>