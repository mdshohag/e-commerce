<?php
	include('include/header.php'); 
	
	if(!isset($_SESSION['customer_id'])){
		//echo "<script>alert('Session not found');</script>";
		echo "<script>location.href='../index.php';</script>";
	}
	
?>

<div class="container">
	<div class="full-page">
    <div class="single-cart-area">
        <div class="zigzag-bottom"></div>
		<div class="container">
			<div class="row-row">
			<center><h2>Payment Method</h2></center>
			<div class="col-md-2">
			<p>Oder Summary</p>
			</div>
			<div class="col-md-6 col-md-offset-1">
		
			<div class="span1_of_1_dess">
				<form method="post" action="codinvoice" >

					<div class="desc1d">


					<ul class="nav nav-tabs">
					<li class="active"><a data-toggle="tab" href="#home"><img src="img/Cash-Payment-hover.png" style="height:60px;" /><br>
					<center><input type="radio" name="cash" value="terms"/></center>
					</a></li>
					<li><a data-toggle="tab" href="#menu1"><img src="img/Card-Payment-hover.png" style="height:60px;" /><br>
					<center><input type="radio" name="ccard" value="terms"/></center>
					</a></li>
					<li><a data-toggle="tab" href="#menu2"><img src="img/bKash-hover.png" style="height:60px;" /><br>
					<center><input type="radio" name="bikash" value="terms"/></a></li></center>
					</ul>
					<div class="tab-content">
					<div id="home" class="tab-pane fade in active" style="padding:10px;"><br>
					<p>Amount payable at Delivery: <span style="color:red;">.00Tk</span></p>
					<p>Payment System: <b>Cash on Delivery (COD)</b></p>
					<input type="checkbox" name="terms" required value="terms"> I agree to the Terms of use
					</div>
							<div id="menu1" class="tab-pane fade" style="padding:17px;">
							  <br>
							<h3>Card Payment</h3>
							</div>
							<div id="menu2" class="tab-pane fade" style="padding:17px;">
							  <h3>Bikash</h3>

							</div>
						  </div>
					</div>
					<div class="form-group form-group-sm">

						<div class="col-md-6">
						<input type="submit" name="save"  onClick="javascript:location.replace('shipping');" class="btn btn-primary" value="Back">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<input type="submit" name="save" class="btn btn-warning" value="Confirm Order">
						</div>
					</div>
				</form>
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
  