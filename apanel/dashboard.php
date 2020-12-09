<?php
 include('include/header.php');
 if(!isset($_SESSION['admin_id'])){
       // echo "<script>alert('Session not found');</script>";
		echo "<script>location.href='index.php';</script>";
	}

    $row = $cls_dashboard->total_item();
    $total_row = $row->fetch_array();
    $total = $total_row[0];

    $data_row = $cls_dashboard->total_sale($total);
    $sale_row = $data_row->fetch_assoc();
    $sale = $sale_row['book_qty'];

    $order_row = $cls_dashboard->total_order();
    $order = $order_row->fetch_assoc();
    $total_order = $order['book_qty'];

    $order_view = $cls_dashboard->order_view();
    $order_t = $order_view->fetch_array();
    $order = $order_t[0];

 ?>
      <!--sidebar end-->

      <!--main content start-->
      <section id="main-content">
          <section class="wrapper">
              <!--overview start-->
			  <div class="row">
				<div class="col-lg-12">
					<h3 class="page-header"><i class="fa fa-laptop"></i> Dashboard</h3>
					<ol class="breadcrumb">
						<li><i class="fa fa-home"></i><a href="dashboard">Home</a></li>
						<li><i class="fa fa-laptop"></i>Dashboard</li>
					</ol>
				</div>
			</div>

            <div class="row">
				<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
					<div class="info-box blue-bg">
						<i class="fa fa-cloud-download"></i>
						<div class="count"><?php echo $total; ?></div>
						<div class="title">Total Item</div>
					</div><!--/.info-box-->
				</div><!--/.col-->
				<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
					<div class="info-box brown-bg">
						<i class="fa  fa-thumbs-o-up"></i>
						<div class="count"><?php echo $order; ?></div>
						<div class="title">Order</div>
					</div><!--/.info-box-->
				</div><!--/.col-->
				<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
					<div class="info-box dark-bg">
						<i class="fa fa-shopping-cart"></i>
						<div class="count"><?php echo  $sale; ?></div>
						<div class="title">Sale Item</div>
					</div><!--/.info-box-->
				</div><!--/.col-->

				<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
					<div class="info-box green-bg">
						<i class="fa fa-cubes"></i>
						<div class="count"><?php echo $total_order; ?></div>
						<div class="title">Order Item</div>
					</div><!--/.info-box-->
				</div><!--/.col-->

			</div><!--/.row-->


		<!--<div class="row">
			<div class="col-md-8 col-md-offset-2 portlets">
            <div class="panel panel-default">
				<div class="panel-heading">
                  <h2><strong>Calendar</strong></h2>
				<div class="panel-actions">
                    <a class="wminimize"><i class="fa fa-chevron-up"></i></a>
                    <a class="wclose"><i class="fa fa-times"></i></a>
                </div>

                </div><br><br><br>
                <div class="panel-body">
                  <!-- Widget content -->

                    <!-- Below line produces calendar. I am using FullCalendar plugin. -->
                    <!--<div id="calendar"></div>

                </div>
              </div>

            </div>

          </div> -->
              <!-- project team & activity end -->

          </section>
      </section>
      <!--main content end-->
  </section>
  <!-- container section start -->

<?php
include('include/footer.php');
?>