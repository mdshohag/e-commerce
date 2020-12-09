<?php
	$email = $_REQUEST["email"];
	$to = "aljadeedfashion2020@gmail.com";
	$subject = "Web Feed Back";
	$header = "From: $email \r\n";
	
	$message = "";
	$message .= 'Name : ' . $_REQUEST["name"];
	$message .= "\r\n";
	$message .= 'Email : ' . $_REQUEST["email"];
	$message .= "\r\n";
	$message .= 'phone : ' . $_REQUEST["phone"];
	$message .= "\r\n";
	$message .= 'Subject : ' . $_REQUEST["sub"];
	$message .= "\r\n";
	$message .= "\r\n";
	$message .= 'Messages : ' . $_REQUEST["messege"];
	
	
	mail($to, $subject, $message, $header);
?>
<script type="text/javascript" language="javascript">
	alert("Thank you for your Feedback");
	location.replace("contact");
</script>
