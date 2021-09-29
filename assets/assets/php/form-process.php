<?php

$name= $_POST['name'];
$email = $_POST['email'];
$form_subject = $_POST['msg_subject'];
$message= $_POST['message'];
$subject ="iOS App Development Website Form Submission";
$to = "finny.k@acesoft.ca";
$amiabot= $_POST['amiabot'];
$headers = "From: iOS App Development <webmaster@acesoft.ca>" . "\r\n" ;
if($amiabot == "bot"){	
	if(($name && $email && $message && $form_subject) == ""){
		echo "Failed";
		echo "result:" . $name . $email . $streetaddress . $phoneNumber;
		}else{
		$message_email = "Name: ". $name . "\n" . "Email: ". $email . "\n" .  "Subject: " . $form_subject . "\n" . "Message: " . $message;
		mail($to,$subject,$message_email,$headers);
		echo "Success";
	}	
}else{
	echo "Failed, Are you Human?";
}