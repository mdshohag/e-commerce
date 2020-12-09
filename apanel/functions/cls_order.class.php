<?php
	class cls_order{
		public function con(){
			$connect = new cls_dbconfig();
			return $connect->connection();
		}
		
		public function processing_view(){
			
			$result= $this->con()->query("SELECT tbl_order_details.*, registration.id,tbl_country.country_name,tbl_district.district FROM tbl_order_details JOIN registration ON tbl_order_details.customer_id=registration.email JOIN tbl_country ON registration.country=tbl_country.id JOIN tbl_district ON registration.city=tbl_district.id WHERE tbl_order_details.order_status = 'Processing' order by order_id desc");
			return $result;
		}
		
		public function accepted_view(){
			$result = $this->con()->query("SELECT tbl_order_details.*, registration.id,tbl_country.country_name,tbl_district.district FROM tbl_order_details JOIN registration ON tbl_order_details.customer_id=registration.email JOIN tbl_country ON registration.country=tbl_country.id JOIN tbl_district ON registration.city=tbl_district.id WHERE tbl_order_details.order_status = 'Accepted' order by order_id desc");
			return $result;
		}
		
		public function update_procssing($order_id){
			
			$result = $this->con()->query("update tbl_order_details set order_status = 'Accepted' where order_id = '$order_id'");
			return $result;
		}

		public function view_oderdetails($orderid){
			$result = $this->con()->query("select * from tbl_order_details where order_id = '$orderid'");
			return $result;
		}

		public function view_customer($customer_id){
			$result = $this->con()->query("select registration.*, tbl_country.country_name,tbl_district.district,tbl_thana.thana from registration JOIN tbl_country ON registration.country=tbl_country.id JOIN tbl_district ON registration.city=tbl_district.id JOIN tbl_thana ON registration.area=tbl_thana.id where registration.email = '$customer_id'");
			return $result;
		}
		public function view_temp_details($uniq_id){
			$result = $this->con()->query("select * from temp_details where temp_id = '$uniq_id'");
			return $result;
		}
		public function view_book_p($book){
			$result = $this->con()->query("select * from book where id = '$book'");
			return $result;
		}
		public function view_category($book_editor){
			$result = $this->con()->query("select cat_name from category WHERE id = '$book_editor'");
			return $result;
		}

	}
		
?>