<?php
 include('include/header.php'); 
	 if(!isset($_SESSION['admin_id'])){
       // echo "<script>alert('Session not found');</script>";
		echo "<script>location.href='index.php';</script>";
	}
	$update_id = $_GET['edit'];
	
	$sub_data = $cls_subcategory->subcat_update_by_id($update_id);
	
	$data_row = $sub_data->fetch_assoc();
	
	$data = $cls_category->view_data();
	
	$root_row = $data->fetch_assoc();
 

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
						<li><i class="fa fa-laptop"></i>Sub category</li>						  	
					</ol>
				</div>
			</div>
            
          
		
		<div class="row">
				 <div class="col-md-10 col-md-offset-1 portlets">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <div class="pull-left">Sub Category Manage</div>
                    
                  <div class="clearfix"></div>
                </div>
                <div class="panel-body">
                  <div class="padd">
                    
                      <div class="form quick-post">
                                      <!-- Edit profile form (not working)-->
                                      <form class="form-horizontal" id="subcategory_update">
                                          <!-- Title -->
										  <div class="form-group">
                                            <label class="control-label col-lg-2">Root Category</label>
                                            <div class="col-lg-10">                               
                                                <select class="form-control" name="cate_name_id" id="cat">
                                                 <option value="<?php echo $data_row['rootcat_id']; ?>" selected><?php echo $data_row['root_cat_name'];  ?></option>
												 
												 <?php while($row = $data->fetch_assoc()) {?>
												 
												  <option value="<?php echo $row['id']; ?>"><?php echo $row['root_cat_name']; ?></option>
												  
												 <?php } ?>
                                                </select>  
                                            </div>
                                          </div>  
										  
										  <div class="form-group">
                                            <label class="control-label col-lg-2">Category</label>
                                            <div class="col-lg-10">                               
                                                <select class="form-control" name="category_name" id="category_name_id">
                                                <option value="<?php echo $data_row['cat_id']; ?>" selected><?php echo $data_row['cat_name']; ?></option>
                                                </select>  
                                            </div>
                                          </div>
                                          <div class="form-group">
                                            <label class="control-label col-lg-2" for="title">Sub Category Name</label>
                                            <div class="col-lg-10"> 
                                              <input type="text" name="subcategory_name" value="<?php echo $data_row['subcat_name']; ?>" class="form-control" id="title">
											   <input type="hidden" value="<?php echo $data_row['id']; ?>" name="subcategory_id">
                                            </div>
                                          </div>
                                          <div class="form-group">
                                            <label class="control-label col-lg-2">Status</label>
                                            <div class="col-lg-10">                               
                                                <select class="form-control" name="status">
                                                 <option value="<?php echo $data_row['status']; ?>" selected><?php echo $data_row['status']; ?></option>
												  <option value="Yes">Yes</option>
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
                    <!-- Footer goes here --><br><br><br>
					
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