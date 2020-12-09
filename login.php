<?php 
	include('include/header.php');
	
	
?>
<div class="container">
	<div class="full-page" style="padding-top: 2px;">
    <div class="single-product-area">
        <div class="zigzag-bottom"></div>
		<div class="container">
			<div class="row-row">
			<div class="col-md-6">
			<h2 class="login-h2">Login or Create an Account</h2>
			<h4 class="login-h3">New Customers</h4>
			<p class="login-p">By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
			<div class="form-group form-group-sm">
					<label class="col-md-5 control-label" id="create" for="formGroupInputSmall"><a href="registration">CREATE AN ACCOUNT</a></label>
						<div class="col-md-1">
						
						</div>
					</div>
			</div>
			<div class="col-md-6">
			
			<h4 class="loginh3">Registered Customers</h4>
			<p class="login-p">If you have an account with us, please log in.</p>
			<hr>
				<form class="form-horizontal" id="cuslogin">
					<div class="form-group form-group-sm">
						<label class="col-md-3 control-label" for="formGroupInputSmall">Email Address <span title="required" class="required">*</span></label>
						<div class="col-md-6">
						<input class="form-control" type="email" name="email" id="email_log" placeholder="Email Address">
						</div>
					</div>
					<div class="form-group form-group-sm">
						<label class="col-md-3 control-label" for="formGroupInputSmall">Password <span title="required" class="required">*</span></label>
						<div class="col-md-6">
						<input class="form-control"  type="Password" name="password" id="password_log" placeholder="Password">
						</div>
					</div>
					<div class="form-group form-group-sm">
					<label class="col-md-4 control-label" id="Forgot" for="formGroupInputSmall"><a href="forgotpassword">Forgot Your Password?</a></label>
						<div class="col-md-4">
						<input type="submit" class="btn btn-primary" name="save" value="Login"/>
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