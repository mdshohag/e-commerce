<?php
	class cls_district{
		public function con(){
			$connect = new cls_dbconfig();
			return $connect->connection();
		}
		
		public function data_insert($country_name,$districtname,$status){
			$cdate=date('Y-m-d');
			$tdate = date('Y-m-d H:i:s');
			$n = "6";
			$result = $this->con()->query("SELECT * FROM tbl_district WHERE country='$country_name' AND district = '$districtname'");
			$count = $result->num_rows;
			if($count == 0){
				$resu=$this->con()->query("INSERT INTO tbl_district(country, district, status, date, date_time) VALUES ('$country_name','$districtname','$status','$cdate','$tdate')");
				return $resu;
			}else{
				return $n;
			}
			 
		}
		public function view_district(){
			 
			 $result=$this->con()->query("SELECT * FROM tbl_country");
			return $result;
		}
		public function view_district_id_wise($id){
			 
			 $result=$this->con()->query("SELECT tbl_district.country as countryid,tbl_country.country_name as country,tbl_district.district as district,tbl_district.status as status  FROM tbl_district INNER JOIN tbl_country ON tbl_district.country=tbl_country.id AND tbl_district.id = '$id'");
			return $result;
		}
		 
		public function view_district_table(){
			 
			 $result=$this->con()->query("SELECT tbl_district.id as id,tbl_country.country_name as country,tbl_district.district as district,tbl_district.status as status  FROM tbl_district INNER JOIN tbl_country ON tbl_district.country=tbl_country.id");
			return $result;
		}
		public function district_select($country){
			 
			 $result=$this->con()->query("SELECT * FROM tbl_district WHERE country='$country'");
			return $result;
		}
		public function district_update($hiddenid,$country_edit,$districtedit,$statusedit){
			 $result = $this->con()->query("SELECT * FROM tbl_district WHERE country='$country_edit' AND district = '$districtedit' AND id !='$hiddenid'");
			$count = $result->num_rows;
			$r="9";
			if($count == 0){
				 $resut=$this->con()->query("UPDATE tbl_district SET country = '$country_edit', district = '$districtedit', status = '$statusedit' WHERE id = '$hiddenid'");
				return $resut;
			}else{
				return $r;
			}
			
		}
		public function district_delete($id){
			$result = $this->con()->query("DELETE FROM tbl_district WHERE id='$id'");
			return $result;
		}
	}
?>