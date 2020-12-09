<?php
 include('include/header.php'); 
	if(!isset($_SESSION['admin_id'])){
       // echo "<script>alert('Session not found');</script>";
		echo "<script>location.href='index.php';</script>";
	}
	$update_id = $_GET['edit'];
	
	$data = $cls_category->cat_update_by_id($update_id);
	
	
	$row = $data->fetch_assoc(); 
	
	$cat_data = $cls_category->view_data();
	
	$crow = $cat_data->fetch_assoc();
	

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
						<li><i class="fa fa-laptop"></i>Category</li>						  	
					</ol>
				</div>
			</div>
            
          
		
		<div class="row">
				 <div class="col-md-10 col-md-offset-1 portlets">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <div class="pull-left">Category Manage</div>
                    
                  <div class="clearfix"></div>
                </div>
                <div class="panel-body">
                  <div class="padd">
                    
                      <div class="form quick-post">
                                      <!-- Edit profile form (not working)-->
                                      <form class="form-horizontal" id="update_category" method="post">
                                          <!-- Title -->
										   
										   <div class="form-group">
                                            <label class="control-label col-lg-2">Root Category</label>
                                            <div class="col-lg-10">                               
                                                <select name="root_cat_id" class="form-control">
													 <option value="<?php echo $row['root_cat_id']; ?>" selected><?php echo $row['root_cat_name']; ?></option>
													 
												   <?php while($rows = $cat_data->fetch_assoc()) {?>
												  <option value="<?php echo $rows['id']; ?>"><?php echo $rows['root_cat_name']; ?></option>
												  <?php } ?>
												  
                                                </select>  
                                            </div>
                                          </div>
                                          <div class="form-group">
                                            <label class="control-label col-lg-2" for="title">Category Name</label>
                                            <div class="col-lg-10"> 
                                              <input type="text" name="cat_name" value="<?php echo $row['cat_name']; ?>" class="form-control" id="title">
											    <input type="hidden" value="<?php echo $row['id']; ?>" name="category_id">
                                            </div>
                                          </div>
                                          <div class="form-group">
                                            <label class="control-label col-lg-2">Category Status</label>
                                            <div class="col-lg-10">                               
                                                <select name="cat_status" class="form-control">
                                                 <option value="Yes" selected><?php echo $row['status']; ?></option>
												  <option value="No">No</option>
                                                </select>  
                                            </div>
                                          </div>     
                                          <!-- Buttons -->
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