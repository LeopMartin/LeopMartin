<?php

// Set the recipient email address
$to = 'leop.freelance@gmail.com';

// Set the email subject
$subject = 'New Contact Request';

// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Validate the form data
$errors = [];
if (empty($name)) {
    $errors[] = 'Name is required';
}
if (empty($email)) {
    $errors[] = 'Email is required';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Email is not valid';
}
if (empty($message)) {
    $errors[] = 'Message is required';
} elseif (strlen($message) <= 0) {
    $errors[] = 'Message must be at least 10 characters';
}

// If there are errors, display them to the user
if (!empty($errors)) {
    echo '<ul>';
    foreach ($errors as $error) {
        echo '<li>' . $error . '</li>';
    }
    echo '</ul>';
} else {
    // Set the email headers
    $headers = array(
        'From' => $email,
        'Reply-To' => $email,
        'X-Mailer' => 'PHP/' . phpversion()
    );

    // Build the email message
    $message_body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    // Send the email
    if (mail($to, $subject, $message_body, $headers)) {
        echo 'Merci pour votre message. Nous vous contacterons bientôt.';
    } else {
        echo 'Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer plus tard.';
    }
}
