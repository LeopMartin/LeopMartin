<?php
// Set the recipient email address
$to = 'leop.freelance@gmail.com';

// Set the email subject
$subject = 'New Contact Request';

// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// ... Validation des données du formulaire ...

// Build the email message
$message_body = "Name: $name\n\nEmail: $email\n\nMessage:\n$message";

// Send the email
if (mail($to, $subject, $message_body)) {
    echo 'Merci pour votre message. Nous vous contacterons bientôt.';
} else {
    echo 'Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer plus tard.';
}
?>