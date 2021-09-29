<?php

$name= $_POST['name'];
$email = $_POST['email'];
$phoneNumber= $_POST['phonenumber'];
$subject ="Valent CPA Call Back Request";
$to = "finny.k@acesoft.ca";
$headers = "From: valente@valente.com <valente@valente.com>" . "\r\n" ;
// if($amiabot == "bot"){	
	if(($name && $email && $phoneNumber) == ""){
		echo "Failed";
		}else{
		$message_email = "Name: ". $name . "\n" . "Email: ". $email . "\n" .  "Phone Number: " . $phoneNumber ;
		mail($to,$subject,$message_email,$headers);
		echo "Success";
	}	
// }else{
// 	echo "Failed, Are you Human?";
// }