
    $(document).ready(function() {

      var mainslider = $("#slider");
     
      mainslider.owlCarousel({
          singleItem : true,
          slideSpeed : 400,
          pagination: true,
          paginationSpeed : 400,
          rewindSpeed : 400,
          autoPlay: false,
          stopOnHover: false,
          addClassActive: true,
          afterInit: function(){
             var captionact = $( ".owl-item.active .scaption .h2-1" );
             var logoact = $( ".owl-item.active .scaption .mindplus-bulb" );
             var captionact2 = $( ".owl-item.active .scaption .h1-2" );
             captionact.addClass( "uk-animation-slide-bottom anim" );
             logoact.addClass( "uk-animation-slide-top anim" );
             captionact2.addClass( "uk-animation-slide-right anim" );
          },
          beforeMove: function(){
             var caption = $( ".owl-item.active .scaption .h2-1" );
             var logox = $( ".owl-item.active .scaption .mindplus-bulb" );
             var caption2 = $( ".owl-item.active .scaption .h1-2" );
             caption.removeClass( "uk-animation-slide-bottom anim" );
             logox.removeClass( "uk-animation-slide-top anim" );
             caption2.removeClass( "uk-animation-slide-right anim" );
          },
          afterMove: function(){
             var captionact = $( ".owl-item.active .scaption .h2-1" );
             var logoact = $( ".owl-item.active .scaption .mindplus-bulb" );
             var captionact2 = $( ".owl-item.active .scaption .h1-2" );
             captionact.addClass( "uk-animation-slide-bottom anim" );
             logoact.addClass( "uk-animation-slide-top anim" );
             captionact2.addClass( "uk-animation-slide-right anim" );
          }

      });

      $(".arrow-next").click(function(){
        mainslider.trigger('owl.next');
      })
      $(".arrow-prev").click(function(){
        mainslider.trigger('owl.prev');
      })

    
    });
