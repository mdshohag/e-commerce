<?php
	class cls_subcategory{
		public function con(){
			$connect = new cls_dbconfig();
			return $connect->connection();
		}
		
		public function get_category($div_id){
			$result = $this->con()->query("SELECT * FROM category where root_cat_id = '$div_id'");
			return $result;
		}
		
		
		public function sub_data_insert($root_name,$cate_name,$subcategory_name,$status){
			
			$cdate=date('Y-m-d');
			$tdate = date('Y-m-d H:i:s');
			
			$result = $this->con()->query("INSERT INTO sub_category (rootcat_id,cat_id,subcat_name,status,date,date_time)VALUES('$root_name','$cate_name','$subcategory_name','$status','$cdate','$tdate')");
			return $result;
		}
		
		public function sub_category_view(){
			$result = $this->con()->query("SELECT sub_category.*, root_category.root_cat_name,category.cat_name FROM sub_category JOIN root_category ON sub_category.rootcat_id=root_category.id JOIN category ON sub_category.cat_id=category.id");
			return $result;
		}
		
		public function subcat_update_by_id($update_id){
			$result = $this->con()->query("SELECT sub_category.*, root_category.root_cat_name,category.cat_name FROM sub_category JOIN root_category ON sub_category.rootcat_id=root_category.id JOIN category ON sub_category.cat_id=category.id and sub_category.id='$update_id'");
			return $result;
		}
		
		public function update_subcategory($cate_name_id,$category_name_id,$subcategory_name,$status,$id){
			$result = $this->con()->query("UPDATE sub_category SET rootcat_id='$cate_name_id',cat_id='$category_name_id',subcat_name='$subcategory_name',status='$status' WHERE id='$id'");
			return $result;
		}
		public function subcategory_delete($sub_id){
			$result = $this->con()->query("DELETE FROM sub_category WHERE id='$sub_id'");
			return $result;
		}
	}

?>