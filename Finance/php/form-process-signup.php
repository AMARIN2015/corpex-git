<?php

$name= $_POST['name'];
$email = $_POST['email'];
$subject ="Newsletter Signup";
$to = "feardax@gmail.com";
$headers = "From: valente@valente.com <valente@valente.com>" . "\r\n" ;
// if($amiabot == "bot"){	
	if(($name && $email ) == ""){
		echo "Failed";
		}else{
		$message_email = "Name: ". $name . "\n" . "Email: ". $email ;
		mail($to,$subject,$message_email,$headers);
		echo "Success";
	}	
// }else{
// 	echo "Failed, Are you Human?";
// }