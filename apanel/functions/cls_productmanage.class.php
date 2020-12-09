<?php
	class cls_productmanage{
		public function con(){
			$connect = new cls_dbconfig();
			return $connect->connection();
		}
		
		public function view_rootcategory(){
			$result = $this->con()->query("SELECT * from root_category");
			return $result;
		}
		
		public function get_category($div_id){
			$result = $this->con()->query("SELECT * FROM category where root_cat_id = '$div_id'");
			return $result;
		}
		public function get_subcategory($div_sub){
			$result = $this->con()->query("SELECT * FROM sub_category where cat_id = '$div_sub'");
			return $result;
		}
		public function view_producttype(){
			$result = $this->con()->query("SELECT * from producttype");
			return $result;
		}
		
		public function insert_product($root_name,$category_name,$subcate_name,$product_type,$title,$pcode,$pic,$quntity,$weight,$price,$discount,$editor1,$termscon){
			
			$r = rand(1111,9999);
			$n = "$r.jpg";
		   
			if($pic != ""){
			$source_file = $pic;
			$destination = "../title_image/".$n;
			move_uploaded_file($source_file,$destination);
		   }
			
			$result = $this->con()->query("INSERT INTO book(rootcat_id,cat_id,subcat_id,pro_type,title,pcode,quantity,price,discount_price,image,weight,book_summary,terms_condition)VALUES('$root_name','$category_name','$subcate_name','$product_type','$title','$pcode','$quntity','$price','$discount','$n','$weight','$editor1','$termscon')");
			return $result;
		}
		public function image_insert($pic){
			
            //Make sure we have a filepath
            if($pic != ""){
				
				$r = rand('1111','9999');
				$n = "$r.jpg";
				
				$filePath = "../uploaded/$n";
				
                if(move_uploaded_file($pic, $filePath)) {
					
					$res = $this->con()->query("SELECT MAX(id) as maxid FROM book");
					
					$row= $res->fetch_assoc();
					$c = $row['maxid'];
					
					$res = $this->con()->query("SELECT id FROM book where id='$c'");
					$rows = $res->fetch_assoc();
					$pcode = $rows['id'];
					
					
					$resultt = $this->con()->query("INSERT INTO image_product(product_id,photo)VALUES('$pcode','$n')");
					return $resultt;

					
              
			}
			
		 }
		}
		
		public function product_view(){
			$result = $this->con()->query("SELECT book.*, root_category.root_cat_name,category.cat_name,sub_category.subcat_name FROM book JOIN root_category ON book.rootcat_id=root_category.id JOIN category ON book.cat_id=category.id JOIN sub_category ON book.subcat_id=sub_category.id ");
			return $result;
		}
		public function book_page_view_image($product_id){
			$result = $this->con()->query("SELECT * FROM image_product where product_id='$product_id' LIMIT 0,3 ");
			return $result;
		}
		public function product_view_by_id($update_id){
			$result = $this->con()->query("SELECT book.*, root_category.root_cat_name,category.cat_name,sub_category.subcat_name,producttype.typename,image_product.photo FROM book JOIN root_category ON book.rootcat_id=root_category.id JOIN category ON book.cat_id=category.id JOIN sub_category ON book.subcat_id=sub_category.id JOIN producttype ON book.pro_type=producttype.id JOIN image_product ON book.id=image_product.product_id WHERE book.id='$update_id'");
			return $result;
		}
		
		
		public function update_product($root_name,$category_name,$subcate_name,$product_type,$title,$pcode,$pic,$quntity,$weight,$price,$discount,$editor,$termscon,$id){
			
			$check_img_name = $this->con()->query("SELECT image FROM book WHERE id = '$id'");
			$img = $check_img_name->fetch_assoc();
			$img_name = $img['image'];
			
			if($pic != ""){
				$source = $pic;
				$destination = "../title_image/".$img_name;
				move_uploaded_file($source,$destination);
				
				$result=$this->con()->query("UPDATE book SET rootcat_id='$root_name', cat_id='$category_name', subcat_id='$subcate_name', pro_type='$product_type', title='$title', pcode='$pcode', image='$img_name', quantity='$quntity', weight='$weight', price='$price',  discount='$discount', book_summary='$editor', terms_condition='$termscon' WHERE id='$id'");
				return $result;				
			}else{
				$result = $this->con()->query("UPDATE book SET rootcat_id='$root_name', cat_id='$category_name', subcat_id='$subcate_name', pro_type='$product_type', title='$title', pcode='$pcode', quantity='$quntity', weight='$weight', price='$price',  discount='$discount', book_summary='$editor', terms_condition='$termscon' WHERE id='$id'");
				return $result;				
			}
		}
		
			public function image_update($id){
				$p = $this->con()->query("select product_id from image_product where id = '$id'");
				return $p;
			}
			
			public function view_image_update($img_id){
				$imge = $this->con()->query("SELECT photo FROM image_product WHERE id='$img_id'");
				return $imge;
			}
				
		public function update_photo($photo,$photo_id){
						
			$check_img_name = $this->con()->query("SELECT photo FROM image_product WHERE id = '$photo_id'");
			$img = $check_img_name->fetch_assoc();
			$img_name = $img['photo'];
			
			if($photo != ""){
				$source = $photo;
				$destination = "../uploaded/".$img_name;
				move_uploaded_file($source,$destination);
				
				$result=$this->con()->query("UPDATE image_product SET photo='$img_name' where id ='$photo_id'");
				return $result;				
			}else{
				$result = $this->con()->query("UPDATE image_product where and id ='$photo_id'");
				return $result;				
			}
		}
		public function del_image($photo_id){
			$result = $this->con()->query("DELETE FROM image_product WHERE id = '$photo_id'");
			return $result;
		}
		public function get_image($photo_id){
			$result = $this->con()->query("select photo from image_product where id = '$photo_id'");
			$row = $result->fetch_assoc();
			return "$row[photo]";
		}
	}

?>