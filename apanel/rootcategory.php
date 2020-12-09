<?php
 include('include/header.php');
  if(!isset($_SESSION['admin_id'])){
       // echo "<script>alert('Session not found');</script>";
		echo "<script>location.href='index.php';</script>";
	}
 $data = $cls_root_category->view_data();
 
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
						<li><i class="fa fa-laptop"></i>Root category</li>						  	
					</ol>
				</div>
			</div>
            
          
		
		<div class="row">
				 <div class="col-md-10 col-md-offset-1 portlets">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <div class="pull-left">Root Category Manage</div>
                    
                  <div class="clearfix"></div>
                </div>
                <div class="panel-body">
                  <div class="padd">
                    
                      <div class="form quick-post">
                                      <!-- Edit profile form (not working)-->
                                      <form class="form-horizontal" id="rootcategory" method="post">
                                          <!-- Title -->
                                          <div class="form-group">
                                            <label class="control-label col-lg-2" for="title">Root Category Name</label>
                                            <div class="col-lg-10"> 
                                              <input type="text" name="root_category" class="form-control" >
                                            </div>
                                          </div>
                                          <div class="form-group">
                                            <label class="control-label col-lg-2">Category Status</label>
                                            <div class="col-lg-10">                               
                                                <select name="cat_status" class="form-control">
                                                 <option value="" selected>Select</option>
												  <option value="Yes">Yes</option>
												  <option value="No">No</option>
                                                </select>  
                                            </div>
                                          </div>     
										  <div class="form-group">
                                            <label class="control-label col-lg-2">Status</label>
                                            <div class="col-lg-10">                               
                                                <select name="status" class="form-control">
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
												<input type="submit" name="save" class="btn btn-primary" value="Submit">
											 </div>
                                          </div>
                                      </form>
                                    </div>
                  

                  </div>
                  <div class="widget-foot">
                    <div class="row">
                        <div class="col-md-12"><br>
                            <!-- BEGIN EXAMPLE TABLE PORTLET-->
                            <div class="portlet light bordered">
                                <div class="portlet-title">
                                    <div class="caption font-dark">
                                        <i class="icon-settings font-dark"></i>
                                        
                                    </div>
                                </div>
                                <div class="portlet-body">
                                    <table class="table table-striped table-bordered table-hover table-checkable order-column" id="sample_1">
                                        <thead>
                                            <tr>
												<th style="text-align:center">SL</th>
												<th style="text-align:center">Root Category</th>
                                                <th style="text-align:center">Category Status</th>
												<th style="text-align:center">Root Category Status</th>
												<th style="text-align:center">Edit</th>
												<th style="text-align:center">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody id="show_data">
										<?php while($row = $data->fetch_assoc()){ ?>
                                            <tr class="odd gradeX">
												<td style="text-align:center"><?php echo $row['id']; ?></td>
                                                <td style="text-align:center"><?php echo $row['root_cat_name']; ?></td>
                                                <td style="text-align:center"><?php echo $row['cat_status']; ?></td>
                                                <td style="text-align:center"><?php echo $row['status']; ?></td>
												<td style="text-align:center"><a class="btn btn-success" href="rootcategory_edit/edit/<?php echo $row['id']; ?>">Edit</a></td>
												<td style="text-align:center"><button data-id="<?php echo $row['id']; ?>" class="btn btn-danger root_delete">Delete</button></td>
                                            </tr>
										<?php } ?>
                                        </tbody>

                                            
										</tbody>
                                    </table>
                                </div>
                            </div>
                            <!-- END EXAMPLE TABLE PORTLET-->
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