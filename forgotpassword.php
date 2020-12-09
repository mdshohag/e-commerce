<?php 
	include('include/header.php'); 
?>
<div class="container">
<div class="full-page" style="background-color:#FFFFFF;">
 <div class="maincontent-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
		 <div class="row-row">
			<div class="col-md-12">
				<div class="latest-product">
					<form class="form-horizontal" id="forgotpassword" method="post">
					 <fieldset>
					  <div class="form-group">
						<div class="col-md-7">
							<label for="inputEmail3" class="control-label lbl"><h2>Forgot Your Password?</h2></label>
							<label for="inputEmail3" class="control-label lbl"><p><b>Retrieve your password here</b></p></label>
							<label for="inputEmail3" class="control-label lbl"><p>Please enter your email address below. You will receive a link to reset your password.</p></label>	
							<label for="inputEmail3" class="control-label lbl"><h3>Email Address</h3></label>
						</div>
					  </div>
					  <div class="form-group">
						<div class="col-md-6">
						  <input type="email" name="email_name" class="form-control" id="mailuser" placeholder="Email" required>
						</div>
					  </div>
					  <div class="form-group">
							<div class="col-md-offset-4 col-md-4">
							<button type="submit" name="btn_pass" class="btn btn-success">Submit</button>
							</div>
						</div>
					   </fieldset>
					</form>	
				</div>	
			</div>	
		</div>	
        </div>
    </div> <!-- End main content area -->
    </div> 
    </div> 
<?php 
	include('include/footer.php'); 
?>