<?php
	class cls_thana{
		public function con(){
			$connect = new cls_dbconfig();
			return $connect->connection();
		}
		
		public function data_insert($country,$selectdistrict,$thananame,$status){
			$cdate=date('Y-m-d');
			$tdate = date('Y-m-d H:i:s');
			$y="5";
			$result = $this->con()->query("SELECT * FROM tbl_thana WHERE country='$country' AND district = '$selectdistrict' AND thana = '$thananame'");
			$count = $result->num_rows;
			if($count == 0){
				$result=$this->con()->query("INSERT INTO tbl_thana(country, district, thana, status, date, date_time) VALUES ('$country','$selectdistrict','$thananame','$status','$cdate','$tdate')");
				return $result;
			}else{
				return $y;
			}
			 
		}
		public function view_district(){
			 
			 $result=$this->con()->query("SELECT * FROM tbl_country");
			return $result;
		}
		public function view_thana(){
			$result = $this->con()->query("SELECT  tbl_country.country_name as country ,tbl_district.district as district,tbl_thana.id as id,tbl_thana.thana as thana,tbl_thana.status as status FROM tbl_thana INNER JOIN tbl_district ON tbl_thana.district = tbl_district.id INNER JOIN tbl_country ON tbl_thana.country = tbl_country.id");
			return $result;
		}
		public function view_country_idwise($id){
			$result = $this->con()->query("SELECT  tbl_country.country_name as country ,tbl_district.district as district,tbl_thana.thana as thana,tbl_thana.country as countryid,tbl_thana.district as districtid,tbl_thana.status as status FROM tbl_thana INNER JOIN tbl_district ON tbl_thana.district = tbl_district.id INNER JOIN tbl_country ON tbl_thana.country = tbl_country.id WHERE tbl_thana.id = '$id'");
			return $result;
		}
		public function district_select($country){
			 
			 $result=$this->con()->query("SELECT * FROM tbl_district WHERE country='$country'");
			return $result;
		}
		public function update_thana($country,$selectdistrict,$thananame,$hidenid,$status){
			$r="8";
			$result = $this->con()->query("SELECT * FROM tbl_thana WHERE country='$country' AND district = '$selectdistrict' AND thana = '$thananame' AND id !='$hidenid'");
			$count = $result->num_rows;
			if($count == 0){
				$resul = $this->con()->query("UPDATE tbl_thana SET country='$country',district ='$selectdistrict',thana = '$thananame', status = '$status' WHERE id ='$hidenid'");
				return $resul;
			}else{
				return $r;
			}
			
		}
		public function thana_delete($thana_id){
			$result = $this->con()->query("DELETE FROM tbl_thana WHERE id = '$thana_id'");
			return $result;
		}
		
	}
?>