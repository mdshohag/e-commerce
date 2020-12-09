<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	
	$cls_subcategory = new cls_subcategory();
	
	$div_id = "$_POST[para_id]";
	
	$result = $cls_subcategory->get_category($div_id);
	
?>

<?php while($rows = $result->fetch_assoc()){ ?>
 
  <option value="<?php echo $rows['id']; ?>"><?php echo $rows['cat_name']; ?></option>  
 <?php } ?>
