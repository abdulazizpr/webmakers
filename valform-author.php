<?php

// configure
$from = 'Web MakersInstitute <no-reply@makersinstitute.id>'; 
$sendTo = 'rianov.purnama@gmail.com';
$subject = 'MakersInstitute - Pendaftaran AUTHOR';
$fields = array('namad' => 'Nama depan', 'namab' => 'Nama belakang', 'email' => 'E-mail', 'prefsubject' => 'Preferred Subject', 'moreaud' => 'Interested in producing content for more than one audience', 'lnk-fb' => 'Facebook URL', 'lnk-tw' => 'Twitter Handle', 'lnk-li' => 'LinkedIn profile', 'lnk-gh' => 'Github account', 'lnk-up' => 'Upwork profile', 'lnk-so' => 'Stack Overflow account');
$okMessage = 'FORM PENDAFTARAN BERHASIL DIKIRIM - Terimakasih telah mendaftar Author di Makers Institute. Setelah melalui review kami akan segera menghubungi anda.';
$errorMessage = 'There was an error while submitting the form. Please try again later';


try
{
    $emailText = "FORM PENDAFTARAN AUTHOR :\n===========================\n\n";

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]:\n$value\n\n";
        }
    }

    mail($sendTo, $subject, $emailText, "From: " . $from);

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);
    
    header('Content-Type: application/json');
    
    echo $encoded;
}
else {
    echo $responseArray['message'];
}
