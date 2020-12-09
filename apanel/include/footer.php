    <!-- javascripts -->
    
	<script src="js/jquery-ui-1.10.4.min.js"></script>
	<script src="js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="js/jquery-ui-1.9.2.custom.min.js"></script>
    <!-- bootstrap -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/ajax.js"></script>
    <!-- nice scroll -->
    <script src="js/jquery.scrollTo.min.js"></script>
    <script src="js/jquery.nicescroll.js" type="text/javascript"></script>
    <!-- charts scripts -->
    <script src="assets/jquery-knob/js/jquery.knob.js"></script>
    <script src="js/jquery.sparkline.js" type="text/javascript"></script>
    <script src="assets/jquery-easy-pie-chart/jquery.easy-pie-chart.js"></script>
    <script src="js/owl.carousel.js" ></script>
    <!-- jQuery full calendar -->
    <<script src="js/fullcalendar.min.js"></script> <!-- Full Google Calendar - Calendar -->
	<script src="assets/fullcalendar/fullcalendar/fullcalendar.js"></script>
    <!--script for this page only-->
    <script src="js/calendar-custom.js"></script>
	<script src="js/jquery.rateit.min.js"></script>
    <!-- custom select -->
    <script src="js/jquery.customSelect.min.js" ></script>
	<script src="assets/chart-master/Chart.js"></script>
   
    <!--custome script for all page-->
    <script src="js/scripts.js"></script>
	<script src="css/scripts/datatable.js" type="text/javascript"></script>
	<script src="css/datatables/datatables.min.js" type="text/javascript"></script>
     <script src="css/datatables/plugins/bootstrap/datatables.bootstrap.js" type="text/javascript"></script>
	<script src="css/scripts/table-datatables-colreorder.min.js" type="text/javascript"></script>
    <!-- custom script for this page-->
    <script src="js/sparkline-chart.js"></script>
    <script src="js/easy-pie-chart.js"></script>
	<script src="js/jquery-jvectormap-1.2.2.min.js"></script>
	<script src="js/jquery-jvectormap-world-mill-en.js"></script>
	<script src="js/xcharts.min.js"></script>
	<script src="js/jquery.autosize.min.js"></script>
	<script src="js/jquery.placeholder.min.js"></script>
	<script src="js/gdp-data.js"></script>	
	<script src="js/morris.min.js"></script>
	<script src="js/sparklines.js"></script>	
	<script src="js/charts.js"></script>
	<script src="js/jquery.slimscroll.min.js"></script>
	<script type="text/javascript" src="assets/ckeditor/ckeditor.js"></script>
	 
	<!--<script src="assets/js/alertify.js"></script>-->
	<script src="alert/alertify.min.js"></script>
	<script type="text/javascript">
		$(function(){
			
			$("#rootcategory").submit(function(e){
				e.preventDefault();
				
				var rcategory = $('[name="root_category"]').val();
				var cat_status = $('[name="cat_status"]').val();
				var status = $('[name="status"]').val();
				
				
				if(rcategory == ""){
						alertify.error('Input Root Category name');
						return false;
					}
					if(cat_status == ""){
						alertify.error('Select category status');
						return false;
					}
					if(status == ""){
						alertify.error('Select status');
						return false;
					}
					
				$.ajax({
					type:"post",
					url:"post_url/rootcategory.php",
					data:new FormData(this),
					contentType: false,
					cache:false,
					processData:false,
					success:function(res){
						
						if(res == 1){
							alertify.success('Success');
							var namedd= "<tr class='odd gradeX'><td style='text-align:center'></td><td style='text-align:center'>"+rcategory+"</td> <td style='text-align:center'>"+cat_status+"</td><td style='text-align:center'>"+status+"</td><td style='text-align:center'><a class='btn btn-success' href='rootcategory_edit.php?edit='>Edit</a></td><td style='text-align:center'><button class='btn btn-danger'>Delete</button></td> </tr>";
							$("#show_data").append(namedd);
						}else if(res == 2){
							alertify.error('Exist');
						}else{
							alertify.error('Not inserted');
						}
					
					  
					},error:function(){
						alert('Error on Ajax');
					}     
				})
			});
		})
	</script>
	<script>
	$("#update_rcategory").submit(function(e){
		e.preventDefault();
		
		$.ajax({
			type:"post",   
			url:"post_url/rootcategory_update.php",
			data:new FormData(this),
			contentType:false,
			cache:false,
			processData:false,
			success: function(res){
				//alert(res);
				//return false;
				
				if(res == 1){
					alertify.success("Root Category Successfully Updated !!");
					location.href='rootcategory';
				}else if(res == 3){
					alertify.error("Same Root category already Exist!!");
				}else{
					alertify.error("Root Category not updated !!");
				}
			},error: function(){
				alertify.error("Error on Ajax !!");
			}          
		})		
		
	})
	</script>
	
	<script type="text/javascript"> 
		$(".root_delete").click(function(){
			var root_id=$(this).attr('data-id');
			var confirm = alertify.confirm('Are you sure want to delete Root Category.').set('onok', function(closeEvent){  
				//alertify.alert(root_id);
			 var dataString ='rootcate='+root_id;
			 
			 $.ajax({
			  type:"post",
			  url:"post_url/rootcategory_delete.php",
			  data:dataString,
			  success:function(res){
				if(res == '1')
						location.href='rootcategory';
			  }
			  ,error:function(){
			   alert('Error on Ajax');
			  }
			  	  
			 });

		   });
			 confirm.set({'title':'Root Category'});
		});
	</script>
	<script type="text/javascript"> 
		$(".up").click(function(){
			var order_id=$(this).attr('data-id');
			
			var confirm = alertify.confirm('Are you sure want to Accepted.').set('onok', function(closeEvent){  
				//alertify.alert(root_id);
			 var dataString ='order_id='+order_id;
			 
			 $.ajax({
			  type:"post",
			  url:"post_url/orderaccpted.php",
			  data:dataString,
			  success:function(res){
				if(res == '1')
						location.href='processingorder';
			  }
			  ,error:function(){
			   alert('Error on Ajax');
			  }
			  	  
			 });

		   });
			 confirm.set({'title':'Processingorder'});
		});
	</script>
	<script type="text/javascript">
		$(function(){
			
			$("#category").submit(function(e){
				e.preventDefault();
				
				var category = $('[name="root_cat_id"]').val();
				var cat_name = $('[name="cat_name"]').val();
				var cat_status = $('[name="cat_status"]').val();
				
				
				if(category == ""){
						alertify.error('Input Category name');
						return false;
					}
					if(cat_name == ""){
						alertify.error('Select category name');
						return false;
					}
					if(cat_status == ""){
						alertify.error('Select status');
						return false;
					}
					
				$.ajax({
					type:"post",
					url:"post_url/category",
					data:new FormData(this),
					contentType: false,
					cache:false,
					processData:false,
					
					success:function(res){
						
						if(res == 1){
							alertify.success('Success');
						}else if(res == 2){
							alertify.error('Exist');
						}else{
							alertify.error('Not inserted');
						}
					
					  
					},error:function(){
						alert('Error on Ajax');
					}     
				})
			});
		})
	</script>
	<script>
	$("#update_category").submit(function(e){
		e.preventDefault();
		
		//var category = $('[name="h_id"]').val();
		
		//alert(category);
		//return false;
		$.ajax({
			type:"post",   
			url:"post_url/category_update.php",
			data:new FormData(this),
			contentType:false,
			cache:false,
			processData:false,
			success: function(res){

				if(res == 1){
					alertify.success("Category Successfully Updated !!");

				}else if(res == 3){
					alertify.error("Same category already Exist!!");
				}else{
					alertify.success("Category updated !!");
					location.href='category';
				}
			},error: function(){
				alertify.error("Error on Ajax !!");
			}          
		})
		
	})
	</script>
	<script type="text/javascript"> 
		$(".category_delete").click(function(){
			var cate_id=$(this).attr('datacat-id');
			var confirm = alertify.confirm('Are you sure want to delete Category.').set('onok', function(closeEvent){  
				//alertify.alert(root_id);
			 var dataString ='category='+cate_id;
			 
			 $.ajax({
			  type:"post",
			  url:"post_url/category_delete.php",
			  data:dataString,
			  success:function(res){
				if(res == '1')
						location.href='category.php';
			  }
			  ,error:function(){
			   alert('Error on Ajax');
			  }
			  	  
			 });

		   });
			 confirm.set({'title':'Category'});
		});
	</script>
	<script type="text/javascript">
		$(function(){
	   
	   $('[name="cate_name_id"]').on('change',function(e){
		e.preventDefault();
		
		var cate_name_id = $('[name="cate_name_id"]').val();
		
		
		 var dataString ='para='+cate_name_id;
		 
		$.ajax({
		 type:"post",
		 url:"post_url/selectcategory.php",
		 data:dataString,
		 success:function(res){
			//alert(res);
			//return false;
		   //$("#xyz").empty();
		   $("#category_name").html(res);
		 },error:function(){
		  alert('Error on Ajax');
		 }     
		})
	   });
	  })
	</script>
	<script type="text/javascript">
	$(function(){
			
			$("#subcategory").submit(function(e){
				e.preventDefault();
				
				var rot_cat_name = $('[name="cate_name_id"]').val();
				var category_name_id = $('[name="category_name_id"]').val();
				var subcategory_name = $('[name="subcategory_name"]').val();
				var status = $('[name="status"]').val();
				
				
				if(rot_cat_name == ""){
						alertify.error('Select Root Category name');
						return false;
					}
				if(category_name_id == ""){
					alertify.error('Select Category Name');
					return false;
				}
				if(subcategory_name == ""){
					alertify.error('Input SubCategory Name');
					return false;
				}
				if(status == ""){
					alertify.error('Select Status');
					return false;
				}
					
				$.ajax({
					type:"post",
					url:"post_url/subcategory.php",
					data:new FormData(this),
					contentType: false,
					cache:false,
					processData:false,
					success:function(res){
						if(res == 1){
							alertify.success('Success');
							location.href='subcategory';
						}else if(res == 2){
							alertify.error('Exist');
						}else{
							alertify.error('Not inserted');
						}
					
					  
					},error:function(){
						alert('Error on Ajax');
					}     
				})
			});
		})
	</script>
	<script type="text/javascript">
		$(function(){
	   
	   $('[name="cate_name_id"]').on('change',function(e){
		e.preventDefault();
		
		var cate_name_id = $('[name="cate_name_id"]').val();
		
		
		 var dataString ='para_id='+cate_name_id;
		// alert(dataString);
		//return false;
		$.ajax({
		 type:"post",
		 url:"post_url/updateselectcategory.php",
		 data:dataString,
		 success:function(res){
			//alert(res);
			//return false;
		   //$("#xyz").empty();
		   $("#category_name_id").html(res);
		 },error:function(){
		  alert('Error on Ajax');
		 }     
		})
	   });
	  })
	</script>
	<script>
	$("#subcategory_update").submit(function(e){
		e.preventDefault();
		var cate_name_id = $('[name="cate_name_id"]').val();
		var category_name = $('[name="category_name"]').val();
		var subcategory_name = $('[name="subcategory_name"]').val();
		var status = $('[name="status"]').val();

		$.ajax({
			type:"post",   
			url:"post_url/subcategory_update.php",
			data:new FormData(this),
			contentType:false,
			cache:false,
			processData:false,
			success: function(res){
				if(res == '1'){
					alertify.success("SubCategory Successfully Updated !!");
					location.href='subcategory';
				}else if(res == '4'){
					alertify.error("No changes detected !!");
				}else{
					alertify.error("Category not updated !!");
				}
			},error: function(){
				alertify.error("Error on Ajax !!");
			}          
		})		
		
	})
</script>
	<script type="text/javascript">
		$(".subcategory_delete").click(function(){
			var sub_id=$(this).attr('datasub-id');
			var confirm = alertify.confirm('Are you sure want to delete subcategory.').set('onok', function(closeEvent){

				var dataString ='subcategory='+sub_id;

				$.ajax({
					type:"post",
					url:"post_url/subcategory_delete.php",
					data:dataString,
					success:function(res){
						if(res == '1')
							location.href='subcategory';
					}
					,error:function(){
						alert('Error on Ajax');
					}

				});

			});
			confirm.set({'title':'subcategory'});
		});
	</script>
<script type="text/javascript">
	$(function(){
   
   $('[name="root_id"]').on('change',function(e){
	e.preventDefault();
	
	var root_id = $('[name="root_id"]').val();
	
	
	 var dataString ='para_cat='+root_id;
	// alert(dataString);
	//return false;
	$.ajax({
	 type:"post",
	 url:"post_url/selectproduct.php",
	 data:dataString,
	 success:function(res){
		//alert(res);
		//return false;
	   //$("#xyz").empty();
	   $("#category_id").html(res);
	 },error:function(){
	  alert('Error on Ajax');
	 }     
	})
   });
  })
</script>
<script type="text/javascript">
	$(function(){
   
   $('[name="category_name"]').on('change',function(e){
	e.preventDefault();
	
	var category_name = $('[name="category_name"]').val();
	
	
	 var dataString ='para_subcat='+category_name;
	// alert(dataString);
	//return false;
	$.ajax({
	 type:"post",
	 url:"post_url/selectsubproduct.php",
	 data:dataString,
	 success:function(res){
		//alert(res);
		//return false;
	   //$("#xyz").empty();
	   $("#subcate_id").html(res);
	 },error:function(){
	  alert('Error on Ajax');
	 }     
	})
   });
  })
</script>
<script type="text/javascript">
	$(function(){
			
		$("#add_product").submit(function(e){
			e.preventDefault();
			
			var root_id = $('[name="root_id"]').val();
			var category_name = $('[name="category_name"]').val();
			var subcate_name = $('[name="subcate_name"]').val();
			var product_type = $('[name="product_type"]').val();
			var title = $('[name="title"]').val();
			var pcode = $('[name="pcode"]').val();
			var weight = $('[name="weight"]').val();
			var price = $('[name="price"]').val();
			var title_img = $('#title_img').val();
			//var quntity = $('[name="quntity"]').val();
			var imag = $('#upload').val();
			var editor1 = $('[name="editor1"]').val();
			
			if(root_id == ""){
					alertify.error('Select Root Category name');
					return false;
				}
			if(category_name == ""){
				alertify.error('Select Category name');
				return false;
			}
			if(subcate_name == ""){
				alertify.error('Select Sub Category name');
				return false;
			}
			if(product_type == ""){
				alertify.error('Select product type ');
				return false;
			}
			if(title == ""){
				alertify.error('Input Product Name ');
				return false;
			}
			if(pcode == ""){
				alertify.error('Input Product Code ');
				return false;
			}
			if(title_img == ""){
				alertify.error('Upload Title Image ');
				return false;
			}

			if(weight == ""){
				alertify.error('Input weight ');
				return false;
			}
			if(price == ""){
				alertify.error('Input price ');
				return false;
			}
			if(imag == ""){
				alertify.error('Upload Product Image ');
				return false;
			}
			if(editor1 == ""){
				alertify.error('Input Product Summary');
				return false;
			}
				
			$.ajax({
				type:"post",
				url:"post_url/product.php",
				data:new FormData(this),
				contentType: false,
				cache:false,
				processData:false,
				success:function(res){
					//alert(res);
					//return false;
					
						alertify.success('Success');
						location.href='product';
						
				},error:function(){
					alert('Error on Ajax');
				}     
			})
		});
	})
</script>
<script type="text/javascript">
		$(function(){
			
			$("#product_edit").submit(function(e){
				e.preventDefault();
				var root_id = $('[name="root_id"]').val();
				var category_name = $('[name="category_name"]').val();
				var subcate_name = $('[name="subcate_name"]').val();
				var product_type = $('[name="product_type"]').val();
				var title = $('[name="title"]').val();
				var pcode = $('[name="pcode"]').val();
				//var quntity = $('[name="quantity"]').val();
				var weight = $('[name="weight"]').val();
				var price = $('[name="price"]').val();
				var editor = $('#editor').val();
				
				if(root_id == ""){
						alertify.error('Select Root Category name');
						return false;
					}
				if(category_name == ""){
					alertify.error('Select Category name');
					return false;
				}
				if(subcate_name == ""){
					alertify.error('Select Sub Category name');
					return false;
				}
				if(product_type == ""){
					alertify.error('Input product type ');
					return false;
				}
				if(title == ""){
					alertify.error('Input title ');
					return false;
				}
				if(pcode == ""){
					alertify.error('Input Product Code ');
					return false;
				}
				if(weight == ""){
					alertify.error('Input weight ');
					return false;
				}
				if(price == ""){
					alertify.error('Input price ');
					return false;
				}
				if(editor == ""){
					alertify.error('Input Product Summary');
					return false;
				}
				$.ajax({
					type:"post",
					url:"post_url/product_edit.php",
					data:new FormData(this),
					contentType: false,
					cache:false,
					processData:false,
					success:function(res){
						//alert(res);
						//return false;
						alertify.success('success');
						location.href='product';
					},error:function(){
						alert('Error on Ajax');
					}     
				})
			});
		})
</script>
<script type="text/javascript">
		$(function(){
			
			$("#multi_edit").submit(function(e){
				e.preventDefault();
					
				$.ajax({
					type:"post",
					url:"post_url/multi_photo_edit.php",
					data:new FormData(this),
					contentType: false,
					cache:false,
					processData:false,
					success:function(res){

						if(res==1){
							function explode(){
								location.reload();
							}
							setTimeout(explode,200);

						}
					},error:function(){
						alert('Error on Ajax');
					}     
				})
			});
		})
</script>
<script>
	$(function(){
		$(".image_delete").click(function(){
			var id=$(this).attr('imagedel-id');
			//alert(id);
			//return false;
			var confirm = alertify.confirm('Are you sure want to delete Image.').set('onok', function(closeEvent){
			
			 var dataString ='photo_id='+id;
				//alert(id);
				
				$.ajax({
					type:"post",
					url:"post_url/multi_photo_del.php",
					data:dataString,
					success:function(res){
						alertify.success('success');
						//location.href='product.php';

					},error:function(){
						alert('Error on Ajax');
					}     
				})
			} );
			confirm.set({'title':'multi Image'});
		});
		
	});
 
</script>
<script>
	$(function(){
		$(".thana_delete").click(function(){
			var id=$(this).attr('dataid');
			//alert(id);
			//return false;
			var confirm = alertify.confirm('Are you sure want to delete district.').set('onok', function(closeEvent){  
			
			 var dataString ='para2='+id;
				//alert(id);
				
					$.ajax({
						type:"post",
						url:"post_url/thana_delete.php",
						data:dataString,
						success:function(res){
							 
								 if(res==1){
									 location.href='thana';
								 }
						},error:function(){
							alert('Error on Ajax');
						}     
					})
			 
			
			} );
			confirm.set({'title':'Thana'});
		});
		
	});
 
</script>
 <script>
	 $(".product_type_delete").click(function(){
			var id=$(this).attr('dataid');
			//alert(id);
			//return false;
			var confirm = alertify.confirm('Are you sure want to delete Product type.').set('onok', function(closeEvent){  
			
			 var dataString ='para2='+id;
				//alert(id);
				
					$.ajax({
						type:"post",
						url:"post_url/product_delete.php",
						data:dataString,
						success:function(res){
								//alert(res);
								//return false;
								 if(res==1){
									 function explode(){
										 location.reload();
									 }
									 setTimeout(explode,200);
									 
								 }
						},error:function(){
							alert('Error on Ajax');
						}     
					})
			 
			
			} );
			
			confirm.set({'title':'Product type'});
			 
			 
		});
		
</script>
<script>
	$(function(){
		$(".district_delete").click(function(){
			var id=$(this).attr('dataid');
			var confirm = alertify.confirm('Are you sure want to delete district.').set('onok', function(closeEvent){  
			
			 var dataString ='para2='+id;
				//alert(id);
				
					$.ajax({
						type:"post",
						url:"post_url/districtdelete.php",
						data:dataString,
						success:function(res){
								 if(res==1){
									 location.href='district';
								 }
						},error:function(){
							alert('Error on Ajax');
						}     
					})
			 
			
			} );
			confirm.set({'title':'District'});
		});
		
	});
 
</script>
<script>
	 $(".country_delete").click(function(){
			var id=$(this).attr('dataid');
			var confirm = alertify.confirm('Are you sure want to delete country.').set('onok', function(closeEvent){  
			
			 var dataString ='para2='+id;
				//alert(id);
				
					$.ajax({
						type:"post",
						url:"post_url/country_delete.php",
						data:dataString,
						success:function(res){
								 if(res==1){
									 location.href='country';
								 }
						},error:function(){
							alert('Error on Ajax');
						}     
					})
			 
			
			} );
			
			confirm.set({'title':'Country'});
			 
			 
		});
		
</script>
<script type="text/javascript">
		$(function(){
			
			$("#updateproduct").submit(function(e){
				e.preventDefault();
				//alert('dlkjls');
				//return false;
				var typename = $('[name="typename"]').val();
				var hiddenid = $('[name="hiddenid"]').val();
				var status = $('[name="status"]').val();
				 
				 
				//alert(hiddenid);
				//return false;
				if(typename == ""){
						alertify.error('Country name can not be empty !!!');
						return false;
					}
					 
					if(status == ""){
						alertify.error('Select status');
						return false;
					}
					
				$.ajax({
					type:"post",
					url:"post_url/udateproduct.php",
					data:new FormData(this),
					contentType: false,
					cache:false,
					processData:false,
					success:function(res){
						//alert(res);
						//return false;
						if(res == 1){
							alertify.success('success');
							function explode(){
								location.href='product_type';
							}setTimeout(explode,200)
							 
						}else if(res == 6){
							alertify.error('same product already exist!!');
						} 
						else{
							alertify.error('Not inserted');
						}
					
					  
					},error:function(){
						alert('Error on Ajax');
					}     
				})
			});
		})
	</script>
<script type="text/javascript">
		$(function(){
			
			$("#addproduct").submit(function(e){
				e.preventDefault();
				//alert('dlkjls');
				//return false;
				var typename = $('[name="typename"]').val();
				var status = $('[name="status"]').val();
				 
				 
				//alert(status);
				//return false;
				if(typename == ""){
						alertify.error('Country name can not be empty !!!');
						return false;
					}
					 
					if(status == ""){
						alertify.error('Select status');
						return false;
					}
					
				$.ajax({
					type:"post",
					url:"post_url/addproduct.php",
					data:new FormData(this),
					contentType: false,
					cache:false,
					processData:false,
					success:function(res){
						//alert(res);
						//return false;
						if(res == 1){
							alertify.success('success');
							function explode(){
								location.reload();
							}
							setTimeout(explode,200)
							  
						}else if(res == 5){
							alertify.error('Product Type already exit!!!');
						}
						
						else{
							alertify.error('Not inserted');
						}
					
					  
					},error:function(){
						alert('Error on Ajax');
					}     
				})
			});
		})
	</script>

	<script type="text/javascript">
		$(function(){
			
			$('[name="country"]').on('change',function(e){
				e.preventDefault();
				//alert('dlkjls');
				//return false;
				var country = $('[name="country"]').val();
				//alert(country);
				//return false;
				if(country == ""){
						alertify.error('Select Country name');
						return false;
					}
					var dataString ='para='+country;
				$.ajax({
					type:"post",
					url:"post_url/selectdistrict.php",
					data:dataString,
					success:function(res){
							//$("#xyz").empty();
							$("#xyz").html(res);
					},error:function(){
						alert('Error on Ajax');
					}     
				})
			});
		})
	</script>
	<script type="text/javascript">
		$(function(){
			
			$("#updatecountry").submit(function(e){
				e.preventDefault();
				//alert('dlkjls');
				//return false;
				var countryname = $('[name="countryname"]').val();
				var countryid = $('[name="countryid"]').val();
				var status = $('[name="status"]').val();
				 
				 
				//alert(countryid);
				//return false;
				if(countryname == ""){
						alertify.error('Country name can not be empty !!!');
						return false;
					}
					 
					if(status == ""){
						alertify.error('Select status');
						return false;
					}
					
				$.ajax({
					type:"post",
					url:"post_url/update_country.php",
					data:new FormData(this),
					contentType: false,
					cache:false,
					processData:false,
					success:function(res){
						//alert(res);
						//return false;
						if(res == 1){
							 location.href='country';
						}else if(res == 7){
							alertify.error('Country already exit!!!');
						}
						
						else{
							alertify.error('Not inserted');
						}
					
					  
					},error:function(){
						alert('Error on Ajax');
					}     
				})
			});
		})
	</script>
	<script type="text/javascript">
		$(function(){
			
			$("#updatethana").submit(function(e){
				e.preventDefault();
				//alert('dlkjls');
				//return false;
				var country = $('[name="country"]').val();
				var selectdistrict = $('[name="selectdistrict"]').val();
				var thananame = $('[name="thananame"]').val();
				var status = $('[name="status"]').val();
				var hidenid = $('[name="hidenid"]').val();
				 
				//alert(selectdistrict);
				//return false;
				  	$.ajax({
					type:"post",
					url:"post_url/update_thana.php",
					data:new FormData(this),
					contentType: false,
					cache:false,
					processData:false,
					success:function(res){
						//alert(res);
						//return false;
						if(res == 1){
							 location.href='thana';
							 
						}else if(res == 8){
							alertify.error('Same Thana already exist!!!');
						}
						else{
							alertify.error('Not inserted');
						}
					
					  
					},error:function(){
						alert('Error on Ajax');
					}     
				})
			});
		})
	</script>
	<script type="text/javascript">
		$(function(){
			
			$("#addthana").submit(function(e){
				e.preventDefault();
				//alert('dlkjls');
				//return false;
				var country = $('[name="country"]').val();
				var selectdistrict = $('[name="selectdistrict"]').val();
				var thananame = $('[name="thananame"]').val();
				var status = $('[name="status"]').val();
				 
				//alert(status);
				//return false;
				if(country == ""){
						alertify.error('select Country name');
						return false;
					}
					if(selectdistrict == ""){
						alertify.error('select District name');
						return false;
					}
					if(thananame == ""){
						alertify.error('input thananame');
						return false;
					}
					if(status == ""){
						alertify.error('Select status');
						return false;
					}
					
				$.ajax({
					type:"post",
					url:"post_url/addthana.php",
					data:new FormData(this),
					contentType: false,
					cache:false,
					processData:false,
					success:function(res){
						//alert(res);
						//return false;
						if(res == 1){
							 function explode(){
								 location.reload();
							 }
							 setTimeout(explode,200);
						}else if(res == 5){
							alertify.error('Thana already exist');
						}
						else{
							alertify.error('Not inserted');
						}
					
					  
					},error:function(){
						alert('Error on Ajax');
					}     
				})
			});
		})
	</script>
	<script type="text/javascript">
		$(function(){
			
			$("#editdistrict").submit(function(e){
				e.preventDefault();
				//alert('dlkjls');
				//return false;
				var country_edit = $('[name="country_edit"]').val();
				var hiddenid = $('[name="hiddenid"]').val();
				var districtedit = $('[name="districtedit"]').val();
				var statusedit = $('[name="statusedit"]').val();
				 
				//alert(hiddenid);
				//return false;
				 
				$.ajax({
					type:"post",
					url:"post_url/updatedistrict.php",
					data:new FormData(this),
					contentType: false,
					cache:false,
					processData:false,
					success:function(res){
						//alert(res);
						//return false;
						if(res == 1){
							 location.href='district';
						}else if(res == 9){
							alertify.error('same district already exist');
						}
						else{
							alertify.error('Not inserted');
						}
					
					  
					},error:function(){
						alert('Error on Ajax');
					}     
				})
			});
		})
	</script>
	<script type="text/javascript">
		$(function(){
			
			$("#adddistrict").submit(function(e){
				e.preventDefault();
				//alert('dlkjls');
				//return false;
				var country_name = $('[name="country_name"]').val();
				var districtname = $('[name="districtname"]').val();
				var status = $('[name="status"]').val();
				 
				//alert(status);
				//return false;
				if(country_name == ""){
						alertify.error('Select Country name');
						return false;
					}
					if(districtname == ""){
						alertify.error('Input District name');
						return false;
					}
					if(status == ""){
						alertify.error('Select status');
						return false;
					}
					
				$.ajax({
					type:"post",
					url:"post_url/adddistrict.php",
					data:new FormData(this),
					contentType: false,
					cache:false,
					processData:false,
					success:function(res){
						//alert(res);
						//return false;
						if(res == 1){ 
							alertify.success('Success');
							function explode(){
								location.reload();
							}
							setTimeout(explode,200);
						}else if(res == 6){
							alertify.error('district already exist!!!');
						}
						else{
							alertify.error('Not inserted');
						}
					
					  
					},error:function(){
						alert('Error on Ajax');
					}     
				})
			});
		})
	</script>
	
	
	<script type="text/javascript">
		$(function(){
			
			$("#addcountry").submit(function(e){
				e.preventDefault();
				//alert('dlkjls');
				//return false;
				var countryname = $('[name="countryname"]').val();
				var status = $('[name="status"]').val();
				 
				//alert(status);
				//return false;
				if(countryname == ""){
						alertify.error('Input Root Category name');
						return false;
					}
					if(status == ""){
						alertify.error('Select status');
						return false;
					}
					
				$.ajax({
					type:"post",
					url:"post_url/addcountry.php",
					data:new FormData(this),
					contentType: false,
					cache:false,
					processData:false,
					success:function(res){
						//alert(res);
						//return false;
						if(res == 1){
						 
							alertify.success('Success');
							
							function explode(){
							   location.reload();
							}
							setTimeout(explode, 200);
							
							
						}else if(res = 5){
							alertify.error('Country already exist!!!');
						}
						else{
							alertify.error('Not inserted');
						}
					
					  
					},error:function(){
						alert('Error on Ajax');
					}     
				})
			});
		})
	</script>
	<script type="text/javascript"> 
		$(".slider_delete").click(function(){
			var root_id=$(this).attr('slide_id');
			//alert(root_id);
			//return false;
			var confirm = alertify.confirm('Are you sure want to delete Slider image.').set('onok', function(closeEvent){  
				//alertify.alert(root_id);
			 var dataString ='slider='+root_id;
			 
			 $.ajax({
			  type:"post",
			  url:"post_url/slider_delete.php",
			  data:dataString,
			  success:function(res){
				location.href='addslider';
			  }
			  ,error:function(){
			   alert('Error on Ajax');
			  }
			  	  
			 });

		   });
			 confirm.set({'title':'Slider Image'});
		});
	</script>
	
	
	<script type="text/javascript">
		$(function(){
			
			$("#addslider").submit(function(e){
				e.preventDefault();
				//alert('fghfg');
				//return false;
				var sliderimage = $('[name="sliderimage"]').val();
				 
				var status = $('[name="status"]').val();
				
				//alert(status);
				//return false;
				if(sliderimage == ""){
						alertify.error('select image');
						return false;
					}
		
					if(status == ""){
						alertify.error('Select status');
						return false;
					}
					
				$.ajax({
					type:"post",
					url:"post_url/addslider.php",
					data:new FormData(this),
					contentType: false,
					cache:false,
					processData:false,
					success:function(res){
						//alert(res);
						//return false;
						if(res == 1){
							alertify.success('Success');
							 location.href='addslider';
						} 
						else{
							alertify.error('Not inserted');
						}
					
					  
					},error:function(){
						alert('Error on Ajax');
					}     
				})
			});
		})
	</script>
	<script>
	$(function(){
		$("#signout").click(function(e){
			e.preventDefault();
			//alert('ok');
			$.ajax({
				type:'post',
				url:'post_url/signout.php',
				success:function(res){
					//alert(res);
					if(res == '1'){
						location.href='index';
					}else{
						alertify.error('Error on Logout');
					}
				}
			})
		});
	})
	</script>


  </body>
</html>
