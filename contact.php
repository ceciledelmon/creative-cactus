<?php

$to = "creacactus@gmail.com"; # <--- Your Email 
$subject = "Email from website";

if ($_POST) {
	$nom = stripslashes($_POST['nom']);
	$prenom = stripslashes($_POST['prenom']);
	$email = trim($_POST['email']);
	$message = htmlspecialchars($_POST['message']);
	$error = '';

	if (!$nom) {
		$error .= '<p>Veuillez entrer votre nom</p>';
	}

	if (!$email) {
		$error .= '<p>Veuillez entrer votre email</p>';
	}

	if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
  	$error .= "<p>Veuillez entrer un email valide</p>";
  	}

	if (!$message) {
		$error .= '<p>Veuillez entrer un message</p>';
	}

	$mess = "Nom Complet : " . $prenom. " " . $nom . "\r\n";
	$mess .= "Email : " . $email . "\r\n";
	$mess .= "Message : " . $message . "\r\n";

	if (!$error) {
		$mail = mail($to, $subject, $mess,
			"From: ".$nom." <".$email.">\r\n"
  			."Reply-To: ".$nom."<".$email.">\r\n"
  		);

  		if ($mail) {
  			header("Location:index.html#row6");
  		}
  		else{
  			header("Location:index.html#row6");
      	exit();
  		}
	}
	
	else{
		echo $error;
	}
}

?>