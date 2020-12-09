<?php
	include('include/header.php'); 
	
	if(!isset($_SESSION['customer_id'])){
		//echo "<script>alert('Session not found');</script>";
		echo "<script>location.href='../index.php';</script>";
	}
	
	$custm_id = $_GET['oi'];
	$order_row = $cls_customer->view_my_order($custm_id);
	
	$sl= 1;
?>

<div class="container">
	<div class="full-page">
    <div class="single-cart-area">
        <div class="zigzag-bottom"></div>
		<div class="container">
			<div class="row-row">
			<div class="col-md-3">
			<div class="list-group">
				  <a  class="list-group-item active">
					Profile
				  </a>
				  <a href="myaccount/oi/<?php echo md5($emmm['email']);?>" class="list-group-item">My Account</a>
				  <a href="myorder/oi/<?php echo md5($emmm['email']);?>" class="list-group-item">My Order</a>
				  <a href="shoppingcart" class="list-group-item">My Cart</a>
				 <a href="#" class="list-group-item"><b><span id="signouts">Log Out</span></b></a>
			</div>
			</div>
			<div class="col-md-9">
					<table>
						<tr>
							<th>SL</th>
							<th>Order NO</th>
							<th>Image</th>
							<th>Quantity</th>
							<th>Price</th>
						</tr>
						
						<?php while($row = $order_row->fetch_assoc()){
								$oi_id = $row['order_id'];
							
								$pro_q = $cls_customer->view_image($oi_id);
								$pro_r = $pro_q->fetch_assoc();
								$f = $pro_r['image'];
							
						?>
								<tr>
									<td><?php echo $sl++; ?></td>
									<td><?php echo $row['uniq_id']; ?></td>
									<td><img src="../apanel/title_image/<?php echo $f; ?>" style="height:80px;width:60%;"></td>
									<td><?php echo $row['book_qty']; ?></td>
									<td><?php echo$row['book_price']; ?> .Tk</td>
									
								</tr>
									
						<?php } ?>
					</table>
					
			</div>
			</div>
		</div>
    </div>  
    </div>
    </div>

<?php
include('include/footer.php'); 

?>
  