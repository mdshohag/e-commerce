<?php
include('include/header.php');

$root_cat = $_GET['root_cat'];
$cat = $_GET['cat'];

$pro_data = $cls_root_category->product_view_by_id($root_cat,$cat);

if(!isset($_SESSION['customer_id'])){
	//echo "<script>alert('Session not found');</script>";
	echo "<script>location.href='../index.php';</script>";
}

?>
	<div class="container">
		<div class="full-page">
			<div class="maincontent-area">
				<div class="zigzag-bottom"></div>
				<div class="container">
					<div class="row">
						<?php while($row = $pro_data->fetch_assoc()){

							$pro_id = $row['id'];




							?>

							<div  class="col-md-3" style="padding-left:3px;padding-right:32px;padding-bottom:15px;">
								<div class="single-product"  style="border:1px solid #ffd6cc;padding-bottom:8px;">
									<div class="product-f-image" style="height:235px">
										<?php
										$img = $cls_root_category->book_page_view_image($pro_id);

										$row_img = $img->fetch_assoc();


										?>

										<img src="../apanel/uploaded/<?php echo $row_img['photo']; ?>" style="height:88%;width:98%;">

										<?php //} ?>

										<div class="product-hover">
											<a href="single-product/book_id/<?php echo $pro_id; ?>" class="add-to-cart-link"><i class="fa fa-shopping-cart"></i> Add to cart</a>
											<a href="single-product/book_id/<?php echo $pro_id;?>" class="view-details-link"><i class="fa fa-link"></i> See details</a>
										</div>
									</div>

									<h2 style="font-weight: bold;font-size:14px;color:#FFFFFF;"><a href="single-product/book_id/<?php echo $pro_id; ?>" ><?php echo $row['title']; ?></a></h2>

									<div class="product-carousel-price">
										<ins style="color: #208000;font-size: 13px;font-weight: bold;"><?php echo $row['price']; ?>.Tk</ins>
									</div>
								</div>
							</div>
						<?php } ?>

					</div>


				</div>
			</div> <!-- End main content area -->
		</div>
	</div>
<?php
include('include/footer.php');
?>