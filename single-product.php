<?php
include('include/header.php');

$bookid = htmlspecialchars($_REQUEST['book_id'], ENT_QUOTES, 'UTF-8');



$pro = $cls_root_category->product_view_id($bookid);

$data_row = $pro->fetch_assoc();

$product_id = $data_row['id'];
$price = $data_row['price'];
$btitile = $data_row['title'];


?>

	<div class="container">
		<div class="full-page">
			<div class="container" >
				<div class="row">
					<div class="col-md-12" style="padding-top:25px;width:;">
						<div class="span_1_of_left" style="padding-left:-5px;">
							<div class="grid images_3_of_2">
								<div class="flexslider">
									<!-- FlexSlider -->
									<script src="js/imagezoom.js"></script>
									<script defer src="js/jquery.flexslider.js"></script>
									<link rel="stylesheet" href="css/flexslider.css" type="text/css" media="screen" />

									<script>
										// Can also be used with $(document).ready()
										$(window).load(function() {
											$('.flexslider').flexslider({
												animation: "slide",
												controlNav: "thumbnails"
											});
										});
									</script>
									<!-- //FlexSlider-->
									<ul class="slides">
										<?php

										$img = $data_row['id'];

										$data_img = $cls_root_category->book_page_view_image_all($img);

										while($imag = $data_img->fetch_assoc()){



											?>

											<li data-thumb="apanel/uploaded/<?php echo $imag['photo']; ?>">
												<div class="thumb-image"> <img src="apanel/uploaded/<?php echo $imag['photo']; ?>" data-imagezoom="apanel/uploaded/<?php echo $imag['photo']; ?>" class="img-responsive"> </div>
											</li>

										<?php } ?>
									</ul>
									<div class="clearfix"></div>
								</div>
							</div>
						</div>
						<!-- start span1_of_1 -->
						<div class="span1_of_1_des" style="padding-right:15px;">
							<div class="desc1">
								<h2 style="color:#222;text-transform: uppercase; font-family: Arial, Helvetica, sans-serif;font-size:20px;"><?php echo $data_row['title']; ?></h2>
								<p style="color:#222;">
									<?php $rr = $data_row['book_summary']; echo substr($rr,0,90); ?>...<span style=" visibility: hidden;">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</span>
								</p>

								<div class="available" >
									<h4 style="font-family:Times New Roman;color:#222;"> Please entry quntity:</h4>
									<ul>
										<li><b>Product Code:</b>
											<span style="text-transform: uppercase;"><?php echo $data_row['pcode']; ?></span>
										</li>
										<li><b>Weight:</b>
											<span style=""><?php echo $data_row['weight']; ?></span>
										</li>
										<li><b>Quantity:</b>
											<input type="text" style="width:60px;height:30px;border:1px solid #555555;padding-left:5px;color:#222" onkeypress="return OnlyNumberKeys(event);" name="quantity" id="quantity">
										</li>
										<li>
											<button class="btn btn-info blue-btn" type="submit" title="Buy Now" onClick="add_book_cart(<?php echo $product_id; ?>, <?php echo $price; ?>,'<?php echo $btitile; ?>');">Buy Now</button>
										</li>
									</ul>

									<span class="span_right"><h2 style="text-align:center;color:#222"><b class="price">৳ <?php echo $data_row['price']; ?></b></h2></span>
									<div class="clearfix"></div>
								</div>
								<h2 style="color:#222">Products Detials</h2>
								<ul class="nav nav-tabs" style="background-color:#005C86;">
									<li class="active"><a data-toggle="tab" href="#home">Product Feature</a></li>
									<li><a data-toggle="tab" href="#menu1">Terms Condition</a></li>

								</ul>

								<div class="tab-content">
									<div id="home" class="tab-pane fade in active" style="padding:17px;">
										<br>
										<p style=" font-family: Georgia, serif; font-size:17px;line-height:25px;text-align: justify;color:#222"><?php echo $data_row['book_summary']; ?></p>
									</div>
									<div id="menu1" class="tab-pane fade" style="padding:17px;">
										<br>
										<p style=" font-family: Georgia, serif; font-size:17px;line-height:25px;text-align: justify;color:#222"> <?php echo $data_row['terms_condition']; ?></p>
									</div>
								</div>
							</div>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
			</div>
		</div>
	</div>

<?php
include('include/footer.php');
?>