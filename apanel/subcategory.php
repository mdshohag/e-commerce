<?php
 include('include/header.php'); 
 if(!isset($_SESSION['admin_id'])){
       // echo "<script>alert('Session not found');</script>";
		echo "<script>location.href='index.php';</script>";
	}
 $data = $cls_category->view_data();
 $sub_data = $cls_subcategory->sub_category_view();
 

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
                                      <form class="form-horizontal" id="subcategory">
                                          <!-- Title -->
										  <div class="form-group">
                                            <label class="control-label col-lg-2">Root Category</label>
                                            <div class="col-lg-10">                               
                                                <select class="form-control" name="cate_name_id" id="cat">
                                                 <option value="" selected>Select</option>
												 <?php while($row = $data->fetch_assoc()) {?>
												 
												  <option value="<?php echo $row['id']; ?>"><?php echo $row['root_cat_name']; ?></option>
												  
												 <?php } ?>
                                                </select>  
                                            </div>
                                          </div>  
										  <div class="form-group">
                                            <label class="control-label col-lg-2">Category</label>
                                            <div class="col-lg-10">                               
                                                <select class="form-control" name="category_name_id" id="category_name">
                                                
                                                </select>  
                                            </div>
                                          </div>
                                          <div class="form-group">
                                            <label class="control-label col-lg-2" for="title">Sub Category Name</label>
                                            <div class="col-lg-10"> 
                                              <input type="text" name="subcategory_name" class="form-control" id="title">
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
												<input type="submit" name="save" class="btn btn-primary" value="Submit">
											 </div>
                                          </div>
                                      </form>
                                    </div>
                  

                  </div>
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
										<th> Root Category </th>
										<th> Category </th>
										<th> Sub Category </th>
										<th> Status </th>
										<th> Edit </th>
										<th> Delete </th>
									</tr>
								</thead>
								<tbody>
									<?php while($data_row = $sub_data->fetch_assoc()){ ?>
									<tr>
										<td><?php echo $data_row['id']; ?></td>
										<td><?php echo $data_row['root_cat_name']; ?></td>
										<td> <?php echo $data_row['cat_name']; ?> </td>
										<td> <?php echo $data_row['subcat_name']; ?> </td>
										<td> <?php echo $data_row['status']; ?> </td>
										<td ><a class="btn btn-success" href="subcategory_edit/edit/<?php echo $data_row['id']; ?>">Edit</a></td>
										<td ><button datasub-id="<?php echo $data_row['id']; ?>" class="btn btn-danger subcategory_delete">Delete</button></td>
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