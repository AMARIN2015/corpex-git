<?php

$name= $_POST['name'];
$email = $_POST['email'];
$phoneNumber= $_POST['phonenumber'];
// $contactemail = $_POST['contactemail'];
$null ="";
$message = $_POST['message'];
$subject ="Valent CPA Contact Form";
$to = $null;
$headers = "From: valente@valente.com <valente@valente.com>" . "\r\n" ;
// if($amiabot == "bot"){	
	if(($name && $email && $phoneNumber && $contactemail) == ""){
		echo "Failed";
		}else{
		$message_email = "Name: ". $name . "\n" . "Email: ". $email . "\n" .  "Phone Number: " . $phoneNumber . "\n" . "Message: " . $message;
		mail($to,$subject,$message_email,$headers);
		echo "Success";
	}	
// }else{
// 	echo "Failed, Are you Human?";
// }