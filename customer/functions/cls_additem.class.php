<?php

	class cls_additem{
		public function con(){
			$connect = new cls_dbconfig();
			return $connect->connection();
		}
		
		
	//	public function product_additem($additem){
		//	$result = $this->con()->query("SELECT * FROM book WHERE id='$additem'");
		//	return $result;
	//	}
	
		public function select_user_id($customer_id){
			$result = $this->con()->query("select * from registration where email = '$customer_id'");
			return $result;
		}
		
		
		
		public function pro_view_image_all($img){
			$result = $this->con()->query("SELECT * FROM image_product where product_id='$img' LIMIT 0,1 ");
			return $result;
		}
		
		public function insert_unique($customer_id,$uniq_id,$date_time){
			
				
						$result = $this->con()->query("insert into temp_order values('', '$customer_id', '$uniq_id', '$date_time')");
						
						return $result;
 
		}
		public function select_book_qty($customer_id,$uniq_id,$Bookid){
				$result = $this->con()->query("select book_qty from temp_details where temp_id = '$uniq_id'  and book_id = '$Bookid'");
				return $result;
			}
			
		public function insert_temp_details($uniq_id,$customer_id,$Bookid,$bqt,$Bprice){
			$result = $this->con()->query("insert into temp_details values('$uniq_id', '$customer_id', '$Bookid', '$bqt', '$Bprice')");	
			return $result;
			}
			
		public function update_quntity($bqt,$uniq_id,$Bookid){
			$result = $this->con()->query("update temp_details set book_qty = '$bqt'  where temp_id = '$uniq_id' and book_id = '$Bookid'");
			return $result;
		}
		
		public function select_temp($uniq_id){
			$result = $this->con()->query("select book_id from temp_details where temp_id = '$uniq_id'");
			return $result;
			}
		
		public function select_quntity($uniq_id){
			$result = $this->con()->query("select book_id, book_qty, book_price from temp_details WHERE temp_id = '$uniq_id'");
			return $result;
			}
		
		public function select_book_id($mbook_id){
			$result = $this->con()->query("select * from book where id = '$mbook_id'");
			return $result;
		}
		public function select_category_name($mbeditor){
			$result = $this->con()->query("select cat_name from category WHERE id = '$mbeditor'");
			return $result;
		}
		
		public function add_item($uniq_id){
			$result = $this->con()->query("select book_id from temp_details where temp_id = '$uniq_id'");
			return $result;
		}
		public function select_temp_details_sum($uniq_id){
			$result = $this->con()->query("select sum(book_qty) from temp_details where temp_id = '$uniq_id'");
			return $result;
		}
		public function select_book_id_book_qty($uniq_id){
			$result = $this->con()->query("select book_id, book_qty, book_price from temp_details where temp_id = '$uniq_id'");
			return $result;
		}
		public function select_title_book_image($book_id){
			$result = $this->con()->query("select title, image, editor from book where id = '$book_id'");
			return $result;
		}
		public function select_cat_name($editor){
			$result = $this->con()->query("select cat_name from category WHERE id = '$editor'");
			return $result;
		}
		
			public function remove_item($uniq_id,$mbook_id){
			$result = $this->con()->query("delete from temp_details where temp_id = '$uniq_id' and book_id = '$mbook_id'");
			return $result;
		}
		
	}		
?>
