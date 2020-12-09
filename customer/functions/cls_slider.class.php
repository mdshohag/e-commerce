<?php
	class cls_slider{
		public function con(){
			$connect = new cls_dbconfig();
			return $connect->connection();
		}
		
		 
		public function view_slider(){
			 
				$resu=$this->con()->query("SELECT * FROM  tbl_slider WHERE status='yes'");
				return $resu;
			 
			
			 
			 
			
		}public function slider_delete($id){
			 
				$resu=$this->con()->query("DELETE FROM  tbl_slider WHERE id='$id'");
				return $resu;
		}
		 
	}
?>