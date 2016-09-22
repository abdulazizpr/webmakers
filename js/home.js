
    $(document).ready(function() {

      var mainslider = $("#slider");
     
      mainslider.owlCarousel({
          singleItem : true,
          slideSpeed : 400,
          pagination: true,
          paginationSpeed : 400,
          rewindSpeed : 400,
          autoPlay: true,
          stopOnHover: false,
          addClassActive: true,
          afterInit: function(){
             var captionact = $( ".owl-item.active .scaption .h2-1" );
             var logoact = $( ".owl-item.active .scaption .makers-logo" );
             captionact.addClass( "animated fadeInUp" );
             logoact.addClass( "animated fadeInDown" );
          },
          beforeMove: function(){
             var caption = $( ".owl-item.active .scaption .h2-1" );
             var logox = $( ".owl-item.active .scaption .makers-logo" );
             caption.removeClass( "animated fadeInUp" );
             logox.removeClass( "animated fadeInDown" );
          },
          afterMove: function(){
             var captionact = $( ".owl-item.active .scaption .h2-1" );
             var logoact = $( ".owl-item.active .scaption .makers-logo" );
             captionact.addClass( "animated fadeInUp" );
             logoact.addClass( "animated fadeInDown" );
          }

      });

      $(".arrow-next").click(function(){
        mainslider.trigger('owl.next');
      })
      $(".arrow-prev").click(function(){
        mainslider.trigger('owl.prev');
      })

    
    });

    $('.head-link').click(function(e) {
      e.preventDefault();
       
      var goto = $(this).attr('href');
   
      $('html, body').animate({
          scrollTop: $(goto).offset().top -75
      }, 500);
    });


    $('.xs-link').click(function(e) {
      e.preventDefault();
       
      var goto = $(this).attr('href');
   
      $('html, body').animate({
          scrollTop: $(goto).offset().top -49
      }, 500);
    });
    

    $('.faq-link').click(function(e) {
      e.preventDefault();
       
      var goto = $(this).attr('href');
   
      $('html, body').animate({
          scrollTop: $(goto).offset().top -112
      }, 500);
    });
