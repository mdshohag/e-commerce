<?php
	include('include/header.php');
	
?>
   
<div class="container">
	<div class="full-page" style="background-color:#FFFFFF;">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
				<center style="padding:30px;"><h1>Contact Information</h1></center>
				</div>
				<div class="col-md-6" style="padding-left:30px;">
					<div class="col_w450 float_l">
					<h2><strong>Quick Contact Form</strong></h2>
					<div id="cp_contact_form">
					
						<form method="post" name="contact" action="sendmail.php">
		
							<label for="author">Name:</label> 
							<input name="name" spellcheck="true" type="text" class="required input_field" id="name" maxlength="40" required />
						  <div class="cleaner h10"></div>
							<label for="email">Email:</label>
							<input name="email" type="text" class="validate-email required input_field" id="email" maxlength="40" required />
							<div class="cleaner h10"></div>
							<label for="author">Phone:</label>
							<input name="phone" spellcheck="true" type="text" class="required input_field" id="phone" maxlength="40" required />
							<div class="cleaner h10"></div>
							<label for="subject">Subject:</label> 
					  <input name="sub" type="text" class="validate-subject required input_field" id="sub" maxlength="80" required/>
						  <div class="cleaner h10"></div> 
		
							<label for="text">Message:</label> 
					<textarea id="messege" name="messege" rows="0" cols="0" required class="required"></textarea>
							<div class="cleaner h10"></div>                
		
							<input type="submit" value="Send" id="submit" name="sa" class="btn btn-primary" />
							<input type="reset" value="Reset" id="reset" name="reset" class="btn btn-default" />
		
						</form>
		
					</div>
				</div>
				</div>

				<div class="col-md-6" style="padding-right:30px;">
					<div class="col_w450 float_r" id="map">
				

						<div class="cleaner h30"></div>
										
						<h2><strong>Our Address</strong></h2>
						<h4><strong>AL JADEED FASHION <small>LLC</small></strong></h4>
						<p><b>Head Office:Opp Bhuri Masjid</b><br />
						Al Zarouni Bulding<br />
						  Shop#36<br />
							Deira Dubai-U.A.E<br>
						<b>Email:</b> aljadeedfashion2020@gmail.com,<br>
							rashel_pervez@yahoo.com
						<br />
						<br />
						
						<b>Tel:</b> 04 2724569<br />
					
					<b>P.O.Box:</b> 378539 <br>
					<b>Rshel:</b>	055 2249972<br>
					<b>Shaheen:</b>	055 9393146
						</p>
						<p>&nbsp;</p>
						<p>&nbsp;</p>
						<p> <br />
					</p>
				  </div>		
				</div>
				<div class="col-md-12">
				<center style="padding-right:25px;">
					<h3>Our Location</h3>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57775.70515904532!2d55.2470897203685!3d25.170100063160625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai+-+United+Arab+Emirates!5e0!3m2!1sen!2sbd!4v1472363153955" width="1100" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
				</center>
				</div>
			</div>
		</div>		
	</div>		
</div>		

<?php
	include('include/footer.php');
?>