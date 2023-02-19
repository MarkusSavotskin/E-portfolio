<?php
if (isset($_POST['submit'])) {

    $name = $_POST['name']; // required
    $email = $_POST['email']; // required
    $message = $_POST['message']; // required

    $mailTo = "markus.savotskin@voco.ee";
    $headers = "From: E-portfoolio";
    $text = "Nimi: ".$name."\nEmail: ".$email.".\n\n"."Message: ".$message;

    mail($mailTo, "Uus sõnum", $text, $headers);
    header("Location: ../index.html?mailsend");
}
