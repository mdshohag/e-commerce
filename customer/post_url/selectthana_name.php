<?php
        require_once('../functions/cls_dbconfig.php');
        function __autoload($classname){
            require_once("../functions/$classname.class.php");
        }
        $db = new cls_dbconfig();

        $cls_customer = new cls_customer();

$thana_s = "$_POST[para_thana_name]";

$result = $cls_customer->get_subcategory($thana_s);

?>
<option value="" selected>select Area/Thana</option>

<?php while($row = $result->fetch_assoc()){ ?>

    <option value="<?php echo $row['id']; ?>"><?php echo $row['thana']; ?></option>
<?php } ?>
