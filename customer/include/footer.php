<?php

$view_data_cat_all = $cls_root_category->view_data_cat_alls();
?>
<div class="container">
	<div class="product-widget-area" style="background-color: #ffffff;">
        <div class="zigzag-bottom"></div>
			<div class="container">
			<div class="row-row">
			<div class="col-md-4">
			<h1 style="color:#F7941E"> Payment Method</h1>
			</div>
			<div class="col-md-8">
			<img src="images/paymentsystems.jpg" alt=""/>
			</div>
			</div>
			
		</div>
      </div>
      </div>

    <div class="footer-top-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
		<div class="col-md-12">
				<img src="images/footermiddle.png" alt=""/>
				<hr>
			</div>
            <div class="row-row">
                <div class="col-md-3 col-sm-6">
                    <div class="footer-about-us">
                        <h2><span>Al Jadeed Fashion</span></h2>
                        <p>Since more than 20 years of consistent hard work and sincerity in the production of our cosmetics, we are able to create a strong network. With highly professional integrity we are capable enough in updating our products along with the packaging, to meet the current requirement of the market.</p>
                        <div class="footer-social">
                            <a href="https://www.facebook.com/Hafsa-BD-660010164149205/?fref=ts" target="_blank"><i class="fa fa-facebook"></i></a>
                            <a href="#" target="_blank"><i class="fa fa-twitter"></i></a>
                            <a href="#" target="_blank"><i class="fa fa-youtube"></i></a>
                            <a href="#" target="_blank"><i class="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-3 col-sm-6">
                    <div class="footer-menu">
                        <h2 class="footer-wid-title">User Navigation </h2>
                        <ul>
                            <li><a href="#">My account</a></li>
                            <li><a href="#">Order history</a></li>
                            <li><a href="#">Wishlist</a></li>
                            <li><a href="#">Vendor contact</a></li>
                            <li><a href="#">Front page</a></li>
                        </ul>                        
                    </div>
                </div>
                
                <div class="col-md-3 col-sm-6">
                    <div class="footer-menu">
                        <h2 class="footer-wid-title">Categories</h2>
                        <ul>
							<?php while($root_cat = $view_data_cat_all->fetch_assoc()){
								$cate_id = $root_cat['id'];
								?>
								<li><a href="categories/root_cat/<?php echo 1; ?>/cat/<?php echo $cate_id; ?>"><?php echo $root_cat['cat_name']; ?> </a></li>
							<?php } ?>
                        </ul>                        
                    </div>
                </div>
                
                <div class="col-md-3 col-sm-6">
                    <div class="footer-newsletter">
						<h2 class="footer-wid-title">Contact Us</h2>
						<p class="footer-wid-p"><i class="fa fa-phone"></i> 04 2724569</p>
                        <h2 class="footer-wid-title">Newsletter</h2>
                        <p class="footer-wid-p">Sign up to our newsletter and get exclusive deals you wont find anywhere else straight to your inbox!</p>
                        <div class="newsletter-form">
                            <form action="#">
                                <input type="email" placeholder="Type your email">
                                <input type="submit" value="Subscribe">
                            </form>
                        </div>
                    </div>
					
                </div>
				
            </div>
			
        </div>
    </div> <!-- End footer top area -->
    
    <div class="footer-bottom-area">
        <div class="container">

            <div class="row-row">
                <div class="col-md-12">
                    <div class="copyright">
                        <p>&copy; 2016 bioscopebd. All Rights Reserved. <a href="http://dcitltd.com/"  style="color:#F50A35;" target="_blank">Dhaka CentreNIC IT</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div> <!-- End footer bottom area -->
	
 </div>
</div>
</div>
</div>
  <!-- <a id="scrollTop" href="#">
            <img class="img-responsive" src="images/up.png" alt="">
        </a>

	-->
<script type="text/javascript" src="header/js/conversion.js">
</script>
    <!-- Latest jQuery form server -->
    <script src="https://code.jquery.com/jquery.min.js"></script>
    
    <!-- Bootstrap JS form CDN -->
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    
    <!-- jQuery sticky menu -->
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/jquery.sticky.js"></script>
    
    <!-- jQuery easing -->
    <script src="js/jquery.easing.1.3.min.js"></script>
   
    
    <!-- Main Script -->
    <script src="js/main.js"></script>
    
    <!-- Slider -->
    <script type="text/javascript" src="js/bxslider.min.js"></script>
	<script type="text/javascript" src="js/script.slider.js"></script>
	
	<!-- add cart javaScript -->
	<script language="javascript" type="text/javascript" src="js/ajax_function.js"></script>
	<script src="alert/alertify.min.js"></script>
	
	<script>
	$(function(){
		$(".pt_del").click(function(){
			var id=$(this).attr('dataid');
			//alert(id);
			strx   = id.split(',');
           array  = [];
           array = array.concat(strx);
		   var mbook_id = array[0];
		   var uniq_id = array[1];
		 //  alert(array[1]);
			//return false;
			var confirm = alertify.confirm('Are you sure to Delete this Item from the list?').set('onok', function(closeEvent){  
			
			 var dataString ='uniq_id='+uniq_id+'&mbook_id='+mbook_id;
				//alert(id);
		 
					$.ajax({
						type:"post",
						url:"post_url/remove_item.php",
						data:dataString,
						success:function(res){
							 
									 location.href='shoppingcart';
								 
						},error:function(){
							alert('Error on Ajax');
						}     
					})
			 
			
			} );
			confirm.set({'title':'Remove Item'});
		});
		
	});
 
</script>	
	<script>
	$(function(){
		$("#cuslogin").submit(function(e){
			e.preventDefault();
			
				var email = $('[name="email"]').val();
				var password = $('[name="password"]').val();
			
			if(email == ""){
				alertify.error('Email field is empty');
				return false;
			}		
			
			if(password == ""){
				alertify.error('Password field is empty');
				return false;
			}		
			
			$.ajax({
					type:"post",
					url:"post_url/cus_login.php",
					data:new FormData(this),
					contentType: false,
					cache:false,
					processData:false,
					success:function(res){
					//alert(res);
					//return false;
					
					if(res == 'no'){
						alertify.error('Username or Password does not match !!');
						return false;
					}else{
					location.href='customer/home.php';
					}
				}
			})
			
		});
	});
	</script>
	<script>
	$("#update_reg").submit(function(e){
		e.preventDefault();
		
		//var update_reg = $('[name="customer_id"]').val();
		//alert(update_reg);
		//return false;
		var full_name = $('[name="full_name"]').val();
		var gender = $('[name="gender"]').val();
		var mobile = $('[name="mobile"]').val();
		var country_name = $('[name="country_name"]').val();
		var city_name = $('[name="city_name"]').val();
		var thana_name = $('[name="thana_name"]').val();
		var delivery = $('[name="delivery"]').val();
		
		if(full_name == ""){
				alertify.error('Name field is empty');
				return false;
			}
		if(gender == ""){
				alertify.error('Select gender Name');
				return false;
			}
		if(mobile == ""){
				alertify.error('Input Mobile Number');
				return false;
			}
		if(country_name == ""){
				alertify.error('Select Country Name');
				return false;
			}
		if(city_name == ""){
				alertify.error('Select City Name');
				return false;
			}
		if(thana_name == ""){
				alertify.error('Select Thana Name');
				return false;
			}
		if(delivery == ""){
				alertify.error('Please entry Delivery Address');
				return false;
			}
			
		$.ajax({
			type:"post",   
			url:"post_url/shipping.php",
			data:new FormData(this),
			contentType:false,
			cache:false,
			processData:false,
			success: function(res){
				//alert(res);
				//return false;
				
				if(res == 1){
					alertify.success("Successfully");
					location.href='payment';
				}else{
					alertify.error("Category not updated !!");
				}
			},error: function(){
				alertify.error("Error on Ajax !!");
			}          
		})		
		
	})
	</script>

<script type="text/javascript">
	$(function(){

		$('[name="country_name"]').on('change',function(e){
			e.preventDefault();
			//alert('dlkjls');
			//return false;
			var country = $('[name="country_name"]').val();
			//alert(country);
			//return false;
			if(country == ""){
				alertify.error('Select Country name');
				return false;
			}
			var dataString ='para='+country;
			$.ajax({
				type:"post",
				url:"post_url/selectdistrict.php",
				data:dataString,
				success:function(res){
					//$("#xyz").empty();
					$("#xyz").html(res);
				},error:function(){
					alert('Error on Ajax');
				}
			})
		});
	})
</script>
<script type="text/javascript">
	$(function(){

		$('[name="city_name"]').on('change',function(e){
			e.preventDefault();

			var thana_name = $('[name="city_name"]').val();


			var dataString ='para_thana_name='+thana_name;
			// alert(dataString);
			//return false;
			$.ajax({
				type:"post",
				url:"post_url/selectthana_name.php",
				data:dataString,
				success:function(res){
					//alert(res);
					//return false;
					//$("#xyz").empty();
					$("#thana_id").html(res);
				},error:function(){
					alert('Error on Ajax');
				}
			})
		});
	})
</script>
	<script>
	$(function(){
		$("#pass").submit(function(e){
			e.preventDefault();
			
			var old_password = $('[name="old_password"]').val();
			var new_password = $('[name="new_password"]').val();
			var retype_pass = $('[name="retype_pass"]').val();

			
			if(old_password == ""){
				alertify.error('old password field is empty');
				return false;
			}	
			
			
			
			if(new_password == ""){
				alertify.error('New password field is empty');
				return false;
			}
			if(retype_pass == ""){
				alertify.error('retype password field is empty');
				return false;
			}
			if(new_password != retype_pass) {
						alertify.error("New Password and Retype password do not match"); 
						return false;
					}
			
			$.ajax({
					type:"post",
					url:"post_url/pass_change.php",
					data:new FormData(this),
					contentType: false,
					cache:false,
					processData:false,
					success:function(res){
						if(res==1){

							$('[name="old_password"]').val("");
							$('[name="new_password"]').val("");
							$('[name="retype_pass"]').val("");

							alertify.success("Successfully");
						//	window.location.reload();


						//location.href='customer/myaccount.php';
					}else{
							$('[name="old_password"]').val("");
							$('[name="new_password"]').val("");
							$('[name="retype_pass"]').val("");
							alertify.error('old Password does not match !!');

							//return false;
					}
				}
			})
			
		});
	});
	</script>
	
	<script>
	$(function(){
		$("#signout").click(function(e){
			e.preventDefault();
			//alert('ok');
			$.ajax({
				type:'post',
				url:'post_url/signout.php',
				success:function(res){
					//alert(res);
					if(res == '1'){
						location.href='../index';
					}else{
						alertify.error('Error on Logout');
					}
				}
			})
		});
	})
	</script>
	<script>
	$(function(){
		$("#signouts").click(function(e){
			e.preventDefault();
			//alert('ok');
			$.ajax({
				type:'post',
				url:'post_url/signout.php',
				success:function(res){
					//alert(res);
					if(res == '1'){
						location.href='../index';
					}else{
						alertify.error('Error on Logout');
					}
				}
			})
		});
	})
	</script>
	
  </body>
</html>