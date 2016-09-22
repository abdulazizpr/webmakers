
    
    // Config Options
    var slideout = new Slideout({
      'panel': document.getElementById('makers'),
      'menu': document.getElementById('menu-m'),
      'side': 'right',
      'padding': 256,
      'tolerance': 70
    });

    slideout.enableTouch();

    // Toggle button
    document.querySelector('.toggle-button').addEventListener('click', function() {
        slideout.toggle();
    });

    $('.m-link').on('click', function() {
      slideout.close();
    });

    // Close menu
    // document.querySelector('.menu').addEventListener('click', function(eve) {
    //       if (eve.target.nodeName === 'A') { slideout.close(); }
    // });


    

    // $(".menu-utama").autoHidingNavbar({
    //   hideOffset: 185,
    //   animationDuration: 100
    // });

    // $("#video-about").hover(function() {
    //     $(this).prop("controls", true);
    //   }, function() {
    //     $(this).prop("controls", false);
    // });

    // $("#myvideo2").click(function() {
    //  if( this.paused)
    //    this.play();
    //   else
    //     this.pause();
    // });
