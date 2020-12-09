<?php
	include('include/header.php'); 
	
	//session_start();
	//session_destroy();
	//$uniq_id = $_SESSION['uniq_id'];
	
	//$customer_id = $_SESSION['customer_id'];
	$mbookId = null;
	if(isset($uniq_id)){
		
	$mb_q = $cls_additem->select_temp($uniq_id);
	
	$mb_r = $mb_q->fetch_assoc();
	$mbookId = $mb_r['book_id'];
	
	}
	
	if(!isset($_SESSION['customer_id'])){
		echo "<script>location.href='../index.php';</script>";
	}
	
?>
<div class="container">
	<div class="full-page">
    <div class="single-cart-area">
        <div class="zigzag-bottom"></div>
		<div class="container">
			<div class="row">
			<div class="col-sm-12 col-md-10 col-md-offset-1"><br>
			<h3><b>Your Shopping Cart</b></h3>
			<?php
					if(!empty($mbookId))
					{
				?>
				<div class="table-responsive">
				<table class="table table-hover">
					<thead>
						<tr>
						   <th>SL</th>
							<th>ITEM</th>
							<th>QTY</th>
							<th>Unit Price</th>
							<th>Total</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
					<?php 
						$sl = 1; $subtotal = 0; $ttlsub = 0; $total = 0; $shipping_chr = 50;
						
						$scart_q = $cls_additem->select_quntity($uniq_id);
						
						while($scart_r = $scart_q->fetch_array())
							
							{
								
							$mbook_id = $scart_r[0];
							$mbook_qty = $scart_r[1];
							$mbook_price = $scart_r[2];
							
							//sub total//
							$subtotal = $mbook_price*$mbook_qty;
							$sub_total_decimal = number_format($subtotal, 2, '.', ',');
							
							//total sub total//
							$ttlsub = $ttlsub + $subtotal;
							$ttlsub_dc = number_format($ttlsub, 2, '.', ',');
							
							//total tk//
							$total = $ttlsub + $shipping_chr;
							$total_dc = number_format($total, 2, '.', ',');
							
							
							$mbookinfo_q = $cls_additem->select_book_id($mbook_id);
							
							$mbookinfo_r = $mbookinfo_q->fetch_assoc();
							
							$mbimage = $mbookinfo_r['image'];
							$mbtitle = $mbookinfo_r['title'];
							$mbeditor = $mbookinfo_r['terms_condition'];
										
							//editor name//
							$edn_q = $cls_additem->select_category_name($mbeditor);
							$redm = $edn_q->fetch_array();
							$edname = $redm[0];
							
						?>
						<tr>
						<td class="col-sm-1 col-md-1" style="text-align: center"><?php echo $sl++; ?></td>
							<td class="col-sm-8 col-md-5">
							<div class="media">
								<a class="thumbnail pull-left" href="#"> <img class="media-object" src="../apanel/title_image/<?php echo  $mbimage; ?>" style="width: 72px; height: 72px;"> </a>
								<div class="media-body">
									<h5 class="media-heading"><?php echo $mbtitle; ?></h5>
								   <!-- <h5 class="media-heading"> by <a href="#">Brand name</a></h5>
									<span>Status: </span><span class="text-success"><strong>In Stock</strong></span>-->
								</div>
							</div></td>
							<td class="col-sm-1 col-md-1" style="text-align: center">
							<?php echo $mbook_qty; ?>
							</td>
							<td class="col-sm-1 col-md-1 text-center"><strong>Tk:<?php echo $mbook_price; ?></strong></td>
							<td class="col-sm-1 col-md-1 text-center"><strong>TK:<?php echo $sub_total_decimal; ?></strong></td>
							<td class="col-sm-1 col-md-1">
							<button type="button" class="btn btn-danger pt_del" dataid="<?php echo $mbook_id; ?>,<?php echo $uniq_id; ?>">
								<span class="glyphicon glyphicon-remove"></span> Remove
							</button></td>
						</tr>
							<?php } ?>
						
						<tr>
							<td>   </td>
							<td>   </td>
							<td>   </td>
							<td><h5>Subtotal</h5></td>
							<td class="text-right"><h5><strong> TK. <?php echo $ttlsub_dc; ?></strong></h5></td>
							<td>   </td>
						</tr> 
						<tr>
							<td>   </td>
							<td>   </td>
							<td>   </td>
						   <td><h5>Shipping</h5></td>
							<td class="text-right"><h5><strong>TK. <?php echo $shipping_chr; ?></strong></h5></td>
							<td>   </td>
						</tr>
					   
						<tr>
							<td>   </td>
							<td>   </td>
							<td>   </td>
							<td><h3>Total</h3></td>
							<td class="text-right"><h4><strong>TK. <?php if(!empty($total_dc)) { ?><?php echo $total_dc; }?></strong></h4></td>
							 <td>   </td>
						</tr>
						<tr>
							<td>   </td>
							<td>   </td>
							<td>   </td>
							<td>
							<button type="button" class="btn btn-warning" onClick="javascript:location.replace('home');" name="bt">
								<span class="glyphicon glyphicon-shopping-cart"></span> Continue Shopping
							</button></td>
							<td>
							<button type="button" class="btn btn-success" onClick="javascript:location.replace('shipping/confirm_id/<?php echo md5($customer_id); ?>');" name="bt">
								Place Order <span class="glyphicon glyphicon-play"></span>
							</button></td>
							 <td>   </td>
						</tr>
					</tbody>
				</table>
				</div>
				<?php
					} else {
					?>
					<div align="center" style="width:660px; margin:auto; font-size:24px; height:100px; border:1px solid #ccc; border-radius:4px;">Your Shopping cart Empty!!
					<?php echo $mbookId;?>
					
					</div>
					<?php
					}
					?>
			</div>
		</div>
		</div>
    </div>  
</div>
</div>
</div>
<?php
include('include/footer.php'); 

?>
  