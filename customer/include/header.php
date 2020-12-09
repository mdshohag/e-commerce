<?php
	require_once('functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("functions/$classname.class.php");
	}

    $cls_dbconfig = new cls_dbconfig();
    $db = $cls_dbconfig->connection();
	$cls_root_category = new cls_root_category();
	$cls_additem = new cls_additem();
	$cls_slider = new cls_slider();
	$cls_all_product = new cls_all_product();
	$cls_registration = new cls_registration();
	$cls_customer_login = new cls_customer_login();
	$cls_customer = new cls_customer();
	
	$all_root_data = $cls_root_category->all_view_data_root();
	$root_data = $cls_root_category->view_data_root();
	
?>
<?php
		session_start();
		if(isset($_SESSION['uniq_id']))
		{
		$uniq_id = $_SESSION['uniq_id'];	
		$customer_id = $_SESSION['customer_id'];
		
		$maisha_q = $cls_additem->add_item($uniq_id);
		
		$rana_r = $maisha_q->fetch_assoc();
		$book = $rana_r['book_id'];
		
		$maisha_q1 =  $cls_additem->select_temp_details_sum($uniq_id);
		$rana_r1 = $maisha_q1->fetch_array();
		
		$t_qty = $rana_r1[0];		
		list($total_cart_item) = split('[/.]', $t_qty);
		$total_cart_item;
		}
		
		// customer order details
		$id = $_SESSION['customer_fname'];
		$cuidm = $cls_customer->view_customer_email($id);
		$emmm = $cuidm->fetch_assoc();
		
?>

<!DOCTYPE html>
<html lang="en">
  <head>
       <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="author" content="Dhaka CentreNIC IT Limited"/>
        <title><?php require_once("title.php"); ?> </title>
		<base href="http://localhost/e-commerce/customer/">
       <link rel="icon" type="img/ico" href="img/icon.png">
        <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css">
        <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css">
         <!--  <link rel="stylesheet" href="responsive.css" type="text/css">-->
		   <link rel="stylesheet" href="css/style.css" type="text/css">
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:600,700,800,400' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
		<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
       <!-- <script type="text/javascript" src="js/modernizr-2.8.3.min.js"></script>-->
        <script type="text/javascript" src="js/jquery-1.11.1.min.js"></script>
        <!--<script type="text/javascript" src="js/wow.min.js"></script>-->
        <!--<script type="text/javascript" src="js/slick.min.js"></script>-->
       <!-- <script type="text/javascript" src="js/superbox.min.js"></script>-->
        <!--<script type="text/javascript" src="js/jquery.mixitup.js"></script>-->
        <script type="text/javascript" src="js/bootstrap.min.js"></script>
       <!-- <script type="text/javascript" src="js/scrollTop.js"></script>-->
        <!--<script type="text/javascript" src="js/nahian.js"></script>-->
  <link rel="stylesheet" type="text/css" href="header/css/1dc20a124ae9c8204ebe6be5453cba41.css" media="all"/>
<link rel="stylesheet" type="text/css" href="header/css/2ead3f05cabd2e4d6426c54195338b4c.css" media="print"/>
<script type="text/javascript" src="header/js/eac2132581372a23ffba50bfbd8bcd90.js"></script>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
     
	 
    <!-- Google Fonts -->
    <link href='http://fonts.googleapis.com/css?family=Titillium+Web:400,200,300,700,600' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Roboto+Condensed:400,700,300' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Raleway:400,100' rel='stylesheet' type='text/css'>
    
    <!-- Bootstrap -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="css/font-awesome.min.css">
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/owl.carousel.css">
    <link rel="stylesheet" href="style.css">
    <!--<link rel="stylesheet" href="css/responsive.css">-->
	
	<link rel="stylesheet" href="alert/alertify.min.css">
   <link rel="stylesheet" href="alert/default.min.css">

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="js/jquery.min.js"></script>
<!-- Custom Theme files -->
<link href="css/styles-imgzoom.css" rel="stylesheet" type="text/css" media="all" />
  </head>
  <body class=" cms-index-index cms-bagdoom-home">
  <script>(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7";
		  fjs.parentNode.insertBefore(js, fjs);
	  }(document, 'script', 'facebook-jssdk'));</script>
<div class="wrapper">

<div class="page">
<script type="text/javascript">
	document.observe('click', function(event) {
	
	  if (!event.findElement('#header_login')) {  
		jQuery('#header_Login_hover-showing').hide();
		
		$$('.products-grid').each(function(ele) {
			ele.setStyle({position: 'relative'})
		}); 
	  }   
	});

	function miniCartShow(shoID)
	{
		if (document.getElementById(shoID))
		{
			if (document.getElementById(shoID+'ing').style.display == 'none')
			{
				document.getElementById(shoID+'ing').style.display = 'block';
				
				$$('.products-grid').each(function(ele) {
				  ele.setStyle({position: 'static'})
				});  
			}
		}
	}
	
	function miniCartHide(hideID)
	{
		if (document.getElementById(hideID))
		{
			if (document.getElementById(hideID+'ing').style.display != 'none')
			{
				document.getElementById(hideID+'ing').style.display = 'none';
				
				$$('.products-grid').each(function(ele) {
				  ele.setStyle({position: 'relative'})
				});
			}
		}
	}
	
	function miniLoginShow(shoID)
	{
		if (document.getElementById(shoID))
		{
			if (document.getElementById(shoID+'ing').style.display == 'none')
			{
				document.getElementById('advice-required-entry-valid').style.display = 'none';  
				document.getElementById('advice-required-entry-mail').style.display = 'none';
				document.getElementById('advice-required-entry-password').style.display = 'none';
				document.getElementById('advice-validate-email-email2').style.display = 'none';
				jQuery('#mini-login').removeClass('required-entry');
				jQuery('#mini-password').removeClass('required-entry');                     
				document.getElementById(shoID+'ing').style.display = 'block';
				
				$$('.products-grid').each(function(ele) {
				  ele.setStyle({position: 'static'})
				});
				
			}
		else
			if (document.getElementById(shoID+'ing').style.display != 'none')
			{
				document.getElementById(shoID+'ing').style.display = 'none';
				
				$$('.products-grid').each(function(ele) {
				  ele.setStyle({position: 'relative'})
				});
			}
		}
		
	}
	
</script>
	<div class="header-container">
	<div class="header_container_top">
	<div class="container">
	<!--<ul>
	<li><a href="">Easy Replacement</a></li>
	<li><a href="">Cash on Delivery</a></li>
	<li><a href="">How to Buy</a></li>
	</ul>-->
	<div class="f-left">
	<div class="hotline" style="font-family: 'Open Sans', sans-serif;font-size:25px;"><b><p>Hotline : 04 2724569</b></p>
	<!--<p>( 10 AM to 11 PM - Everyday )--></p></div>
	</div>
	</div>
	</div>
	<div class="header">
	<div class="header_top container">
	 
	<div class="logo">
		<a href="home" title="" class="logo"><img src="img/bb.png" style="height:80px;width: 180px;"></a>
	</div>
	<div class="header-right-block">
		<form id="search_mini_form" name="search" action="search_item" method="post">
			<div class="form-search">
				<input type="text" name="searchItem" id="search" placeholder="Please search item" value="" class="input-text" maxlength="128"/>
				<button type="submit" title="Search" name="" id="m" class="button"><span><span>Search</span></span></button>
				<span class="searchbox-icon">Search</span>
				<div id="search_autocomplete" class="search-autocomplete"></div>

			</div>
		</form>
	<div class="header_right f-right">
	 
	 
	<div>
	<div class="header-top-cart">
	<div class="user-icon"><a href="myaccount/oi/<?php echo md5($emmm['email']);?>" title="My Account"></a></div>
	 
	<div class="block-cart f-left" style="">
	<div class="header_cart f-right" id="header_cart_hover-show" onmouseover="miniCartShow('header_cart_hover-show');return false;" onmouseout="miniCartHide('header_cart_hover-show');return false;">
	<div class="block">
	 
	<div class="block-content f-left">
	<div style="position: relative;">
	<p class="empty_cart"><a href="#"><?php if(!empty($total_cart_item)) { ?><?php echo $total_cart_item; ?><?php } else { ?>0<?php } ?></a></p>
	</div>
	</div>
	<span class="clear"></span>
	</div>
	</div>
	<div class="block mini_cart" style="width:300px;" id="header_cart_hover-showing" onmouseover="miniCartShow('header_cart_hover-show');return false;" onmouseout="miniCartHide('header_cart_hover-show');return false;">
	<div class="mini_cart_wrap2">
	<div class="block-content">
		<p class="empty">
				<div class="count" style="color:black;text-align:center;font-size:12px;font-family:Times New Roman;"><b>There are <?php if(!empty($total_cart_item)) { ?><?php echo $total_cart_item; ?><?php } else { ?>0<?php } ?> items</a> in your cart.</b></div>
						<div class="items">
						 <?php
						 if(isset($uniq_id))
						 {
							 						 
							$sub_total = 0; $total = 0;
							$maishade_q = $cls_additem->select_book_id_book_qty($uniq_id);
							while($ra2 = $maishade_q->fetch_array())
							{
								
								$book_id = $ra2[0];
								$book_qty = $ra2[1];
								$book_price = $ra2[2];
								
								$book_price_decimal = number_format($book_price, 2, '.', ',');
								
								$maisha2 = $cls_additem->select_title_book_image($book_id);
								$ras2 = $maisha2->fetch_array();
								
								$booktitle = $ras2[0];
								$bookimage = $ras2[1];
								$editor = $ras2[2];
								
								$edm =  $cls_additem->select_cat_name($editor);
								$edr = $edm->fetch_array();
								$editor_name = $edr[0];
																
								$total_price = $book_qty*$book_price;
								
								$sub_total = $sub_total + $total_price;
								$sub_total_decimal = number_format($sub_total, 2, '.', ',');
																
								//$total = $sub_total + $delivery_charge;

							?>
						<div class="item">
								<div class="ul-image">
								<a href="#"><img src="../apanel/title_image/<?php echo $bookimage; ?>" style="width:50px; height:50px"/> </a>
								</div>
								<div class="ul-info">
								<li style="text-transform: uppercase;font-family:Times New Roman;"><b><a href="shipping/confirm_id/<?php echo md5($emmm['email']); ?>"><?php echo $booktitle; ?></a></b></li>
								<!--<p class="size-ul">Size:M <span class="remove"> <a href="#"/>Remove</a></span></p>-->
								<li style="color:black;float:left;font-size:10px;font-family:Times New Roman;"><b>Quantity:<?php echo $book_qty; ?> X Unit price: <?php echo $book_price_decimal; ?> (TK)</b></li>
								</div>
								<!--<p class="size-ul">Size:M <span class="remove"><button class="pt_del" dataid="<?php// echo $mbook_id; ?>,<?php //echo $uniq_id; ?>" >Remove</button></span></p>-->
						</div>
							<?php } }?>
						</div>
						<div class="total-ul" style="font-family:Times New Roman;">
						   <span class="total-span"><b> Subtotal:</span> <?php 
						   if(isset($sub_total_decimal))
							   echo $sub_total_decimal; 
						   else 
							   echo '0.00'; ?> </b>(TK) 
						</div>
						<div class="view-cart">
						   <div class="view-right">
						     <a href="shoppingcart" class="btn btn-defualt btn-lg">Go to cart</a>
						   </div>
						   <div class="view-left">
						   <!-- $customer_id change emmm -->
							 <a href="shipping/confirm_id/<?php echo md5($emmm['email']); ?>" class="btn btn-defualt btn-lg">Checkout</a>
						   </div>
						</div>
			</p>
		</div>
		</div>
	</div>
	</div>
	 
	<div class="f-right">
	<ul class="links">
	<li>
	<div id="header_login" class="main_anchor" style="font-weight:bold;font-size:17px;font-family: Arial, Helvetica, sans-serif;color:#0D684C;">
		
		<div id="header_Login_hover-show" class="show_Anchor" onclick="miniLoginShow('header_Login_hover-show');return false;">
			<?php echo $emmm['fullname']; ?>
			
		</div>
	</div>
	</li>
	<li>
	<a href="myaccount/oi/<?php echo md5($emmm['email']);?>"><b>My Account</b></a>
	</li>
	<li>
		<a href="#"><b><span id="signout">Log Out</span></b></a>
	</li>
	</ul>
	</div>
	
	</div>
	</div>
	</div>
	</div>
	<div class="clear">&nbsp;</div>
	</div>
	</div>
	<div class="clear"></div>
	 
	 
		<div class="nav-container" id="all_category_arrow-showing">
			<div class="left_nav new_nav">
			<ul id="nav">
			<li class="level0 nav-1 first-level0 level-top parent">
			<a href="javascript::void(0);">
			<span><b>All Categories</b></span>
			</a>
			<ul>
			<?php while($all_data = $all_root_data->fetch_assoc()) {?>
			
			<li class="level1">
			<a href="home">
			<span><?php echo $all_data['root_cat_name']; ?>
			<input type="hidden" name="id" value="<?php echo $root_cat_all_id = $all_data['id']; ?>"/>
			</span>
			</a>
			<ul>
			<?php 
				 $cat_data_all = $cls_root_category->view_data_cat_all($root_cat_all_id);
				
				while($root_cat_all = $cat_data_all->fetch_assoc()){ 
					
					$cate_id_all = $root_cat_all['id'];
				?>
			<li class="sub_category level2">
			<a href="categories/root_cat/<?php echo $root_cat_all_id; ?>cat/<?php echo $cate_id_all; ?>">
			<?php echo $root_cat_all['cat_name']; ?>
			</a>
			</li>
				<?php } ?>
			</ul>
			</li>
			
			<?php } ?>
			
			</ul>
			
			</li>
			
			
			<?php while($cat = $root_data->fetch_assoc()){?>
			
			<li class="level0 nav-1 level-top parent">
			<a href="#">
			<span>
			<?php echo $cat['root_cat_name']; ?>
						<input type="hidden" name="id" value="<?php echo $root_cat_id = $cat['id']; ?>"/>
			
			</span>
			</a>
			<ul>
			<?php 
				 $cat_data = $cls_root_category->view_data_cat($root_cat_id);
				
				while($root_cat = $cat_data->fetch_assoc()){ 
					
					$cate_id = $root_cat['id'];
				?>
				
			<li class="level1">
			<a href="categories/root_cat/<?php echo $root_cat_id; ?>cat/<?php echo $cate_id; ?>">
			
			<span><?php echo $root_cat['cat_name']; ?></span>
			
			</a>
			<ul><?php
				$sub_data = $cls_root_category->view_data_sub($cate_id);
				while($root_cat_sub = $sub_data->fetch_assoc()){ 
					
					
				?>
			<li class="sub_category level2">
			<a href="categories/root_cat/<?php echo $root_cat_id; ?>cat/<?php echo $cate_id; ?>">
			
			<?php echo $root_cat_sub['subcat_name']; ?>
			
			</a>
			</li>
			
			<?php } ?>	
				
			</ul>
			</li>
			
			<?php } ?>
			</ul>
			</li>
			
				<?php } ?>
				
					
			
			</ul>
			</div>
		</div>
	 
	</div>