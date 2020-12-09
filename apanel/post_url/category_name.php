<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();	
	
	$cls_subcategory = new cls_subcategory();
	$div_id = "$_POST[rot_cat_id]";
	
	$ctrow = $cls_subcategory->get_category($div_id);
	
?>
<div id="">
<?php while($row = $data->fetch_assoc()) {?>
												 
<option value="<?php echo $row['id']; ?>"><?php echo $ctrow['root_cat_name']; ?></option>

<?php } ?>
</div>