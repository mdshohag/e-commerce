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
 $prot_data = $cls_productmanage->view_producttype();
 $data = $cls_productmanage->view_rootcategory();
 
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
                  <div class="pull-left">Product Update</div>
                    
                  <div class="clearfix"></div>
                </div>
                <div class="panel-body">
                  <div class="padd">
                    
                      <div class="form quick-post">
						  <!-- Edit profile form (not working)-->
						<form class="form-horizontal" id="product_edit" style="color:black;text-style:bold;" method="post" enctype="multipart/form-data">
							<div class="form-group">
							   <label class="control-label col-lg-2" for="title">Root Category <span style="color:red;">*</span></label>
								<div class="col-lg-10">                               
									<select class="form-control" name="root_id" id="root_cat">
										<option value="<?php echo $data_row['rootcat_id']; ?>" selected><?php echo $data_row['root_cat_name']; ?></option>
										
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
										 <option value="<?php echo $data_row['cat_id']; ?>" selected><?php echo $data_row['cat_name']; ?></option>
										 
									</select> 
								</div>
							  </div>
							  <div class="form-group">
							   <label class="control-label col-lg-2" for="title">Sub Category <span style="color:red;">*</span></label>
								<div class="col-lg-10">
									<select class="form-control" name="subcate_name" id="subcate_id">
										<option value="<?php echo $data_row['subcat_id']; ?>" selected><?php echo $data_row['subcat_name']; ?></option>
										
									</select> 
								</div>
							  </div>  
							  <div class="form-group">
							   <label class="control-label col-lg-2" for="title">Product Type <span style="color:red;">*</span></label>
								<div class="col-lg-10">                               
									<select class="form-control" name="product_type" >
										<option value="<?php echo $data_row['pro_type']; ?>" selected>
										<?php echo $data_row['typename']; ?></option>
									
									<?php while($pt_row = $prot_data->fetch_assoc()){?>
									
									<option value="<?php echo $pt_row['id']; ?>"><?php echo $pt_row['typename']; ?></option>
										
										<?php }?>
										
									</select> 
								</div>
							  </div> 
							  <div class="form-group">
							   <label class="control-label col-lg-2" for="title">Product Name<span style="color:red;">*</span></label>
								<div class="col-lg-10">                               
									<input type="text" value="<?php echo $data_row['title']; ?>" name="title" class="form-control" id="title">
									<input type="hidden" value="<?php echo $data_row['id']; ?>" name="hidden_id">
								</div>
							  </div>
							  <div class="form-group">
							   <label class="control-label col-lg-2" for="title">Product Code<span style="color:red;">*</span></label>
								<div class="col-lg-10">                               
									<input type="text" value="<?php echo $data_row['pcode']; ?>" name="pcode" class="form-control" id="title">
								</div>
							  </div>
							  <div class="form-group">
							   <label class="control-label col-lg-2" for="title">Quantity</label>
								<div class="col-lg-10">                               
									<input type="text" value="<?php echo $data_row['quantity']; ?>" name="quantity" class="form-control" id="title">
								</div>
							  </div>
							  <div class="form-group">
							   <label class="control-label col-lg-2" for="title">Weight Code<span style="color:red;">*</span></label>
								<div class="col-lg-10">                               
									<input type="text" value="<?php echo $data_row['weight']; ?>" name="weight" class="form-control" id="title">
								</div>
							  </div>
							  <div class="form-group">
							   <label class="control-label col-lg-2">Price<span style="color:red;">*</span></label>
								<div class="col-lg-10">                               
									<input type="text" value="<?php echo $data_row['price']; ?>" name="price" class="form-control">
								</div>
							  </div> 
							  <div class="form-group">
							   <label class="control-label col-lg-2">Discount(%)</label>
								<div class="col-lg-10">                               
									<input type="text" name="discount" value="<?php echo $data_row['discount_price']; ?>" class="form-control" id="title">
								</div>
							  </div>
							  <div class="form-group">
							   <label class="control-label col-lg-2" >Title Image<span style="color:red;">*</span></label>
								<div class="col-lg-10"> 
									<img src="title_image/<?php echo $data_row['image'];?>" style="height:50px;weight:60px;"/>
									<input type="file" name="title_img" id="title_img">
								</div>
							  </div>
								<div class="form-group">
								  <label class="control-label col-sm-2">Product Summary<span style="color:red;">*</span></label>
								  <div class="col-sm-10">
									  <textarea class="form-control" name="editor" id="editor" rows="3"><?php echo $data_row['book_summary']; ?></textarea>
								  </div>
								</div>
								<div class="form-group">
								  <label class="control-label col-sm-2">Terms Condition</label>
								  <div class="col-sm-10">
									  <textarea class="form-control" name="termscon" rows="3"><?php echo $data_row['terms_condition']; ?></textarea>
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