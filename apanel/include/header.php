<?php
	session_start();
	if(!isset($_SESSION['admin_id'])){
       // echo "<script>alert('Session not found');</script>";
		echo "<script>location.href='index.php';</script>";
	}
	
	$admin_name = $_SESSION['admin_fname'];

	require_once('functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("functions/$classname.class.php");
	}
	
	$cls_root_category = new cls_root_category();
	$cls_category  = new cls_category();
	$cls_subcategory = new cls_subcategory();
	$cls_country = new cls_country();
	$cls_district = new cls_district();
	$cls_thana = new cls_thana();
	$cls_producttype = new cls_producttype();
	$cls_productmanage = new cls_productmanage();
	$cls_order = new cls_order();
	$cls_slider = new cls_slider();
    $cls_dashboard = new cls_dashboard();
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="keyword" content="">
    <link rel="shortcut icon" href="img/favicon.png">

    <title>bioscopebd </title>
      <base href="http://localhost/e-commerce/apanel/">
    <!-- Bootstrap CSS -->    
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <!-- bootstrap theme -->
    <link href="css/bootstrap-theme.css" rel="stylesheet">
    <!--external css-->
    <!-- font icon -->
    <link href="css/elegant-icons-style.css" rel="stylesheet" />
    <link href="css/font-awesome.min.css" rel="stylesheet" />    
    <!-- full calendar css-->
    <link href="assets/fullcalendar/fullcalendar/bootstrap-fullcalendar.css" rel="stylesheet" />
	<link href="assets/fullcalendar/fullcalendar/fullcalendar.css" rel="stylesheet" />
    <!-- easy pie chart-->
    <link href="assets/jquery-easy-pie-chart/jquery.easy-pie-chart.css" rel="stylesheet" type="text/css" media="screen"/>
    <!-- owl carousel -->
    <link rel="stylesheet" href="css/owl.carousel.css" type="text/css">
	<link href="css/jquery-jvectormap-1.2.2.css" rel="stylesheet">
    <!-- Custom styles -->
	<link rel="stylesheet" href="css/fullcalendar.css">
	<link href="css/widgets.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
	<link href="css/datatables/datatables.min.css" rel="stylesheet" type="text/css" />
    <link href="css/datatables/plugins/bootstrap/datatables.bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="css/style-responsive.css" rel="stylesheet" />
	<link href="css/xcharts.min.css" rel=" stylesheet">	
	<link href="css/jquery-ui-1.10.4.min.css" rel="stylesheet">
	 <!-- Alertify -->
  <!-- <link rel="stylesheet" href="assets/css/alertify.bootstrap.css">
  <link rel="stylesheet" href="assets/css/alertify.core.css">
  <link rel="stylesheet" href="assets/css/alertify.default.css">-->
   <link rel="stylesheet" href="alert/alertify.min.css">
   <link rel="stylesheet" href="alert/default.min.css">
        <!-- END THEME LAYOUT STYLES -->
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 -->
    <!--[if lt IE 9]>
      <script src="js/html5shiv.js"></script>
      <script src="js/respond.min.js"></script>
      <script src="js/lte-ie7.js"></script>
    <![endif]-->
  </head>

  <body>
  <!-- container section start -->
  <section id="container" class="">
     
      
      <header class="header dark-bg">
            <div class="toggle-nav">
                <div class="icon-reorder tooltips" data-original-title="Toggle Navigation" data-placement="bottom"><i class="icon_menu"></i></div>
            </div>

            <!--logo start-->
            <a href="dashboard" class="logo">Bioscopebd <span class="lite">Admin</span></a>
            <!--logo end-->

            <div class="nav search-row" id="top_menu">
                <!--  search form start -->
                <ul class="nav top-menu">                    
                    <li>
                        <form class="navbar-form">
                            <input class="form-control" placeholder="Search" type="text">
                        </form>
                    </li>                    
                </ul>
                <!--  search form end -->                
            </div>

            <div class="top-nav notification-row">                
                <!-- notificatoin dropdown start-->
                <ul class="nav pull-right top-menu">

                    <!-- user login dropdown start-->
                    <li class="dropdown">
                        <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                            <span class="profile-ava">
                                <img alt="" src="img/avatar1_small.jpg">
                            </span>
                            <span class="username"><?php echo $admin_name;?></span>
                            <b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu extended logout">
                            <div class="log-arrow-up"></div>
                            <!--<li class="eborder-top">
                                <a href="#"><i class="icon_profile"></i> My Profile</a>
                            </li>-->
                            <li>
                                <a href="" id="signout"><i class="icon_key_alt"></i> <span > Log Out</span></a>
                            </li>
                        </ul>
                    </li>
                    <!-- user login dropdown end -->
                </ul>
                <!-- notificatoin dropdown end-->
            </div>
      </header>      
      <!--header end-->

      <!--sidebar start-->
      <aside>
          <div id="sidebar"  class="nav-collapse ">
              <!-- sidebar menu start-->
              <ul class="sidebar-menu">                
                  <li class="active">
                      <a class="" href="dashboard">
                          <i class="icon_house_alt"></i>
                          <span>Dashboard</span>
                      </a>
                  </li>
				  <li class="sub-menu">
                      <a href="javascript:;" class="">
                          <i class="icon_document_alt"></i>
                          <span>Manage</span>
                          <span class="menu-arrow arrow_carrot-right"></span>
                      </a>
                      <ul class="sub">
                          <li><a class="" href="rootcategory">Root Category</a></li>
						  <li><a class="" href="category">Category</a></li>
                          <li><a class="" href="subcategory">Sub Category</a></li>
                          <li><a class="" href="product_type">Product Type</a></li>
                          <li><a class="" href="product">Product Manage</a></li>
                          <li><a class="" href="Country">Country</a></li>
                          <li><a class="" href="district">District</a></li>
                          <li><a class="" href="thana">Aread/Thana</a></li>
                          
                      </ul>
                  </li>
                   <li class="sub-menu">
                      <a href="javascript:;" class="">
                         <i class="icon_piechart"></i>
                          <span>Order</span>
                          <span class="menu-arrow arrow_carrot-right"></span>
                      </a>
                           <ul class="sub">
                          <li><a class="" href="processingorder">Processing Ordere</a></li>
						  <li><a class="" href="accepted">Accepted Order</a></li>
                      </ul>
                    
                                         
                  </li> 
				  <li class="sub-menu">
                      <a href="javascript:;" class="">
                         <i class="icon_piechart"></i>
                          <span>Silder</span>
                          <span class="menu-arrow arrow_carrot-right"></span>
                      </a>
                           <ul class="sub">
                          <li><a class="" href="addslider">Add Silder</a></li>
                          <li><a class="" >Others</a></li>
                      </ul>
                    
                                         
                  </li>
              
                  
              </ul>
              <!-- sidebar menu end-->
          </div>
      </aside>
      <!--sidebar end-->