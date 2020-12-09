<?php
	class cls_customer{
		public function con(){
			$connect = new cls_dbconfig();
			return $connect->connection();
		}
		
		public function view_customer_data($cust_id){
			//$cus_id = md5($cust_id);
			$result = $this->con()->query("select * from registration where md5(email) = '$cust_id'");
			return $result;
		}
		
		public function view_customer_email($id){
			$result = $this->con()->query("select * from registration where id='$id'");
			return $result;
		}
		
		public function view_customer_all($cust_all){
			$result = $this->con()->query("SELECT registration.*, tbl_country.country_name,tbl_district.district,tbl_thana.thana FROM registration JOIN tbl_country ON registration.country=tbl_country.id JOIN tbl_district ON registration.city=tbl_district.id JOIN tbl_thana ON registration.area=tbl_thana.id where email='$cust_all'");
			return $result;
		}
		public function view_customer($id){
			$result = $this->con()->query("SELECT fullname,mobile FROM registration where id='$id'");
			return $result;
		}
		public function view_country(){
			$result = $this->con()->query("SELECT * FROM tbl_country");
			return $result;
		}
		public function district_select($country){

			$result=$this->con()->query("SELECT * FROM tbl_district WHERE country='$country'");
			return $result;
		}

		public function view_district(){
			$result = $this->con()->query("SELECT * FROM tbl_district");
			return $result;
		}
		public function get_subcategory($thana_s){
			$result = $this->con()->query("SELECT * FROM tbl_thana where district = '$thana_s'");
			return $result;
		}
		public function view_thana(){
			$result = $this->con()->query("SELECT * FROM tbl_thana");
			return $result;
		}
		public function update_registration($full_name,$gender,$mobile,$altmobile,$country_name,$city_name,$thana_name,$delivery,$id){
			$result = $this->con()->query("UPDATE registration SET 	fullname='$full_name', gender='$gender', mobile='$mobile', alternate_phn='$altmobile', country='$country_name', city='$city_name', area='$thana_name', delivery_address='$delivery' WHERE id='$id'");
			return $result;
		}

		public function view_temp_details($uniq_id){
			$result = $this->con()->query("select book_id, book_qty, book_price from temp_details where temp_id = '$uniq_id'");
			return $result;
		}
		public function send_mail($customer_id){
			$result = $this->con()->query("select email from registration where id = '$customer_id'");
			return $result;
		}
		public function view_tbl_order_details($uniq_id){
			$result = $this->con()->query("select book_qty, book_id, book_price, order_status from tbl_order_details where uniq_id = '$uniq_id'");
			return $result;
		}
		public function view_book_details($book_id1){
			$result = $this->con()->query("select * from book where id = '$book_id1'");
			return $result;
		}
		
		public function view_my_order($custm_id){
			$result = $this->con()->query("select * from tbl_order_details where md5(customer_id) ='$custm_id'");
			return $result;
			
		}
		public function view_image($oi_id){
			$rr = $this->con()->query("select tbl_order_details.*, book.image from tbl_order_details JOIN book ON tbl_order_details.book_id=book.id where order_id='$oi_id'");
			return $rr;
		}
		
		public function check_password($customer_id){
			$q = $this->con()->query("select password from registration where email = '$customer_id'");
			return $q;
		
		}
		public function update_password($new_password,$id){
			$pass = $this->con()->query("update registration set password = '$new_password' where email = '$id'");
			return $pass;
		}

	}
?>