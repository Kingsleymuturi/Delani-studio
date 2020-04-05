<?php
 if(isset($_POST['submit'])){
   $name=$_POST['Name'];
   $email=$_POST['Email'];
   $message=$_POST['Message'];

   $to='kingsleymuturi9@gmail.com';
   $subject='Delani Feedback';
   $message="Name: ".$name."\n"."Email: ".$email."\n". "Wrote the following: "."\n\n"<div class="$msg"
   $headers="From: ".$email;

   if(mail($to, $subject, $message, $headers)){
     echo "<h1>Your message has been sent successfully! Thankyou"." ".$name.", We will contact you shortly!</h1>";
   }
   else{
     echo "<h1>Something went wrong! Try again";
   }
 }
?>