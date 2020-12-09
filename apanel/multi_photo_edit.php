<?php
 include('include/header.php'); 
 if(!isset($_SESSION['admin_id'])){
       // echo "<script>alert('Session not found');</script>";
		echo "<script>location.href='index.php';</script>";
	}
        $img_id = $_GET['img_edit'];
        $data_img = $cls_productmanage->view_image_update($img_id);
        $imag = $data_img->fetch_assoc();
  
 
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
                  <div class="padd">
                    
                      <div class="form quick-post">
						  <!-- Edit profile form (not working)-->
						<form class="form-horizontal" id="multi_edit" style="color:black;text-style:bold;" method="post" enctype="multipart/form-data">
							
								<div class="form-group">
								   <label class="control-label col-sm-2" for="title">Product Image</label>
									<div class="col-sm-10">
										<img src="uploaded/<?php echo $imag['photo']; ?>" width="200" height="130"/>
										<input id="upload" name="upload" type="file" >
											
										<input type="hidden" value="<?php echo $img_id; ?>" name="photo_id"/>
									</div>
								  </div>
								<div class="form-group">
								 <!-- Buttons -->
								 <div class="col-lg-offset-2 col-lg-9">
									<input type="submit" name="save" class="btn btn-primary" value="Update">
								 </div>
								</div> 
						  </form>
						</div>
                  </div>
                  <div class="widget-foot">
                    <!-- Footer goes here -->
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