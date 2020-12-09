<?php

include('include/header.php');

if(!isset($_SESSION['customer_id'])){
    //echo "<script>alert('Session not found');</script>";
    echo "<script>location.href='../index.php';</script>";
}

//session_start();
// delete the uniq id value
unset($_SESSION["uniq_id"]);

$all = $cls_customer->view_customer_all($customer_id);
$cu_r = $all->fetch_assoc();

//order confirm//
$book_q1 = $cls_customer->view_temp_details($uniq_id);
//$chk = mysql_num_rows($book_q1);
$chk = $book_q1->num_rows;
if($chk == "" || $chk == 0)
{
    ?>

    <script language="javascript" type="text/javascript">
        location.replace('home.php');
    </script>
    <?php

}
while($r2 = $book_q1->fetch_assoc())
{
    $book_qty = $r2['book_qty'];
    $book_id = $r2['book_id'];
    $book_price = $r2['book_price'];
	$date = date('Y-m-d');
	$date_time = date('Y-m-d H:i:s');
    $order_in = $db->query("INSERT into tbl_order_details values ('', '$uniq_id', '$customer_id', '$book_id', '$book_price', '$book_qty', 'Processing', '$date', '$date_time', 'Cash On Delivery')");
}

// customer mail send
if(isset($customer_id)){

$q6 = $cls_customer->send_mail($customer_id);
//$r6 = $q6->fetch_assoc();
//$cust_email = $r6['email'];
$cust_email = $customer_id;

$subject = "Thank you for shopping with bioscopebd";

$message = "";
$message .= "\r\n";
$message .= "Thank you for shopping with bioscopebd.com, source of your products need.";
$message .= "\r\n";
$message .= "Click Here http://www.bioscopebd.com/myorder?order_id=" . $uniq_id . " to see your order details : ";
$message .= "\r\n";
$message .= "\r\n";
$message .= "\r\n";
$message .= "Please keep your Email and Password save.";
$message .= "\r\n";
$message .= "\r\n";
$message .= "Thanks and regards.";

$message .= "\r\n";
$message .= "\r\n";
$message .= "\r\n";
$message .= "Sales Department";
$message .= "\r\n";
$message .= "bioscopebd.com.";
$message .= "\r\n";
$message .= "Web: www.bioscopebd.com ";

$headers = "From: info@bioscopebd.com\n"; // From address
$headers .= "Organization: www.bioscopebd.com\n"; // Organisation

$mail_cust = mail($cust_email, $subject, $message, $headers);


$_SESSION['uniq_id'] = time();
}
//order confirm end
?>

<!--body section start-->
    <div class="container">
        <div class="full-page">
            <div class="single-cart-area">
                <div class="zigzag-bottom"></div>
                <div class="container">
                    <div class="row-row"><br>
                        <div class="col-md-8 col-md-offset-2" style="background:#FFFFFF;border:1px solid black">
                            <div class="col-md-3"><br>
                                <div style="padding:5px;background:#6A6A6A;color:#FFFFFF" >
                                    <span style="font-size:26px;"><strong>I</strong>nvoice</span><br> Order: <?php echo $uniq_id; ?>
                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="invoice_officeaddss" style="padding-top:7px;">
                                    <table width="400" border="0" cellspacing="1" cellpadding="1">
                                        <tr>
                                            <td colspan="2" align="left" valign="middle"><strong>bioscopebd.com</strong></td>
                                        </tr>
                                        <tr>
                                            <td height="20" align="left" valign="middle">Address:</td>
                                            <td width="270" align="left" valign="middle">uttara, Dhaka, Bangladesh</td>
                                        </tr>
                                        <tr>
                                            <td height="20" align="left" valign="middle">Phone Number:</td>
                                            <td align="left" valign="middle">+8801234-4567891</td>
                                        </tr>
                                        <tr>
                                            <td height="20" align="left" valign="middle">Email:</td>
                                            <td align="left" valign="middle">info@bioscopebd.com</td>
                                        </tr>
                                        <tr>
                                            <td height="20" align="left" valign="middle">Website:</td>
                                            <td align="left" valign="middle">www.bioscopebd.com/</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <!--sender information-->
                                <div class="invoice_sendrs" style="padding-top:10px;">
                                    <strong>Sender Information</strong><br>
                                    <div class="orstatusss">
                                        <strong>Name:</strong> &nbsp;&nbsp;<?php echo $cu_r['fullname']; ?><br>
                                        <strong>Phone:</strong> &nbsp;&nbsp;<?php echo $cu_r['mobile']; ?> <br>
                                        <strong>Email:</strong> &nbsp;&nbsp;<?php echo $customer_id; ?><br>

                                        <strong>Order Date:</strong> <?php echo date('d-m-Y',strtotime($date));?><br>
                                        <strong>Status:</strong> &nbsp;&nbsp;Pending<br>
                                        <strong>Delivery Method:</strong> Cash on Delivery<br><br><br>
                                    </div>
                                </div>
                            </div>
                            <!--sender information end here-->
                            <div class="col-md-6">
                                <!--shipping information-->
                                <div class="invoice_shipinfos" style="padding-top:10px;">
                                    <strong>Shipping Address</strong><br>
                                    <div class="orstatus">
                                        <strong>Address:</strong> &nbsp;&nbsp;<?php echo $cu_r['delivery_address']; ?><br>
                                        <strong>Country:</strong> &nbsp;&nbsp;<?php echo $cu_r['country_name']; ?><br>
                                        <strong>City:</strong> &nbsp;&nbsp;<?php echo $cu_r['district']; ?><br>
                                        <strong>Area:</strong> &nbsp;&nbsp;<?php echo $cu_r['thana'];; ?>
                                    </div>
                                </div>
                                <!--shipping information end here-->
                            </div>


                            <!--order details-->

                            <table border="0" cellspacing="1" cellpadding="1" style="background:#ccc; ">
                                <tr class="tr_fs">
                                    <td  height="25" align="center" valign="middle">SL</td>
                                    <td  align="center" valign="middle" >Type</td>
                                    <td align="center" valign="middle">Item Description</td>
                                    <td align="center" valign="middle" >Status</td>
                                    <td align="center" valign="middle">Price</td>
                                    <td align="center" valign="middle">Quantity</td>
                                    <td align="center" valign="middle">Subtotal</td>
                                </tr>
                                <?php
                                $maisha = 1; $subtotal = 0; $grand_total = 0; $shipping_chrg = 50;
                                $orde_q = $cls_customer->view_tbl_order_details($uniq_id);
                                $ttlsub = 0.00;
                                while($order_r = $orde_q->fetch_assoc())
                                {
                                    $book_qty1 = $order_r['book_qty'];
                                    $book_id1 = $order_r['book_id'];
                                    $book_price1 = $order_r['book_price'];
                                    $order_status = $order_r['order_status'];

                                    $book_price_decimal = number_format($book_price1, 2, '.', ',');

                                    $book_q = $cls_customer->view_book_details($book_id1);
                                    $book_r = $book_q->fetch_assoc();

                                    $book_title = $book_r['title'];
                                    $book_image = $book_r['image'];
                                    $book_editor = $book_r['editor'];

                                    //editor name
                                    // $edm = mysql_query("select cat_name from category WHERE id = '$book_editor'");
                                    //$edr = mysql_fetch_array($edm);
                                    // $editor_name = $edr[0];

                                    //sub total
                                    $subtotal = $book_qty1 * $book_price1;
                                    $subtotal_decimal = number_format($subtotal, 2, '.', ',');

                                    //total sub total
                                    $ttlsub = $ttlsub + $subtotal;
                                    $ttlsub_decimal = number_format($ttlsub, 2, '.', ',');

                                    //grand total
                                    $grand_total = $shipping_chrg + $ttlsub;
                                    $grand_total_decimal = number_format($grand_total, 2, '.', ',');
                                    ?>

                                    <tr>
                                        <td height="25" align="center" valign="middle" bgcolor="#FFFFFF"><?php echo $maisha++; ?></td>
                                        <td align="center" valign="middle" bgcolor="#FFFFFF"><?php echo 'cloting' ?></td>
                                        <td align="center" valign="middle" bgcolor="#FFFFFF"><?php if(!empty($book_title)) { ?><?php echo $book_title; } ?></td>
                                        <td align="center" valign="middle" bgcolor="#FFFFFF"><?php if(!empty($order_status)) { ?><?php echo $order_status; } ?></td>
                                        <td align="center" valign="middle" bgcolor="#FFFFFF"><?php if(!empty($book_price1)) { ?><?php echo $book_price1; } ?></td>
                                        <td align="center" valign="middle" bgcolor="#FFFFFF"><?php if(!empty($book_qty1)) { ?><?php echo $book_qty1; } ?></td>
                                        <td align="center" valign="middle" bgcolor="#FFFFFF"><?php if(!empty($subtotal_decimal)) { ?><?php echo $subtotal_decimal; } ?></td>
                                    </tr>
                                    <?php
                                }
                                ?>
                                <tr>
                                    <td colspan="5" rowspan="4" align="center" valign="middle" bgcolor="#FFFFFF">&nbsp;</td>
                                    <td height="25" align="center" valign="middle" bgcolor="#FFFFFF">Sub Total</td>
                                    <td align="center" valign="middle" bgcolor="#FFFFFF"><?php if(!empty($ttlsub_decimal)) { ?><?php echo $ttlsub_decimal; } ?></td>
                                </tr>
                                <tr>
                                    <td height="25" align="center" valign="middle" bgcolor="#FFFFFF">Shipping</td>
                                    <td align="center" valign="middle" bgcolor="#FFFFFF"><?php echo $shipping_chrg; ?></td>
                                </tr>
                                <tr class="tr_fs">
                                    <td height="25" align="center" valign="middle" ><strong>Grand Total</strong></td>
                                    <td align="center" valign="middle"><strong>
                                            <?php if(!empty($grand_total_decimal)) { ?>
                                                <?php echo $grand_total_decimal; } ?></strong></td>
                                </tr>

                            </table>

                            <br>
                            <div class="invoice_slogans">Thank you for shopping with us!!</div><br>



                            <!--order details end here-->


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<!--body section end here-->

<?php
include('include/footer.php');

?>