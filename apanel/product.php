<?php
 include('include/header.php'); 
  if(!isset($_SESSION['admin_id'])){
       // echo "<script>alert('Session not found');</script>";
		echo "<script>location.href='index.php';</script>";
	}
 $data = $cls_productmanage->view_rootcategory();
 $prot_data = $cls_productmanage->view_producttype();
 $pro_data = $cls_productmanage->product_view();
 
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
                  <div class="pull-left">Product Manage</div>
                    
                  <div class="clearfix"></div>
                </div>
                <div class="panel-body">
                  <div class="padd">
                    
                      <div class="form quick-post">
						  <!-- Edit profile form (not working)-->
						<form class="form-horizontal" id="add_product" style="color:black;text-style:bold;" method="post" enctype="multipart/form-data">
							<div class="form-group">
							   <label class="control-label col-lg-2" for="title">Root Category <span style="color:red;">*</span></label>
								<div class="col-lg-10">                               
									<select class="form-control" name="root_id" id="root_cat">
										<option value="" selected>Select</option>
										
										<?php while($rot_row = $data->fetch_assoc()){?>
										<option value="<?php echo $rot_row['id']; ?>"><?php echo $rot_row['root_cat_name']; ?></option>
										
										<?php }?>
										
									</select> 
								</div>
							  </div>
							  <div class="form-group">
							   <label class="control-label col-lg-2" for="title">Category <span style="color:red;">*</span></label>
								<div class="col-lg-10">                               
									<select class="form-control" name="category_name" id="category_id">
										
									</select> 
								</div>
							  </div>
							  <div class="form-group">
							   <label class="control-label col-lg-2" for="title">Sub Category <span style="color:red;">*</span></label>
								<div class="col-lg-10">                               
									<select class="form-control" name="subcate_name" id="subcate_id">
										
									</select> 
								</div>
							  </div>  
							  <div class="form-group">
							   <label class="control-label col-lg-2" for="title">Product Type <span style="color:red;">*</span></label>
								<div class="col-lg-10">                               
									<select class="form-control" name="product_type" >
										<option value="" selected>Select</option>
										
										<?php while($pt_row = $prot_data->fetch_assoc()){?>
										<option value="<?php echo $pt_row['id']; ?>"><?php echo $pt_row['typename']; ?></option>
										
										<?php }?>
										
									</select> 
								</div>
							  </div> 
							  <div class="form-group">
							   <label class="control-label col-lg-2" for="title">Product Name<span style="color:red;">*</span></label>
								<div class="col-lg-10">                               
									<input type="text" name="title" class="form-control" id="title">
								</div>
							  </div>  
							  <div class="form-group">
							   <label class="control-label col-lg-2" for="title">Product Code<span style="color:red;">*</span></label>
								<div class="col-lg-10">                               
									<input type="text" name="pcode" class="form-control" id="title">
								</div>
							  </div>
							  <div class="form-group">
							   <label class="control-label col-lg-2" for="title">Title Image <span style="color:red;">*</span></label>
								<div class="col-lg-10">                               
									<input type="file" name="title_img" id="title_img">
								</div>
							  </div>
							  <div class="form-group">
							   <label class="control-label col-lg-2">Quantity</label>
								<div class="col-lg-10">                               
									<input type="text" name="quntity" class="form-control">
								</div>
							  </div> 
							  <div class="form-group">
							   <label class="control-label col-lg-2">Weight<span style="color:red;">*</span></label>
								<div class="col-lg-10">                               
									<input type="text" name="weight" class="form-control">
								</div>
							  </div>  
							  <div class="form-group">
							   <label class="control-label col-lg-2">Price<span style="color:red;">*</span></label>
								<div class="col-lg-10">                               
									<input type="text" name="price" onkeypress="return OnlyNumberKey(event);" class="form-control">
									
								</div>
							  </div> 
							  <div class="form-group">
							   <label class="control-label col-lg-2" for="title">Discount(%)</label>
								<div class="col-lg-10">                               
									<input type="text" name="discount" class="form-control" id="title">
								</div>
							  </div>
							  <div class="form-group">
							   <label class="control-label col-lg-2" for="title">Product Image(3)<span style="color:red;">*</span></label>
								<div class="col-lg-10"> 
									<input id='upload' name="upload[]" type="file" multiple="multiple">
								</div>
							  </div>
								<div class="form-group">
								  <label class="control-label col-sm-2">Product Summary<span style="color:red;">*</span></label>
								  <div class="col-sm-10">
									  <textarea class="form-control" name="editor1" rows="4"></textarea>
								  </div>
								</div>
								<div class="form-group">
								  <label class="control-label col-sm-2">Terms Condition</label>
								  <div class="col-sm-10">
									  <textarea name="termscon" class="form-control" rows="3"></textarea>
								  </div>
								</div>
								
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
										<th> SubCategory </th>
										<th> Title </th>
										<th> Image </th>
										<th> Multiple Image Edit </th>
										<th> Edit </th>
										<th> Delete </th>
									</tr>
								</thead>
								<tbody>
									<?php while($data_row = $pro_data->fetch_assoc()){ ?>
									<tr>
										<td><?php echo $img = $data_row['id']; ?></td>
										<td><?php echo $data_row['root_cat_name']; ?></td>
										<td> <?php echo $data_row['cat_name']; ?> </td>
										<td> <?php echo $data_row['subcat_name']; ?> </td>
										<td> <?php echo $data_row['title']; ?> </td>
										
										<td> 
										
											<?php 
											 $data_img = $cls_productmanage->book_page_view_image($img);
											
											while($imag = $data_img->fetch_assoc()){ 
											
											$imag_id = $imag['id']; 
											
											?>
											
											<img src="uploaded/<?php echo $imag['photo']; ?>" width="40" height="30"/>
											
											<?php } ?>
										</td>
										<td>
										<a class="btn btn-primary" href="multi_photo/edit/<?php echo $data_row['id']; ?>">Multiple Image Edit </a>
										</td>
										
										<td ><a class="btn btn-success" href="product_edit/edit/<?php echo $data_row['id']; ?>">Edit</a></td>
										<td ><button datapro-id="<?php echo $data_row['id']; ?>" class="btn btn-danger product_delete">Delete</button></td>
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