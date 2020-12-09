<?php
	class cls_category{
		public function con(){
			$connect = new cls_dbconfig();
			return $connect->connection();
		}
		
		public function view_data(){
			$result = $this->con()->query("SELECT * from root_category");
			return $result;
		}
		
		public function data_insert($rcategory_id,$cat_name,$status){
			
			$yes = 2;
			
			$res = $this->con()->query("SELECT cat_name From category where cat_name='$cat_name'");
			$count = $res->num_rows;
			
			if($count != 0){
				return $yes;
				return false;
			}
			
			$cdate=date('Y-m-d');
			$tdate = date('Y-m-d H:i:s');
			
			$result = $this->con()->query("INSERT INTO category(root_cat_id,cat_name,status,date,date_time) VALUES ('$rcategory_id','$cat_name','$status','$cdate','$tdate')");
			
			return $result;
		}
		
		public function category_view(){
			$result = $this->con()->query("SELECT category.*, root_category.root_cat_name from category JOIN root_category ON category.root_cat_id=root_category.id ORDER BY category.id DESC");
			return $result;
		}
		public function cat_update_by_id($update_id){
			$result = $this->con()->query("SELECT category.*, root_category.root_cat_name from category JOIN root_category ON category.root_cat_id=root_category.id and category.id='$update_id'");
			return $result;
		}
		public function update_category($rcategory,$cat_name,$status,$id){
			
			$res = $this->con()->query("SELECT cat_name From category where cat_name='$cat_name' AND id != '$id'");
			$count = $res->num_rows;
			$yes = 3;
			
			if($count == 0){
				$result=$this->con()->query("UPDATE category SET root_cat_id='$rcategory', cat_name='$cat_name', status='$status' WHERE id='$id'");
				return $result;
				
			}else{
				return $yes;
			}
			
		
		}
		
		public function category_delete($cate_id){
			$result = $this->con()->query("DELETE FROM category WHERE id='$cate_id'");
			return $result;
		}
		
	}

?>