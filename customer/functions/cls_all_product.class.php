<?php
	class cls_all_product{
		public function con(){
			$connect = new cls_dbconfig();
			return $connect->connection();
		}
		
		public function view_producttype(){
			$result = $this->con()->query("SELECT * FROM producttype WHERE status='YES' order by id ASC limit 0, 20");
			return $result;
		}
		
		public function view_all_product($typId){
			$result = $this->con()->query("SELECT * FROM book WHERE pro_type = '$typId' order by id DESC");
			return $result;
		}
	}
?>