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
						<p class="footer-wid-p"><i class="fa fa-phone"></i> 04 2724569 </p>
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
                        <p>&copy; 2016 bioscopebd. All Rights Reserved. <a href="http://dcitltd.com/" style="color:#F50A35;" target="_blank">Dhaka CentreNIC IT</a></p>
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
        </a>-->


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
	<script src="apanel/alert/alertify.min.js"></script>
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
	
	<script type="text/javascript">
		$(function(){
			
			$("#registration").submit(function(e){
				e.preventDefault();
				
				var full_name = $('[name="full_name"]').val();
				var email = $('[name="email_name"]').val();
				var mobile = $('[name="mobile"]').val();
				var password = $('[name="password_u"]').val();
				var repassword = $('[name="repassword"]').val();
				
				
				if(full_name == ""){
						alertify.error('Please Enter  Full name');
						return false;
					}
					
					if(email == ""){
						alertify.error('Please Enter email');
						return false;
					}
					if(mobile == ""){
						alertify.error('Please Enter mobile');
						return false;
					}
					if(mobile.length < 11) {
						alertify.error("Mobile Number at least 11 Character"); 
						return false;
					}
					if(password == ""){
						alertify.error('Please Enter password');
						return false;
					}
					
				
					if(repassword == ""){
						alertify.error('Please Enter repassword');
						return false;
					}
						if(password != repassword) {
						alertify.error("Password and Retype password do not match"); 
						return false;
					}
				$.ajax({
					type:"post",
					url:"post_url/registration.php",
					data:new FormData(this),
					contentType: false,
					cache:false,
					processData:false,
					success:function(res){
						
						if(res == 1){
							alertify.success('Success');
							
							location.href='login.php';
							
						}else if(res == 2){
							alertify.error('Exist Email');
						}else if(res == 3){
							alertify.error('Exist Mobile Number');
						}else{
							alertify.error('Not inserted');
						}
					
					  
					},error:function(){
						alert('Error on Ajax');
					}     
				})
			});
		})
	</script>
	<script>
	$(function(){
		$("#cuslogin").submit(function(e){
			e.preventDefault();
			
				var email = $('#email_log').val();
				var password = $('#password_log').val();
			
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
					}
					location.href='customer/home';
				}
			})
			
		});
	});
	</script>
	<script>
	$(function(){
		$("#cuslogins").submit(function(e){
			e.preventDefault();
			
				var email = $('#mini-login').val();
				var password = $('#mini-password').val();
			
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
						alertify.error('User Email or Password does not match !!');
						return false;
					}
					location.href='customer/home';
				}
			})
			
		});
	});
	</script>
<script>
	$(function(){
		$("#forgotpassword").submit(function(e){
			e.preventDefault();

			var mail =$("#mailuser").val();
			// alert(mail);

			$.ajax({
				type: "POST",
				url: "post_url/forgotpassword.php",
				data: {email_name: mail},
				dataType: 'json',
				success:function(res){

					//alert(res.id);
					//alert(res);
					//return false;

					//if(res){
					//alertify.error('error');
					//}else{
					//'done';
					//}
					if(res == '1'){
						location.href='index';
					}
				}

				})
			})
		});

</script>

  </body>
</html>