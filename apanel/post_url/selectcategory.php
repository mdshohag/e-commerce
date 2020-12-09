<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	
	$cls_subcategory = new cls_subcategory();
	
	$category = "$_POST[para]";
	$result = $cls_subcategory->get_category($category);
	
?>
<option value="" selected>Select</option>
<?php while($row = $result->fetch_assoc()){ ?>
 
  <option value="<?php echo $row['id']; ?>"><?php echo $row['cat_name']; ?></option>  
 <?php } ?>
