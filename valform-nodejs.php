<?php

// configure
$from = 'Web MakersInstitute <no-reply@makersinstitute.id>'; 
$sendTo = 'rianov.purnama@gmail.com';
$subject = 'MakersInstitute - Pendaftaran NODE JS Academy';
$fields = array('nama' => 'Nama lengkap', 'email' => 'E-mail', 'tmakers' => 'Mengetahui Makers Institute dari', 'notel' => 'No Telepon', 'alamat' => 'Alamat', 'kota' => 'Kota', 'kodepos' => 'Kode Pos', 'ttganda1' => 'Latar belakang pendidikan', 'ttganda2' => 'Alasan ingin belajar dengan Makers', 'ttganda3' => 'Yang ingin diperbuat dengan kemampuan baru', 'beasiswa' => 'Program beasiswa', 'progbatch' => 'Jadwal gelombang yang diinginkan');
$okMessage = 'FORM PENDAFTARAN BERHASIL DIKIRIM - Terimakasih telah mendaftar di Makers Institute. Setelah melalui review kami akan segera menghubungi anda.';
$errorMessage = 'There was an error while submitting the form. Please try again later';


try
{
    $emailText = "FORM PENDAFTARAN NODE JS ACADEMY :\n=============================\n\n";

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
