<?php
	class cls_customer_login{
		public function con(){
			$connect = new cls_dbconfig();
			return $connect->connection();
		}
		
		public function customer_access($email,$pass){
			$no = "no";
			$yes = "yes";
			
			$ss = md5($pass);
			
			$result = $this->con()->query("SELECT * FROM registration WHERE email = '$email' and password = '$ss'");
			$check = $result->num_rows;
			if($check == 0){
				return $no;
			}
			
			$row = $result->fetch_assoc();
			session_start();
			//$_SESSION['id'] = $row['id'];
			$_SESSION['customer_id'] = $row['email'];
			$_SESSION['customer_fname'] = $row['id'];
			return $yes;
		}
		public function forgotpassword($email){
			$pass = $this->con()->query("SELECT id,fullname FROM registration WHERE email = '$email'");

			//$row_pass = $pass->fetch_assoc();

			return $pass;
		}
	}
?>