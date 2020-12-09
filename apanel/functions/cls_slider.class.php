<?php
	class cls_slider{
		public function con(){
			$connect = new cls_dbconfig();
			return $connect->connection();
		}
		
		public function data_insert($sliderimage,$status){
			
		$sliderimage = $_FILES["sliderimage"]["tmp_name"];
		
		if($sliderimage != ""){
			$r = rand('1111','9999');
			$n = "$r.jpg";
			
			$destination = "../slider/$n";
			
			move_uploaded_file($sliderimage,$destination);			
		}
				
		$result = $this->con()->query("INSERT INTO tbl_slider(image_name, status) VALUES ('$n','$status')");
		return $result;
			
		}
		public function view_all_slider(){
			 
				$result = $this->con()->query("SELECT * FROM  tbl_slider");
				return $result;
			 
		}
		public function silde_delete($slider_id){
			$result = $this->con()->query("DELETE FROM tbl_slider Where id='$slider_id'");
			return $result;
		}
		public function get_image($slider_id){
			$result = $this->con()->query("select image_name from tbl_slider where id = '$slider_id'");
			$row = $result->fetch_assoc();
			return "$row[image_name]";
		}
	}
?>