<!DOCTYPE html>
<html dir="ltr" lang="en">
<head>
<meta charset="UTF-8" />
<title>Administration</title>

<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
<script type="text/javascript" src="javascript/jquery/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="javascript/bootstrap/js/bootstrap.min.js"></script>
<link href="css/opencart.css" type="text/css" rel="stylesheet" />
<link href="css/font-awesome.min.css" type="text/css" rel="stylesheet" />
<link href="css/summernote.css" rel="stylesheet" />

<link type="text/css" href="css/stylesheet.css" rel="stylesheet" media="screen" />
 <!-- Alertify -->
  <link rel="stylesheet" href="assets/css/alertify.bootstrap.css">
  <link rel="stylesheet" href="assets/css/alertify.core.css">
  <link rel="stylesheet" href="assets/css/alertify.default.css">
</head>
<body>
<div id="container">
<header id="header" class="navbar navbar-static-top">
  <div class="navbar-header">
  <a href="http://bioscopebd.com/" class="navbar-brand"><img src="view/image/logo.png" alt="bioscopebd" title="DCIT e-commerce" /></a></div>
  </header>
<div id="content">
  <div class="container-fluid"><br />
    <br />
    <div class="row">
      <div class="col-sm-offset-4 col-sm-4">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h1 class="panel-title"><i class="fa fa-lock"></i> Please enter your login details.</h1>
          </div>
          <div class="panel-body">
         <form id="login" class="login-form" method="post">
              <div class="form-group">
                <label for="input-username">Username </label>
                <div class="input-group"><span class="input-group-addon"><i class="fa fa-user"></i></span>
                  <input type="text" name="username" value="" placeholder="Username" id="email" class="form-control" />
                </div>
              </div>
              <div class="form-group">
                <label for="input-password">Password</label>
                <div class="input-group"><span class="input-group-addon"><i class="fa fa-lock"></i></span>
                  <input type="password" name="password" value="" placeholder="Password" id="pass" class="form-control" />
                </div>
          <span class="help-block"><a href="#">Forgotten Password</a></span>
                              </div>
              <div class="text-right">
                <button type="submit" class="btn btn-primary"><i class="fa fa-key"></i> Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<footer id="footer"><a target="_blank" href="http://www.dcitltd.com">DCIT</a> &copy; 2016 All Rights Reserved.<br />
</footer>
</div>
<script src="js/jquery.js"></script>
	<script src="assets/js/alertify.js"></script>
	<script src="assets/js/alertify.min.js"></script>
<script>
	$(document).ready(function(){
		$("#login").submit(function(e){
			e.preventDefault();
			
			var email = $("#email").val();
			var pass = $("#pass").val();
			
			var dataString = 
			'para_email='+email+
			'&para_pass='+pass;
		
			
			if(email == ""){
				alertify.error('Email field is empty');
				return false;
			}		
			
			if(pass == ""){
				alertify.error('Password field is empty');
				return false;
			}		
			
			$.ajax({
				type:'post',
				url:'post_url/admin_login.php',
				data:dataString,
				success:function(res){
					//alert(res);
					//return false;
					
					if(res == 'no'){
						alertify.error('Username or Password does not match !!');
						return false;
					}
					location.href='dashboard';
				}
			})
			
		});
	});
	</script>
</body></html>