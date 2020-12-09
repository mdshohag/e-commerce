<?php
 include('include/header.php');
    if(!isset($_SESSION['admin_id'])){
       // echo "<script>alert('Session not found');</script>";
		echo "<script>location.href='index.php';</script>";
	}
   $orderid = $_GET['orderid'];
    $order_q = $cls_order->view_oderdetails($orderid);
    $order_r = $order_q->fetch_assoc();
    $or_total = $order_r['book_price'];
    $uniq_id = $order_r['uniq_id'];
    $or_totaldec = number_format($or_total, 2, '.', ',');
    $customer_id = $order_r['customer_id'];

    $cust_p = $cls_order->view_customer($customer_id);
     $cust_r = $cust_p->fetch_assoc();


 ?>
      <!--sidebar end-->

      <!--main content start-->
      <section id="main-content">
          <section class="wrapper">
              <!--overview start-->
			  <div class="row">
				<div class="col-lg-12">
					<h3 class="page-header"><i class="fa fa-laptop"></i> Dashboard</h3>
					<ol class="breadcrumb">
						<li><i class="fa fa-home"></i><a href="dashboard">Home</a></li>
						<li><i class="fa fa-laptop"></i>Product</li>
					</ol>
				</div>
			</div>



		<div class="row">
	     <div class="col-md-10 col-md-offset-1">
		 
		 
		 
		 
             <table width="100%" >
                <table width="100%" border="0" style="background-color: #FFFFFF;" align="center" cellpadding="0" cellspacing="0" class="shawdow">
                  <tr>
                    <td align="center" valign="middle">&nbsp;</td>
                  </tr>
                  <tr>
                    <td align="center" valign="middle">
                    <table width="99%" border="1" cellspacing="1" cellpadding="1" style="background:#ccc;">
                  <tr>
                    <td  height="40" align="left" valign="middle" bgcolor="#FFFFFF" class="game" style="padding-left:10px;">Order Information</td>
                    <td align="right" bgcolor="#FFFFFF" style="padding-right:10px;"><!--<a href="#order_pdf?ordrno=<?php //echo $order_r['uniq_id']; ?>" target="_blank"><input type="button" value="PDF Invoice" name="pf" class="print" /></a>&nbsp;&nbsp;&nbsp;&nbsp;-->
                    <a href="orderprint.php?orderid=<?php echo $orderid; ?>" target="_blank"><input type="button" value="Print" name="pf2" class="print" /></a></td>
                    </tr>
                  <tr>
                    <td rowspan="4" align="left" valign="middle" bgcolor="#FFFFFF" style="padding-left:7px;"><img src="img/Logo-Roselyn.jpg" height="50" /></td>
                    <td height="27" align="right" valign="middle" bgcolor="#FFFFFF" style="padding-right:10px;"><strong>Order # <?php echo $order_r['uniq_id']; ?></strong></td>
                    </tr>
                  <tr>
                    <td height="27" align="right" valign="middle" bgcolor="#FFFFFF" style="padding-right:10px;">Order Total: <?php echo $or_totaldec; ?></td>
                    </tr>
                  <tr>
                    <td height="27" align="right" valign="middle" bgcolor="#FFFFFF" style="padding-right:10px;">Order Date: <?php echo $order_r['status_date']; ?></td>
                    </tr>
                  <tr>
                    <td height="27" align="right" valign="middle" bgcolor="#FFFFFF" style="padding-right:10px;">Order Status: <?php echo $order_r['order_status']; ?></td>
                    </tr>
                </table>
                <br>
                <table width="99%" border="1" align="center" cellpadding="1" cellspacing="1" style="background:#ccc;">
                  <tr>
                    <td height="30" align="left" valign="middle" bgcolor="#FFFFFF" style="padding-left:15px;"><strong>Address</strong></td>
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
                <div align="left" style=" height:30px; padding-top:7px;"><strong>Products</strong></div>
                <table width="99%" border="1" align="center" cellpadding="1" cellspacing="1" style="background:#ccc;">
                  <tr class="tr_f">
                    <td height="30" align="center" valign="middle" bgcolor="#363435">SL</td>
                    <td align="center" valign="middle" bgcolor="#363435">Item Image</td>
                    <td align="center" valign="middle" bgcolor="#363435">Item Description</td>
                    <td align="center" valign="middle" bgcolor="#363435">Price</td>
                    <td align="center" valign="middle" bgcolor="#363435">Product Code</td>
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
                            $pcode = $book_r['pcode'];
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
                    <td height="30" align="center" valign="middle" bgcolor="#FFFFFF">0<?php echo $maisha++; ?></td>
                    <td align="center" valign="middle" bgcolor="#FFFFFF"><img src="title_image/<?php echo $book_image; ?>" width="60" height="68" /></td>
                    <td align="center" valign="middle" bgcolor="#FFFFFF"><?php echo $book_title;  //$editor_name; ?></td>
                    <td align="center" valign="middle" bgcolor="#FFFFFF"><?php echo $book_price; ?></td>
                    <td align="center" valign="middle" bgcolor="#FFFFFF"><?php echo $pcode; ?></td>
                    <td align="center" valign="middle" bgcolor="#FFFFFF"><?php echo $book_qty; ?></td>
                    <td align="center" valign="middle" bgcolor="#FFFFFF"><?php echo $subtotal_dec; ?></td>
                  </tr>
                  <?php
                        }
                    ?>
                </table>

                <table width="99%" border="0" cellspacing="1" cellpadding="1">
                  <tr>
                    <td height="30" align="right" valign="middle"><strong>Sub Total</strong></td>
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
                  <tr>
                    <td height="30" align="right" valign="middle"><input type="button" name="ba" value="Back" class="print" onClick="javascript:location.replace('processingOrder');"></td>
                    <td align="left" valign="middle">&nbsp;</td>
                  </tr>
                </table>
                <br>
                </td>
                  </tr>
                </table>
			</table>
            </div>

          </div>
              <!-- project team & activity end -->

          </section>
      </section>
      <!--main content end-->
  </section>
  <!-- container section start -->

<?php
include('include/footer.php');
?>