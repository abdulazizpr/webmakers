<?php
 
if(isset($_POST['email'])) {
 
 
    $email_to = "yogi.st@gmail.com";  //test mail
 
    $email_subject = "MakersInstitute - Pendaftaran TIZEN Academy";
 
     
 
     
 
    function died($error) {
 
        // your error code can go here
 
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
 
        echo "These errors appear below.<br /><br />";
 
        echo $error."<br /><br />";
 
        echo "Please go back and fix these errors.<br /><br />";
 
        die();
 
    }
 
     
 
    // validation expected data exists
 
    if(!isset($_POST['nama']) ||
 
        !isset($_POST['email']) ||
 
        !isset($_POST['tmakers']) ||

        //Contact Information:
 
        !isset($_POST['notel']) ||
 
        !isset($_POST['alamat']) ||

        !isset($_POST['kota']) ||

        !isset($_POST['kodepos']) ||

        //Ceritakan tentang diri anda:

        !isset($_POST['ttganda1']) ||

        !isset($_POST['ttganda3']) ||

        !isset($_POST['ttganda4']) ||

        //pendaftaran Beasiswa

        !isset($_POST['beasiswa']) ||

        //Program Gelombang

        !isset($_POST['progbatch']))  {
 
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
 
    }
 
     
 
    $nama_lengkap = $_POST['nama']; // required
 
    $email_user = $_POST['email']; // required
 
    $tmakers = $_POST['tmakers']; // required
 
    $telephone = $_POST['notel']; // not required
 
    $alamat = $_POST['alamat']; // required

    $kota = $_POST['kota']; // required

    $kodepos = $_POST['kodepos']; // required

    $tentang_anda1 = $_POST['ttganda1']; // required

    $tentang_anda3 = $_POST['ttganda3']; // required

    $tentang_anda4 = $_POST['ttganda4']; // required

    $beasiswa = $_POST['beasiswa']; // required

    $progbatch = $_POST['progbatch']; // required
 
     
 
    $error_message = "";
 
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_user)) {
 
    $error_message .= 'Alamat e-mail tidak valid.<br />';
 
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$nama_lengkap)) {
 
    $error_message .= 'Nama yang anda isikan tidak valid.<br />';
 
  }

  if(!preg_match($string_exp,$kota)) {
 
    $error_message .= 'Nama Kota yang anda isikan tidak valid.<br />';
 
  }
 
  if(strlen($tmakers) < 2) {
 
    $error_message .= 'Maaf anda belum mengisi darimana anda mengetahui Makers Institute.<br />';
 
  }
 
  if(strlen($error_message) > 0) {
 
    died($error_message);
 
  }
 
    $email_message = "FORM PENDAFTARAN TIZEN ACADEMI :\n\n\n";
 
     
 
    function clean_string($string) {
 
      $bad = array("content-type","bcc:","to:","cc:","href");
 
      return str_replace($bad,"",$string);
    }
 
     
 
    $email_message .= "Nama lengkap: ".clean_string($nama_lengkap)."\n\n";
 
    $email_message .= "E-mail: ".clean_string($email_user)."\n\n";

    $email_message .= "Mengetahui Makers Institute dari: ".clean_string($tmakers)."\n\n";
 
    $email_message .= "No. Telepone: ".clean_string($telephone)."\n\n";
 
    $email_message .= "Alamat: ".clean_string($alamat)."\n\n";

    $email_message .= "Kota: ".clean_string($kota)."\n\n";

    $email_message .= "Kode Pos: ".clean_string($kodepos)."\n\n";

    $email_message .= "Latar belakang pendidikan: ".clean_string($tentang_anda1)."\n\n";

    $email_message .= "Kenapa ingin belajar di Makers Institute: ".clean_string($tentang_anda3)."\n\n";

    $email_message .= "Apa yang ingin diperbuat dengan kemampuan baru: ".clean_string($tentang_anda4)."\n\n";

    $email_message .= "Pendaftaran Beasiswa: ".clean_string($beasiswa)."\n\n";

    $email_message .= "Program Gelombang: ".clean_string($progbatch)."\n\n";
 
     
 
     
 
// create email headers
 
$headers = 'From: '.$email_user."\r\n".
 
'Reply-To: '.$email_user."\r\n" .
 
'X-Mailer: PHP/' . phpversion();
 
@mail($email_to, $email_subject, $email_message, $headers);  
 
?>
 
 
 
<!DOCTYPE HTML>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Sent - Makers Institute</title>

  <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-57x57.png" />
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114x114.png" />
  <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-72x72.png" />
  <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144x144.png" />
  <link rel="apple-touch-icon-precomposed" sizes="60x60" href="apple-touch-icon-60x60.png" />
  <link rel="apple-touch-icon-precomposed" sizes="120x120" href="apple-touch-icon-120x120.png" />
  <link rel="apple-touch-icon-precomposed" sizes="76x76" href="apple-touch-icon-76x76.png" />
  <link rel="apple-touch-icon-precomposed" sizes="152x152" href="apple-touch-icon-152x152.png" />
  <link rel="icon" type="image/png" href="favicon-196x196.png" sizes="196x196" />
  <link rel="icon" type="image/png" href="favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
  <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
  <link rel="icon" type="image/png" href="favicon-128.png" sizes="128x128" />
  <meta name="application-name" content="&nbsp;"/>
  <meta name="msapplication-TileColor" content="#FFFFFF" />
  <meta name="msapplication-TileImage" content="mstile-144x144.png" />
  <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
  <meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
  <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
  <meta name="msapplication-square310x310logo" content="mstile-310x310.png" />
  
  <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
  <link rel="stylesheet" type="text/css" href="fonts/css/font-awesome.min.css" />

  <link rel="stylesheet" type="text/css" href="css/style.css" />
  <link rel="stylesheet" type="text/css" href="css/responsive.css" />

  <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

  <section id="header">
    <div class="container-fluid menu-utama hidden-xs" data-spy="affix" data-offset-top="75">
      <div class="row">
        <div class="col-md-2 logo pull-left">
          <a class="logomakers" href="http://makersinstitute.aegis.co.id/"><img class="img-responsive" alt="Makers Institute" src="img/logo-makersinstitute.png"></a>
        </div>
        <div class="col-md-10 topnav">
          <a class="daftar pull-right" href="pilih-kursus.html">Daftar</a>
          <ul class="nav pull-right">
            <li><a class="wearehiring visible-lg" href="karir.html">We are hiring</a></li>
            <li><a href="index.html#about-makers">Tentang Kami</a></li>
            <li><a href="index.html#appsacademy">Apps Academy</a></li>
            <li><a href="index.html#hiring-partner">Hiring Partner</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- mobile menu -->
  <nav id="menu-m" class="hidden-sm hidden-md hidden-lg">
    <ul class="nav">
      <li class="active m-link"><a href="index.html#about-makers">Tentang Kami</a></li>
      <li class="m-link"><a href="index.html#appsacademy">Apps Academy</a></li>
      <li class="m-link"><a href="index.html#hiring-partner">Hiring Partner</a></li>
      <li class="m-link"><a href="index.html#faqs">FAQ</a></li>
      <li><a href="#">Blog</a></li>
      <li class="divider-vertical"></li>
      <li><a href="pilih-kursus.html">Daftar</a></li>
      <li><a class="wearehiring-m" href="karir.html">We are hiring</a></li>
    </ul>
    <p>&nbsp;</p>
  </nav>

  <header id="header-m" class="" data-spy="affix" data-offset-top="50">
    <div class="mheader">
      <img src="img/logo-makersinstitute.png" class="img-responsive">
    </div>
    <button type="button" class="toggle-button navbar-toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
  </header>


  <div id="makers">

  <section class="aplikasi-daftar">
    <div class="container-fluid aplikasi-header">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <img src="img/icons/makers-Institute-icontransparent-tizen.png" class="img-responsive course-topicon">
            <h1>Tizen Academy</h1>
            <p class="sub-h">Menjadi Tizen Developer dalam 12 minggu</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container aplikasi-form">
      <div class="row">
        <div class="col-md-12 text-center">
          <h2>Form pendaftaran berhasil dikirim</h2>
          
          <p class="lead">Terimakasih telah mendaftar di Makers Institute.</p>
          <p>Setelah direview kami akan segera menghubungi anda.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="subscribe">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2 section-h">
          <h1>Subscribe</h1>
          <p>Dapatkan berita, program, event dan promo terbaru dari Makers Institute.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <form>
            <input type="email" name="usremail" class="placeholder-fix" onfocus="this.placeholder = ''" onblur="this.placeholder = 'alamat email'" placeholder="alamat email">
            <button type="submit" name="subscribe" class="form-control">Subscribe now</button>
          </form>
        </div>
      </div>
    </div>
  </section>


  <footer>
     <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <ul class="list-unstyled bottomnav">
            <li><a class="head-link" href="index.html#about-makers">Tentang Kami</a></li>
            <li><a class="head-link" href="index.html#hiring-partner">Hiring Partner</a></li>
            <li><a class="head-link" href="index.html#appsacademy">Apps Academy</a></li>
            <li><a class="head-link" href="index.html#alumni">Alumni</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
          <img src="img/logomakerswithtext-white.png" class="footerlogo">
          <h5>Makers Institute</h5>
          <p>Jl. Kyai Gede Utama no. 11 Dipati Ukur, Bandung<br>+62 22 250 2552</p>
          <ul class="list-unstyled social">
            <li><a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-facebook-f fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li><a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-instagram fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
          <p class="copyr">&copy;2016 Makers Institute. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>

  </div><!-- ./makers -->
  

  

  <script src="js/jquery-1.11.2.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/slideout.min.js"></script>
  <script src="js/main.js"></script>


</body>
</html>
 
 
 
<?php
 
}
 
?>