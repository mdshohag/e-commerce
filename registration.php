<?php 

	include('include/header.php');

?>
<div class="container">
	<div class="full-page" style="padding-top: 2px;">
    <div class="single-product-area">
        <div class="zigzag-bottom"></div>
		<div class="container">
			<div class="row-row">
			<div class="col-md-8 col-md-offset-1">
			<h2 class="login-h2">Create an Account</h2>
			<hr>
			<h4 class="login-h4"><b>Personal Information</b></h4>
			<hr>
				<form class="form-horizontal" method="post" id="registration">
					<div class="form-group form-group-sm">
						<label class="col-md-3 control-label"  for="formGroupInputSmall">Full Name <span title="required" class="required">*</span></label>
						<div class="col-md-4">
						<input class="form-control" name="full_name" type="text" id="full_name" placeholder="First Name">
						</div>
					</div>
					<div class="form-group form-group-sm">
						<label class="col-md-3 control-label" for="formGroupInputSmall">Email Address <span title="required" class="required">*</span></label>
						<div class="col-md-4">
						<input class="form-control" name="email_name" type="email" class="textfield" id="email" placeholder="Email Address">
						</div>
					</div>
					
					<div class="form-group form-group-sm">
						<label class="col-md-3 control-label" for="formGroupInputSmall">Mobile NO <span title="required" class="required">*</span></label>
						<div class="col-md-4">
						<input class="form-control" name="mobile" type="text" id="mobile" placeholder="+880 " >
						
						</div>
					</div>
					
					
					<h4 class="login-h4"><b>Login Information</b></h4>
					<hr>
					<div class="form-group form-group-sm">
						<label class="col-md-3 control-label" for="formGroupInputSmall">Password <span title="required" class="required">*</span></label>
						<div class="col-md-4">
						<input class="form-control" name="password_u" type="password" id="password" placeholder="Password" >
						</div>
					</div>
					<div class="form-group form-group-sm">
						<label class="col-md-3 control-label" for="formGroupInputSmall">Confirm Password <span title="required" class="required">*</span></label>
						<div class="col-md-4">
						<input class="form-control" type="password" name="repassword" id="repassword" placeholder="Retype Password">
						</div>
					</div>
					<hr>
					<div class="form-group form-group-sm">
						<label class="col-md-2 control-label" for="formGroupInputSmall"></label>
						<div class="col-md-6">
						<input type="checkbox" name="terms" required value="terms"> I agree to the Terms of use and Privacy policy<br>
						</div>
					</div>
					
					<div class="form-group form-group-sm">
					<label class="col-md-2 control-label" for="formGroupInputSmall"></label>
						<div class="col-md-4">
						<input type="submit" name="save" class="btn btn-primary" value="Registration">
						</div>
					</div>
				</form>
			</div>
			<div class="col-md-2">
				<a href="login">Login</a>
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