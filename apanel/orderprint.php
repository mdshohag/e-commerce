<?php
  require_once('functions/cls_dbconfig.php');
  function __autoload($classname){
    require_once("functions/$classname.class.php");
  }
  $cls_order = new cls_order();

 $orderid = htmlspecialchars($_REQUEST['orderid'], ENT_QUOTES, 'UTF-8');
    //$orderid = $_GET['orderid'];
    $order_q = $cls_order->view_oderdetails($orderid);
    $order_r = $order_q->fetch_assoc();
    $or_total = $order_r['book_price'];
    $uniq_id = $order_r['uniq_id'];
    $or_totaldec = number_format($or_total, 2, '.', ',');
    $customer_id = $order_r['customer_id'];

    $cust_p = $cls_order->view_customer($customer_id);
    $cust_r = $cust_p->fetch_assoc();
?>
<meta charset="utf-8">
<style type="text/css">
.tr_f{ color:#fff; font-size:12px; text-transform:uppercase !important;}
</style>
<table width="980" border="0" align="center" cellpadding="0" cellspacing="0" class="shawdow">
  <tr>
    <td align="center" valign="middle">&nbsp;</td>
  </tr>
  <tr>
    <td align="center" valign="middle">
    <table width="895" border="0" cellspacing="1" cellpadding="1" style="background:#ccc;">
  
  <tr>
    <td rowspan="4" align="left" valign="middle" bgcolor="#FFFFFF" style="padding-left:7px;"><img src="img/Logo-Roselyn.jpg" height="50" /></td>
    <td height="27" align="right" valign="middle" bgcolor="#FFFFFF"><strong>Order # <?php echo $order_r['uniq_id']; ?></strong></td>
    </tr>
  <tr>
    <td height="27" align="right" valign="middle" bgcolor="#FFFFFF">Order Total: <?php echo $or_totaldec; ?></td>
    </tr>
  <tr>
    <td height="27" align="right" valign="middle" bgcolor="#FFFFFF">Order Date: <?php echo $order_r['status_date']; ?></td>
    </tr>
  <tr>
    <td height="27" align="right" valign="middle" bgcolor="#FFFFFF">Order Status: <?php echo $order_r['order_status']; ?></td>
    </tr>
</table>
<br>
<table width="895" border="0" align="center" cellpadding="1" cellspacing="1" style="background:#ccc;">
  <tr>
    <td width="734" height="30" align="left" valign="middle" bgcolor="#FFFFFF" style="padding-left:15px;"><strong>Address</strong></td>
    <td width="154" align="left" valign="middle" bgcolor="#FFFFFF">&nbsp; <strong>Payment Method</strong></td>
  </tr>
  <tr>
    <td height="30" align="left" valign="middle" bgcolor="#FFFFFF"style="padding-left:15px;"><?php echo $cust_r['fullname']; ?></td>
    <td align="left" valign="middle" bgcolor="#FFFFFF">&nbsp; <?php echo $order_r['order_from']; ?></td>
  </tr>
  <tr>
    <td height="30" align="left" valign="middle" bgcolor="#FFFFFF" style="padding-left:15px;"><?php echo $cust_r['email']; ?></td>
    <td align="left" valign="middle" bgcolor="#FFFFFF">&nbsp;</td>
  </tr>
  <tr>
    <td height="30" align="left" valign="middle" bgcolor="#FFFFFF" style="padding-left:15px;"><?php echo $cust_r['mobile']; ?></td>
    <td align="left" valign="middle" bgcolor="#FFFFFF">&nbsp;</td>
  </tr>
  <tr>
    <td height="30" align="left" valign="middle" bgcolor="#FFFFFF" style="padding-left:15px;"><?php echo $cust_r['delivery_address']; ?></td>
    <td align="left" valign="middle" bgcolor="#FFFFFF">&nbsp;</td>
  </tr>
  <tr>
    <td height="30" align="left" valign="middle" bgcolor="#FFFFFF" style="padding-left:15px;"><?php echo $cust_r['country_name'] .', '.$cust_r['district'] .', '. $cust_r['thana']; ?></td>
    <td align="left" valign="middle" bgcolor="#FFFFFF">&nbsp;</td>
  </tr>
</table>
<div align="left" style="width:895px; height:30px; padding-top:7px;"><strong>Products</strong></div>
<table width="895" border="0" align="center" cellpadding="1" cellspacing="1" style="background:#ccc;">
  <tr class="tr_f">
    <td height="30" align="center" valign="middle" bgcolor="#363435">SL</td>
    <td align="center" valign="middle" bgcolor="#363435">Item Image</td>
    <td align="center" valign="middle" bgcolor="#363435">Item Description</td>
    <td align="center" valign="middle" bgcolor="#363435">Price</td>
    <td align="center" valign="middle" bgcolor="#363435">Quantity</td>
    <td align="center" valign="middle" bgcolor="#363435">Subtotal</td>
  </tr>
  <?php
  $maisha = 1; $ttlsub = 0; $shipping = 50; $grandtotal = 0;

  $pro_q = $cls_order->view_temp_details($uniq_id);
  while($pro_r = $pro_q->fetch_assoc())
  {
    $book = $pro_r['book_id'];
    $book_qty = $pro_r['book_qty'];
    $book_price = $pro_r['book_price'];

    //item info
    $book_q = $cls_order->view_book_p($book);
    $book_r = $book_q->fetch_assoc();

    $book_title = $book_r['title'];
    $book_image = $book_r['image'];
    $book_editor = $book_r['editor'];

    //editor name
    $edm = $cls_order->view_category($book_editor);
    $edr = $edm->fetch_assoc();
    $editor_name = $edr[0];

    //sub total
    $subtotal = $book_qty * $book_price;
    $subtotal_dec = number_format($subtotal, 2, '.', ',');

    //total sub total
    $ttlsub = $ttlsub + $subtotal;
    $ttlsub_dec = number_format($ttlsub, 2, '.', ',');

    //grand total
    $grandtotal = $shipping + $ttlsub;
    $grandtotal_dec = number_format($grandtotal, 2, '.', ',');
  ?>
  <tr>
    <td height="30" align="center" valign="middle" bgcolor="#FFFFFF"><?php if($maisha<=9) echo '0'; echo $maisha++; ?></td>
    <td align="center" valign="middle" bgcolor="#FFFFFF"><?php if(!empty($book_image)) { ?><img src="title_image/<?php echo $book_image; ?>" width="60" height="68" /><?php } ?></td>
    <td align="center" valign="middle" bgcolor="#FFFFFF"><?php echo $book_title; ?></td>
    <td align="center" valign="middle" bgcolor="#FFFFFF"><?php echo $book_price; ?></td>
    <td align="center" valign="middle" bgcolor="#FFFFFF"><?php echo $book_qty; ?></td>
    <td align="center" valign="middle" bgcolor="#FFFFFF"><?php echo $subtotal_dec; ?></td>
  </tr>
  <?php
		}
	?>
</table>

<table width="895" border="0" cellspacing="1" cellpadding="1">
  <tr>
    <td width="771" height="30" align="right" valign="middle"><strong>Sub Total</strong></td>
    <td width="117" align="left" valign="middle">&nbsp; <?php echo $ttlsub_dec; ?> Tk</td>
  </tr>
  <tr>
    <td height="30" align="right" valign="middle"><strong>Shipping</strong></td>
    <td align="left" valign="middle">&nbsp; <?php echo $shipping; ?> Tk</td>
  </tr>
  <tr>
    <td height="30" align="right" valign="middle"><strong>Grand Total</strong></td>
    <td align="left" valign="middle">&nbsp; <?php echo $grandtotal_dec; ?> TK</td>
  </tr>
</table>
<br>
</td>
  </tr>
</table>
<script type="text/javascript">
window.print();
</script>