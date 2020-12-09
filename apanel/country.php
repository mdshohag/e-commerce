<?php
 include('include/header.php'); 
 if(!isset($_SESSION['admin_id'])){
       // echo "<script>alert('Session not found');</script>";
		echo "<script>location.href='index.php';</script>";
	}
 $view_country=$cls_country->view_country();
 
 
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
                                      <form class="form-horizontal" id="addcountry">
                                          <!-- Title -->
                                          <div class="form-group">
                                            <label class="control-label col-lg-2" for="title">Country Name</label>
                                            <div class="col-lg-10"> 
                                              <input type="text" class="form-control" name="countryname" id="title">
                                            </div>
                                          </div>
                                          <div class="form-group">
                                            <label class="control-label col-lg-2">Status</label>
                                            <div class="col-lg-10">                               
                                                <select class="form-control" name="status">
                                                 <option value="" selected>Select</option>
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
                    <!-- Footer goes here --><br><br><br>
					 <div class="row">
                      <div class="col-md-12">
                            <!-- BEGIN EXAMPLE TABLE PORTLET-->
                            <div class="portlet light bordered">
                                <div class="portlet-title">
                                    <div class="caption font-dark">
                                        <i class="icon-settings font-dark"></i>
                                        <span class="caption-subject bold uppercase">Column Reordering</span>
                                    </div>
                                    <div class="tools"> </div>
                                </div>
                                <div class="portlet-body">
                                    <table class="table table-striped table-bordered table-hover" style="text-align:center;" id="sample_1">
                                        <thead>
                                            <tr>
                                                <th style="text-align:center;">SL</th>
                                                <th style="text-align:center;">Country</th>
                                                <th style="text-align:center;">Status</th>
                                                <th style="text-align:center;">Edit</th>
                                                <th style="text-align:center;">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody id="appendcountry">
										<?php
											$j=0;
											while($result=$view_country->fetch_assoc()){
												$j++;
												?>
												<tr>
													<td><?php echo $j;?></td>
													<td><?php echo $result['country_name'];?></td>
													<td><?php echo $result['status'];?></td>
													<td><a href="country_edit/id/<?php echo $result['id']; ?>" class="btn btn-primary">EDIT</a></td>
													<td><button  dataid="<?php echo $result['id']; ?>"  class="btn btn-danger country_delete">DELETE</button></td>
												</tr> 
										<?php
											}
											
											
										?>
										 
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
              </div>
            </div>
					
                  </div>
                </div>
				
				 <!-- page start-->
             
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