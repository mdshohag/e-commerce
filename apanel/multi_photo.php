<?php
 include('include/header.php'); 
 if(!isset($_SESSION['admin_id'])){
       // echo "<script>alert('Session not found');</script>";
		echo "<script>location.href='index.php';</script>";
}

  $update_id = $_GET['edit'];
 
$pro_data = $cls_productmanage->product_view_by_id($update_id);
 $data_row = $pro_data->fetch_assoc();
 $img = $data_row['id'];
 $rot = $data_row['root_cat_name'];
 $cat = $data_row['cat_name'];
 $sub = $data_row['subcat_name'];
 $title = $data_row['title'];
 
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
				 <div class="col-md-10 col-md-offset-1 portlets">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <div class="pull-left">Product multiple Image Update</div>
                    
                  <div class="clearfix"></div>
                </div>
                <div class="panel-body">
                  <div class="widget-foot">
                    <!-- Footer goes here -->
					<div class="portlet light bordered">
						<p style="color:#000;font-size:16;"><b>Root Category :- <?php echo $rot; ?></b></p>
							<p style="color:#000;font-size:16;"><b>Category :- <?php echo $cat; ?> </b></p>
							<p style="color:#000;font-size:16;"><b>SubCategory :- <?php echo $sub; ?> </b></p>
							<p style="color:#000;font-size:16;"><b>Title :- <?php echo $title;?></b> </p>
						<div class="portlet-body">
							
							<table class="table table-striped table-bordered table-hover">
								<thead style="border-top:3px solid #dddddd;">
									<tr >
										<th style="text-align:center;">Multiple Image </th>
										<th style="text-align:center;"> Multiple Image Edit </th>
										<th style="text-align:center;"> Delete </th>
									</tr>
								</thead>
								<tbody>
								<?php $data_img = $cls_productmanage->book_page_view_image($img);
										while($imag = $data_img->fetch_assoc()){ 
										$img_id = $imag['id'];
										?>
									<tr style="border-top:3px solid #dddddd;text-align:center;">
										<td> 
										
										<img src="uploaded/<?php echo $imag['photo']; ?>" style="width:55%; height:120px;"/>
										
										</td>
										<td>
										<a class="btn btn-success" href="multi_photo_edit/img_edit/<?php echo $imag['id']; ?>">Edit </a>
										</td>
										
										<td ><button imagedel-id="<?php echo $imag['id']; ?>" class="btn btn-danger image_delete">Delete</button></td>
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