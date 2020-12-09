<?php
 include('include/header.php');
 if(!isset($_SESSION['admin_id'])){
       // echo "<script>alert('Session not found');</script>";
		echo "<script>location.href='index.php';</script>";
	}
 $id=$_GET['id'];
 $view_country=$cls_country->view_country_idwise($id);
 $result = $view_country->fetch_assoc();
 
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
						<li><i class="fa fa-laptop"></i>Country</li>						  	
					</ol>
				</div>
			</div>
            
          
		
		<div class="row">
				 <div class="col-md-10 col-md-offset-1 portlets">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <div class="pull-left">Country Manage (Shipping)</div>
                    
                  <div class="clearfix"></div>
                </div>
                <div class="panel-body">
                  <div class="padd">
                    
                      <div class="form quick-post">
                                      <!-- Edit profile form (not working)-->
                                      <form class="form-horizontal" id="updatecountry">
                                          <!-- Title -->
										  <input type="hidden" value="<?php echo $id; ?>" name="countryid">
                                          <div class="form-group">
                                            <label class="control-label col-lg-2" for="title">Country Name</label>
                                            <div class="col-lg-10"> 
                                              <input type="text" class="form-control" name="countryname" id="title" value="<?php echo $result['country_name'];?>">
                                            </div>
                                          </div>
                                          <div class="form-group">
                                            <label class="control-label col-lg-2">Status</label>
                                            <div class="col-lg-10">                               
                                                <select class="form-control" name="status">
												 <option value="<?php echo $result['status'];?>" selected><?php echo $result['status'];?></option>
												<option value="yes">yes</option>
												<option value="no">no</option>
												 
                                                </select>  
                                            </div>
                                          </div>     
                                          <!-- Buttons -->
                                          <div class="form-group">
                                             <!-- Buttons -->
											 <div class="col-lg-offset-2 col-lg-9">
												<input type="submit" class="btn btn-primary" value="Submit">
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