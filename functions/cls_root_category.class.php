<?php
	class cls_root_category{
		public function con(){
			$connect = new cls_dbconfig();
			return $connect->connection();
		}
		public function all_view_data_root(){
			$result = $this->con()->query("SELECT * from root_category where status = 'Yes' order by id asc");
			return $result;
		}
		public function view_data_root(){
			$result = $this->con()->query("SELECT * from root_category where status = 'Yes' order by id asc");
			return $result;
		}
		public function view_data_cat_all($root_cat_all_id){
			$result = $this->con()->query("SELECT * from category where root_cat_id='$root_cat_all_id'");
			return $result;
		}
		public function view_data_cat_alls(){

			$result = $this->con()->query("SELECT * from category where status = 'Yes' order by id asc");
			return $result;

		}
		public function view_data_cat($root_cat_id){
			$result = $this->con()->query("SELECT * from category where root_cat_id='$root_cat_id'");
			return $result;
		}
		public function view_data_sub($cate_id){
			$result = $this->con()->query("SELECT * from sub_category where cat_id='$cate_id'");
			return $result;
		}
		
		public function product_view_id($bookid){
			$result = $this->con()->query("SELECT * FROM book WHERE id='$bookid'");
			return $result;
			
		}
		public function product_view_by_id($root_cat,$cat){
			$result = $this->con()->query("SELECT * FROM book WHERE rootcat_id='$root_cat' and 	cat_id='$cat'");
			return $result;
		}
		public function book_page_view_image($product_id){
			$result = $this->con()->query("SELECT * FROM image_product where product_id='$product_id' LIMIT 0,1 ");
			return $result;
		}
		
		public function book_page_view_image_all($img){
			$result = $this->con()->query("SELECT * FROM image_product where product_id='$img' LIMIT 0,3 ");
			return $result;
		}
	}		
?>
