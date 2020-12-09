<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	
	$cls_productmanage = new cls_productmanage();
	
	$subcategory = "$_POST[para_subcat]";
	$result = $cls_productmanage->get_subcategory($subcategory);
	
?>
<option value="" selected>Select</option>
<?php while($row = $result->fetch_assoc()){ ?>
 
  <option value="<?php echo $row['id']; ?>"><?php echo $row['subcat_name']; ?></option>  
 <?php } ?>
