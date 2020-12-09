<?php
	class cls_root_category{
		public function con(){
			$connect = new cls_dbconfig();
			return $connect->connection();
		}
		public function data_insert($rcategory,$cat_status,$status){
			
			$yes = 2;
			
			$res = $this->con()->query("SELECT root_cat_name From root_category where root_cat_name='$rcategory'");
			$count = $res->num_rows;
			
			if($count != 0){
				return $yes;
				return false;
			}
			
			$cdate=date('Y-m-d');
			$tdate = date('Y-m-d H:i:s');
			$result=$this->con()->query("INSERT INTO root_category(root_cat_name,cat_status, status, date, date_time) VALUES ('$rcategory','$cat_status','$status','$cdate','$tdate')");
			return $result;
		}
		public function view_data(){
			$result = $this->con()->query("SELECT * from root_category");
			return $result;
		}
		public function root_update_by_id($update_id){
			$result = $this->con()->query("select * from root_category where id='$update_id'");
			return $result;
		}
		public function update_root_category($rcategory,$cat_status,$status,$id){
			
			
			
			$res = $this->con()->query("SELECT root_cat_name From root_category where root_cat_name='$rcategory' AND id != '$id'");
			$count = $res->num_rows;
			$yes = 3;
			if($count == 0){
				 $result = $this->con()->query("UPDATE root_category SET root_cat_name='$rcategory',cat_status='$cat_status',status='$status' WHERE id='$id'");
			return $result;	
			}else{
				return $yes;
			}
						
			
		}
		
		public function rootcategory_delete($root_cat_id){
			$result = $this->con()->query("DELETE FROM root_category WHERE id='$root_cat_id'");
			return $result;
		}
	
	}		
?>
