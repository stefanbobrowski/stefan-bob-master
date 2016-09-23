<?php 

	if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

	$name     	= $_POST['name'];
    $email    	= $_POST['email'];
    $message 	= $_POST['message'];
    $error		= '';

	$address = "stefanbobrowski1@gmail.com";

	$e_subject = 'New message from ' . $name . ', ' . ', ' . $email  . '.';

	$e_body = "You have a new message from: $name, $email" . PHP_EOL . PHP_EOL;
	$e_content = "Message: $message" . PHP_EOL . PHP_EOL;
	$e_reply = "You can contact $name via email: $email";

	$msg = wordwrap($e_body . $e_content . $e_reply,70);

	$headers = "From: $email" . PHP_EOL;
	$headers .= "Reply-To: $email" . PHP_EOL;
	$headers .= "MIME-Version: 1.0" . PHP_EOL;
	$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
	$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;
	   
	if(mail($address, $e_subject, $msg, $headers)) {
		echo "success";
	}

?>

