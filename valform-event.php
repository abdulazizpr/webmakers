<?php

// configure
$from = 'Web MakersInstitute <no-reply@makersinstitute.id>'; 
$sendTo = 'rianov.purnama@gmail.com'; // test mail rianov.purnama@gmail.com yogi.st@gmail.com
$subject = 'MakersInstitute - Pendaftaran Event';
$fields = array('nama-ev' => 'Nama Event','nama' => 'Nama lengkap', 'tgllhr' => 'Tanggal lahir', 'gender' => 'Jenis kelamin', 'alamat' => 'Alamat', 'email' => 'E-mail', 'notel' => 'No Telepon');
$okMessage = 'FORM PENDAFTARAN BERHASIL DIKIRIM - Terimakasih telah mendaftar event di Makers Institute. Setelah melalui review kami akan segera menghubungi anda.';
$errorMessage = 'There was an error while submitting the form. Please try again later';


try
{
    $emailText = "FORM PENDAFTARAN EVENT :\n=========================\n\n";

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
