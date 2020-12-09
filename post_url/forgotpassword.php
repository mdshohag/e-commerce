<?php
	require_once('../functions/cls_dbconfig.php');
	function __autoload($classname){
	  require_once("../functions/$classname.class.php");
	}
	
	$db = new cls_dbconfig();
	$cls_customer_login = new cls_customer_login();
	
	
	
	$email = htmlspecialchars($_REQUEST['email_name'], ENT_QUOTES, 'UTF-8');
	
	$cls_customer = $cls_customer_login->forgotpassword($email);
		
	$row = $cls_customer->fetch_assoc();
	
	$id = $row['id'];
	$name = $row['fullname'];
	
	
$sender = "liton@dcitltd.com";
$mobile = $phone;
$complain = "These are your requested PIN to be member";
$messages = $imp;

$message = '<!DOCTYPE HTML>'. 
'<head>'. 
'<meta http-equiv="content-type" content="text/html">'.
'<title>Email notification</title>'. 
'</head>'. 
'<body>'.
'<div style="background:#f6f6f6;color:#383838">'.
	'<div class="adM">'.
      '</div>'.
		'<table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%">'.
           '<tbody>'.
			'<tr>'.
               '<td style="padding:20px 0 20px 0" align="center" valign="top">'.
                   '<table style="border:1px solid #e0e0e0" bgcolor="FFFFFF" border="0" cellpadding="10" cellspacing="0" width="650">'.
                        
					'<tbody>'.
					'<tr>'.
					   ' <td valign="top">'.
							'<a style="font-size:20px;color:#383838;text-decoration:none" href="http://bioscopebd.com/" target="_blank" >'.
							'<img class="CToWUd" src="img/bb.png" alt="Bagdoom.com" style="margin-bottom:10px" height="100px" border="0">'.
							'</a>'.
							'<span>'.
								'<p>Hotline : +88 02 96 68 170<p>'.
							'</span>'.
						'</td>'.
                        '</tr>'.
                        '<tr>'.
                            '<td valign="top">'.
                                '<h1 style="font-size:22px;font-weight:normal;line-height:22px;margin:0 0 11px 0">'.'Dear md shohag,'.'</h1>'.
                                '<p style="font-size:12px;line-height:16px;margin:0 0 8px 0">'.'There was recently a request to change the password for your account.'.'</p>'.
                                '<p style="font-size:12px;line-height:16px;margin:0">'.'If you requested this password change, please click on the following link to reset your password:'.' <a href="http://bioscopebd.com/customer/resetpassword/?id=" style="color:#1e7ec8" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://bioscopebd.com//customer/id">'.'</a>'.'</p>'.
                               ' <p style="font-size:12px;line-height:16px;margin:0">'.'If clicking the link does not work, please copy and paste the URL into your browser instead.'.'</p>'.
                                '<br>'.
                                '<p style="font-size:12px;line-height:16px;margin:0">'.'If you did not make this request, you can ignore this message and your password will remain the same.'.'</p>'.
                            '</td>'.
                        '</tr>'.
                        '<tr>'.
                           '<td align="center" bgcolor="#FFFFFF">'.'<center>'.'<p style="font-size:12px;margin:0">'.'© 2016 bioscopebd'.'</p>'.'</center>'.'</td>'.
                        '</tr>'.
						'</tbody>'.
						'</table>'.
					'</td>'.
				'</tr>'.
			'</tbody>'.
		'</table>'.
		'<div class="yj6qo">'.'</div>'.
		'<div class="adL">'.
		'</div>'.
	'</div>'.

'</body>'; 
/*EMAIL TEMPLATE ENDS*/ 

$to      = "shohag.31291@gmail.com";             // give to email address 
$subject = "Forget Password";  //change subject of email 
$from    = "bioscopebd@bioscopebd.com.bd";                           // give from email address

$headers  = "From: " . $from . "\r\n"; 
$headers .= "Reply-To: ". $from . "\r\n"; 
$headers .= "CC: liton@dcitltd.com\r\n"; 
$headers .= "MIME-Version: 1.0\r\n"; 
$headers .= "Content-Type: text/html; charset=UTF-8\r\n"; 

$success = mail($to, $subject, $message, $headers);
	
	
	
	//$data['id']=$id;
	//$data['name']=$name;
	
	
	
	//echo json_encode($data);
		
	
?>