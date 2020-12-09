<?php
 include('include/header.php');
  if(!isset($_SESSION['admin_id'])){
       // echo "<script>alert('Session not found');</script>";
		echo "<script>location.href='index.php';</script>";
	}
	$sl = 1;
	$accpted_data = $cls_order->accepted_view();

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
						<li><i class="fa fa-laptop"></i>Product</li>						  	
					</ol>
				</div>
			</div>
            
          
		
		<div class="row">
			<div class="col-md-12 portlets">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <div class="pull-left">Accepted Order</div>
                    
                  <div class="clearfix"></div>
                </div>
                <div class="panel-body">
                 
                  <div class="widget-foot">
                    <!-- Footer goes here --><br><br><br>
					<div class="portlet light bordered">
						<div class="portlet-title">
							<div class="caption font-dark">
								<i class="icon-settings font-dark"></i>
								<span class="caption-subject bold uppercase">Column Reordering</span>
							</div>
							<div class="tools"> </div>
						</div>
						<div class="portlet-body">
							<table class="table table-striped table-bordered table-hover" id="sample_1">
								<thead>
									<tr>
										<th>SL</th>
										<th> Order No </th>
										<th> User ID </th>
										<th> Country </th>
										<th> City </th>
										<th> Date & Time </th>
										<th> Payway </th>
										
									</tr>
								</thead>
								<tbody>
									<?php while($data_row = $accpted_data->fetch_assoc()){ ?>
									<tr>
										<td><?php echo $sl++; ?></td>
										<td><?php echo $data_row['uniq_id']; ?></td>
										<td> <?php echo $data_row['customer_id']; ?> </td>
										
										<td> <?php echo $data_row['country_name']; ?> </td>
										<td> <?php echo $data_row['district']; ?> </td>
										<td> <?php echo $data_row['order_date_time']; ?> </td>
										<td> <?php echo $data_row['order_from']; ?> </td>
										
									</tr>
									
								   <?php } ?>
								   
								</tbody>
							</table>
						</div>
					</div>
                  </div>
                </div>
              </div>
              
            </div>
                        
          </div> 
              <!-- project team & activity end -->

          </section>
      </section>
      <!--main content end-->
  </section>
  <!-- container section start -->

<?php
include('include/footer.php');
?>