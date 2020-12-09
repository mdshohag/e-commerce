<?php
	class cls_registration{
		public function con(){
			$connect = new cls_dbconfig();
			return $connect->connection();
		}
		
		public function registration($full_name,$email,$mobile,$password){
			
			$yes = 2;
			
			$res = $this->con()->query("SELECT email From registration where email='$email'");
			$count = $res->num_rows;
			
			if($count != 0){
				return $yes;
				return false;
			}
			
			$yes_m = 3;
			
			$res = $this->con()->query("SELECT mobile From registration where mobile='$mobile'");
			$count = $res->num_rows;
			
			if($count != 0){
				return $yes_m;
				return false;
			}
			$result=$this->con()->query("INSERT INTO registration (fullname,email,mobile,password) VALUES ('$full_name','$email','$mobile','$password')");
			return $result;
			
			
		}
		
	}

?>