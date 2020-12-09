<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	$db = new cls_dbconfig();
	
	$cls_district = new cls_district();
	
	$country = "$_POST[para]";
	
	$result=$cls_district->district_select($country);
?>
	<?php while($row = $result->fetch_assoc()){ ?>
		<option value="<?php echo $row['id']; ?>"><?php echo $row['district']; ?></option>		
	<?php } ?>
	