<?php
	class cls_producttype{
		public function con(){
			$connect = new cls_dbconfig();
			return $connect->connection();
		}
		
		public function data_insert($product_type,$status){
			$cdate=date('Y-m-d');
			$tdate = date('Y-m-d H:i:s');
		 	$y = "5";
			$result = $this->con()->query("SELECT * FROM producttype WHERE typename='$product_type'");
			$count = $result->num_rows;
			if($count == 0){
				$resu=$this->con()->query("INSERT INTO producttype(typename, status, date, date_time) VALUES ('$product_type','$status','$cdate','$tdate')");
				return $resu;
			}
			else 
				return $y;
			
		}
		public function view_producttype(){
			$result = $this->con()->query("SELECT * FROM producttype");
			return $result;
		}
		public function view_producttype_byid($id){
			$result = $this->con()->query("SELECT * FROM producttype WHERE id = '$id'");
			return $result;
		}
		public function product_type_update($product_type,$status,$hiddenid){
			$r="6";
			$result = $this->con()->query("SELECT * FROM producttype WHERE typename='$product_type' AND id !='$hiddenid'");
			$count = $result->num_rows;
			if($count == 0){
				$result = $this->con()->query("UPDATE producttype SET typename='$product_type', status ='$status' WHERE id = '$hiddenid'");
				return $result;
			}else{
				return $r;
			}
			
		}
		public function product_delete($productid){
			$result = $this->con()->query("DELETE FROM producttype WHERE id='$productid'");
			return $result;
		}
		 
	}
?>