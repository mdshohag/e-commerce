<?php
	include('include/header.php'); 
	
	$cust_id = $_GET['oi'];
	$data = $cls_customer->view_customer_data($cust_id);
	$rot_row = $data->fetch_assoc();
	$cust_all = $rot_row['email'];

	$add = $cls_customer->view_customer_all($cust_all);
	$add_row = $add->fetch_assoc();

	$country = $cls_customer->view_country();
	$district = $cls_customer->view_district();
	$thana = $cls_customer->view_thana();
	
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
		
			<div class="span1_of_1_dess">
			<div class="desc1d">
				<h2>My Account</h2>
				<ul class="nav nav-tabs" style="background-color:#005C86;">
				<li><a data-toggle="tab" href="#home" style="color:#B6D440;"><b>Personal Information</b></a></li>
				<li><a data-toggle="tab" href="#menu1" style="color:#B6D440;"><b>Change Password</b></a></li>
				</ul>
				<div class="tab-content">
				<div id="home" class="tab-pane fade in active" style="padding:17px;">
				<br>
					<form class="form-horizontal" method="post" id="update_reg">
					<div class="form-group form-group-sm">
						<label class="col-md-3 control-label"  for="formGroupInputSmall">Full Name</label>
						<div class="col-md-5">
						 <input type="hidden" value="<?php echo $rot_row['id']; ?>" name="customer_id">
						<input class="form-control" name="full_name" type="text" id="full_name" value="<?php echo $rot_row['fullname']; ?>">
						</div>
					</div>
					<div class="form-group form-group-sm">
						<label class="col-md-3 control-label"  for="formGroupInputSmall">Gender</label>
						<div class="col-md-5">
						 <select class="form-control" name="gender">
						 <option value="" >Select </option>
							  <option value="<?php echo $rot_row['gender']; ?>" selected><?php echo $rot_row['gender']; ?></option>
							  
							  <option value="Male">Male </option>
							  <option value="Female">Female </option>
						</select>
						</div>
					</div>
					<div class="form-group form-group-sm">
						<label class="col-md-3 control-label" for="formGroupInputSmall">Mobile No </label>
						<div class="col-md-5">
						<input class="form-control" name="mobile" type="text" class="textfield" value="<?php echo $rot_row['mobile']; ?>">
						</div>
					</div>
					<div class="form-group form-group-sm">
						<label class="col-md-3 control-label" for="formGroupInputSmall">Alternate Phone </label>
						<div class="col-md-5">
						<input class="form-control" name="altmobile" type="text" value="<?php echo $rot_row['alternate_phn']; ?>" class="textfield" >
						</div>
					</div>
					
					<div class="form-group form-group-sm">
						<label class="col-md-3 control-label" for="formGroupInputSmall">Country</label>
						<div class="col-md-5">
							<select class="form-control" name="country_name">
							  <option value="" >Select </option>
							 
							   <?php 
								while($row = $country->fetch_assoc()){
									$counId = $row['id']; 
			                        $country_name = $row['country_name'];
									?>
									
                           <option <?php if($counId==$rot_row['country']) { ?> selected <?php } ?> value="<?php echo $counId; ?>"><?php if(!empty($country_name)) { ?><?php echo $country_name; } ?></option>									
								
								<?php
								}
								?>
							</select>
						
						</div>
					</div>
					<div class="form-group form-group-sm">
						<label class="col-md-3 control-label" for="formGroupInputSmall">City/District</label>
						<div class="col-md-5">
							<select class="form-control" id="xyz" name="city_name">
								<option value="" >Select </option>
								<option value="<?php echo $rot_row['city']; ?>" selected ><?php echo $add_row['district']; ?> </option>
								<!--<?php
								//while($dist_row = $district->fetch_assoc()){
									//$dis_id1 = $dist_row['id'];
		                         //  $districtt = $dist_row['district'];
									?>
									<option <?php //if($dis_id1==$rot_row['city']) { ?> selected <?php// } ?> value="<?php //echo $dis_id1; ?>"><?php// if(!empty($districtt)) { ?><?php// echo $districtt; } ?></option>

								<?php
								//}
								?>-->
							</select>
						</div>
					</div>
					<div class="form-group form-group-sm">
						<label class="col-md-3 control-label" for="formGroupInputSmall">Area/Thana</label>
						<div class="col-md-5">
							<select class="form-control" name="thana_name" id="thana_id">
								<option value="" >Select </option>
								<option value="<?php echo $rot_row['area']; ?>" selected><?php echo $add_row['thana']; ?> </option>
							   <?php
								//while($thana_row = $thana->fetch_assoc()){
									//$thnid = $thana_row['id'];
									//$thname = $thana_row['thana'];
									?>
								<!-- <option <?php //if($thnid==$rot_row['area']) { ?> selected <?php// } ?> value="<?php// echo $thnid; ?>"><?php// if(!empty($thname)) { ?><?php //echo $thname; } ?></option>-->

								<?php
								//}
								?>
							</select>
						</div>
					</div>
					<div class="form-group form-group-md">
						<label class="col-md-3 control-label" for="formGroupInputSmall">Delivery Address</label>
						<div class="col-sm-5">
						<textarea name="delivery" class="form-control" rows="2"><?php echo $rot_row['delivery_address']; ?></textarea>						
						</div>
					</div>
					<div class="form-group form-group-sm">
					<label class="col-md-3 control-label" for="formGroupInputSmall"></label>
						<div class="col-md-5">
						
						<input type="submit" name="save" class="btn btn-primary" value="Update"> <!-- onClick="javascript:location.replace('payment.php');" -->
						</div>
					</div>
				</form>
				</div>
				<div id="menu1" class="tab-pane fade" style="padding:17px;">
					  <br>
					  <form class="form-horizontal" method="post" id="pass">
						<div class="form-group form-group-sm">
							
							<label class="col-md-3 control-label"  for="formGroupInputSmall">Old Password</label>
							<div class="col-md-5">
							<input type="hidden" value="<?php echo $rot_row['email']; ?>" name="customer_id">
							 <input class="form-control" name="old_password" type="password" id="old_password" placeholder="Old Password" >
							</div>
						</div>
						<div class="form-group form-group-sm">
							<label class="col-md-3 control-label"  for="formGroupInputSmall">New Password</label>
							<div class="col-md-5">
							
							 <input class="form-control" name="new_password" type="password" id="new_password" placeholder="New Password">
							</div>
						</div>
						<div class="form-group form-group-sm">
							<label class="col-md-3 control-label"  for="formGroupInputSmall">Retype New Password</label>
							<div class="col-md-5">
							 <input class="form-control" name="retype_pass" type="password" class="textfield" id="retype_pass" placeholder="Retype New Password">
							</div>
						</div>
						<div class="form-group form-group-sm">
							<label class="col-md-3 control-label" for="formGroupInputSmall"></label>
							<div class="col-md-5">
								<input type="submit" name="save" class="btn btn-primary" value="Change"> 
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
    </div>  
    </div>
    </div>

<?php
include('include/footer.php'); 

?>
  