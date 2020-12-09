<?php
 include('include/header.php'); 
 if(!isset($_SESSION['admin_id'])){
       // echo "<script>alert('Session not found');</script>";
		echo "<script>location.href='index.php';</script>";
	}
 $cls_country = $cls_country->view_country();
 
 $id = $_GET['id'];
 $district = $cls_district->view_district_id_wise($id);
 $scountry=$district->fetch_assoc()
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
						<li><i class="fa fa-laptop"></i>District</li>						  	
					</ol>
				</div>
			</div>
            
          
		
		<div class="row">
				 <div class="col-md-10 col-md-offset-1 portlets">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <div class="pull-left">District Manage (Shipping)</div>
                    
                  <div class="clearfix"></div>
                </div>
                <div class="panel-body">
                  <div class="padd">
                    
                      <div class="form quick-post">
                                      <!-- Edit profile form (not working)-->
                                      <form class="form-horizontal" id="editdistrict">
										<input type="hidden" value="<?php echo $id;?>" name="hiddenid">
                                          <!-- Title -->
										  <div class="form-group">
                                            <label class="control-label col-lg-2">Country</label>
                                            <div class="col-lg-10">                               
                                                <select class="form-control" name="country_edit">
												  <option value="<?php echo $scountry['countryid'];?>" selected><?php echo $scountry['country'];?></option>
												<?php 
												while($row=$cls_country->fetch_assoc()){?>
												
													 <option value="<?php echo $row['id'];?>"><?php echo $row['country_name'];?></option>
												  
												<?php
												}
												?>
                                                </select>  
                                            </div>
                                          </div> 
                                          <div class="form-group">
                                            <label class="control-label col-lg-2" for="title">District Name</label>
                                            <div class="col-lg-10"> 
                                              <input type="text" class="form-control" name="districtedit" value="<?php echo $scountry['district'];?>" id="title">
                                            </div>
                                          </div>
                                          <div class="form-group">
                                            <label class="control-label col-lg-2">Status</label>
                                            <div class="col-lg-10">                               
                                                <select class="form-control" name="statusedit">
                                                 <option value="<?php echo $scountry['status'];?>" selected> <?php echo $scountry['status'];?></option>
												  <option value="Yes">Yes</option>
												  <option value="No">No</option>
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