<?php 
	include('include/header.php');
	
	$prottyp = $cls_all_product->view_producttype();
	$view_all_slider = $cls_slider->view_slider();
	
?>
	<div class="container">
	<div class="full-page" style="padding-top: 2px;">
	<div class="slider-area" style="padding-top: 1px;">
		<div class="container">
			<div class="col-md-9" style="padding-left:0px;">
				<div class="slider-area" style="padding-bottom: 0px;margin-left: 12px;">
        	<!-- Slider -->
			<div class="block-slider block-slider4">
				<ul class="" id="bxslider-home4">
					<?php 
					while($result=$view_all_slider->fetch_assoc()){
						?>
						
					<li>
					
						<img src="apanel/slider/<?php echo $result['image_name'];?>" alt="Slide">
					</li>
					<?php
					}
				?>
				</ul>
			</div>
			<!-- ./Slider -->
    </div> <!-- End slider area -->
	</div><!-- End col-md-8-->
	 <div class="col-md-3" style="padding-left:0px;">
		 <div style="padding-left:0px;">
			 <img src="img/needhelpfinal.png" style="height:210px;width:85%;"/>
			 <div class="fb-page"
				  data-href="https://www.facebook.com/Hafsa-BD-660010164149205"
				  data-width="230"
				  data-height="220"
				  data-hide-cover="false"
				  data-show-facepile="true"
				  data-show-posts="false">

			 </div>
		 </div>
	 </div>
</div><!-- end container-->
</div>

	<div class="maincontent-area" style="padding-top: 0px;">
		<div class="zigzag-bottom"></div>
		<div class="container">
			<?php
			while($pr_typ = $prottyp->fetch_assoc())
			{
				$typId = $pr_typ['id'];
				?>
				<div class="row">

					<h2 class="section-title" style="color:#FFFFFF;padding-left:20px;"><?php echo $pr_typ['typename']; ?></h2>


					<?php
					$data_row = $cls_all_product->view_all_product($typId);

					while($view_pro = $data_row->fetch_assoc())

					{
						$bid = $view_pro['id'];

						?>

						<div class="col-md-3" style="padding-left:3px;padding-right:35px;padding-bottom:15px;">
							<div class="single-product" style="border:1px solid #ffd6cc;padding-bottom:8px;">
								<div class="product-f-image" style="height:235px" >
									<img src="apanel/title_image/<?php echo $view_pro['image']; ?>" style="height:100%;width:98%" alt="">
									<div class="product-hover">
										<a href="single-product/book_id/<?php echo $bid; ?>" class="add-to-cart-link"><i class="fa fa-shopping-cart"></i> Add to cart</a>
										<a href="single-product/book_id/<?php echo $bid; ?>" class="view-details-link"><i class="fa fa-link"></i> See details</a>
									</div>
								</div>

								<h2 style="font-weight: bold;font-size:14px;color:#FFFFFF;"><a href="single-product/book_id/<?php echo $bid; ?>"><?php echo $view_pro['title'];?></a></h2>

								<div class="product-carousel-price" >
									<ins style="color: #208000;font-size: 13px;font-weight: bold;"><?php echo 'TK.'. $view_pro['price'];?></ins>
								</div>
							</div>

						</div>
						<?php
					}
					?>
				</div>
				<?php
			}
			?>
		</div>

	</div> <!-- End main content area -->
	</div>
	</div>
<?php
	include('include/footer.php');

 ?>