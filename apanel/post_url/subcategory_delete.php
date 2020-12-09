<?php
require_once('../functions/cls_dbconfig.php');
function __autoload($classname){
    require_once("../functions/$classname.class.php");
}


$db = new cls_dbconfig();

$cls_subcategory = new cls_subcategory();

$sub_id = "$_POST[subcategory]";

echo $result = $cls_subcategory->subcategory_delete($sub_id);

?>