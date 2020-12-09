<?php
		require_once('../functions/cls_dbconfig.php');
		function __autoload($classname){
			require_once("../functions/$classname.class.php");
		}
		$db = new cls_dbconfig();

	$cls_customer = new cls_customer();
	
	$country = "$_POST[para]";
	
	$result=$cls_customer->district_select($country);
?>
<option value="" selected>Select District</option>

	<?php while($row = $result->fetch_assoc()){ ?>
		<option value="<?php echo $row['id']; ?>"><?php echo $row['district']; ?></option>		
	<?php } ?>
	