<?php
	class cls_country{
		public function con(){
			$connect = new cls_dbconfig();
			return $connect->connection();
		}
		
		public function data_insert($countryname,$status){
			$cdate=date('Y-m-d');
			$tdate = date('Y-m-d H:i:s');
			
			$y = "5";
			$result = $this->con()->query("SELECT * FROM tbl_country WHERE country_name='$countryname'");
			$count = $result->num_rows;
			
			if($count == 0){
				$resu=$this->con()->query("INSERT INTO tbl_country(country_name, status, date, date_time) VALUES ('$countryname','$status','$cdate','$tdate')");
				return $resu;
			}
			else
				return $y;
			
		}
		public function view_country(){
			 
			 $result=$this->con()->query("SELECT * FROM tbl_country");
			return $result;
		}
		public function view_country_idwise($id){
			 
			 $result=$this->con()->query("SELECT * FROM tbl_country WHERE id='$id'");
			return $result;
		}
		public function country_update($countryname,$status,$countryid){
			$cdate=date('Y-m-d');
			$tdate = date('Y-m-d H:i:s');
			$n = "7";
			$result = $this->con()->query("SELECT * FROM tbl_country WHERE country_name='$countryname' AND id != '$countryid'");
			$count = $result->num_rows;
			if($count == 0){
				$res=$this->con()->query("UPDATE tbl_country SET country_name='$countryname', status='$status' ,date='$cdate',date_time='$tdate' WHERE id='$countryid'");
				return $res;
			}
			else
				return $n;
			 
		}
		public function country_delete_by_id($countryid){
			$result = $this->con()->query("DELETE FROM tbl_country WHERE id='$countryid'");
			return $result;
		}
	}
?>