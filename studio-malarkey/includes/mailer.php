<?php

    // Get the variables from the form.
    $name = $_POST['name'];
    $email = $_POST['email'];
    $contactnumber = $_POST['contact-no'];
    $comments = $_POST['comments'];

    // Create some email parameters
    // and pass them to the mailer
    $email_from = "contact-form@studiomalarkey.co.uk";
    $email_subject = "New Form submission - Contact form";
    $email_body = "<p>You have received a new message from the user $name.\n".
       "Here is the message:</p>\n ".
       "<ul style='margin:0;padding:0;list-style:none;'>
           <li>Name: " .$name."</li>
           <li>email: " .$email."</li>
           <li>Contact number: " .$contactnumber."</li>
           <li>Comments: " .$comments."</li>
       </ul>
       <br/>
       <br/>".

    // Send the email contents
    $to = "lharby@gmail.com";
    $headers = 'Content-type: text/html; charset=utf-8' . "\r\n";
    $headers .= "From: $email_from \r\n";
    $headers .= "MIME-Version: 1.0 \r\n";
    $headers .= "Content-Transfer-Encoding: 8bit \r\n";
    $headers .= "cc: studiomalarkeyuk@gmail.com \r\n";
    mail($to, $email_subject, $email_body, $headers);

    // ideally we want to capture errors, and if there is
    // an error or some validation issue we should
    // redirect to a specific page (or not submit the form at all)
    // header("Location: error.php");

    // redirect to success page
    header("Location: https://studiomalarkey.co.uk/contact-success");
 ?>
