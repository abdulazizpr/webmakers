
(function($) {
    "use strict";
    /*==============================
        Is mobile
    ==============================*/
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    }
    var windowWidth = window.innerWidth,
        windowHeight = $(window).height();


    /*==============================
        Main
    ==============================*/
    
    function main() {
        fnHeader();
        // GoogleMap();


        $(window).on('load resize', function() {
            var windowHeight = $(window).height();
            $('.hero, .hero .item-slider, .hero-slider').height(windowHeight);
        });
        /*==============================
            SELECT STYLE
        ==============================*/
        if ($('select').length) {
            $.each($('select'), function() {
                var selected = $(this).find('option:selected').text();
                $(this)
                    .wrap('<div class="select-custom"></div>')
                    .css({
                        'z-index':10,
                        'opacity':0,
                    })
                    .after('<span class="select">' +
                                selected +
                            '</span>' +
                            '<i class="fa fa-caret-down">' +
                            '</i>'
                    )
                    .change(function() {
                        var val = $('option:selected',this).text();
                        $(this).next().text(val);
                    });
            });
        }

        /*==============================
            Scroll To
        ==============================*/
        $(".scroll-to-menu .pi-btn").on('click', function(){
            $("html,body").animate({
                scrollTop:$("#the-menu").offset().top
            }, 800, 'easeInOutExpo');
            return false;
        });


        /*==============================
            Hero slider
        ==============================*/
        function navSliderImg() {
            $('.navslider-img').remove();
            if ($('.hero-slider').find('.owl-item.active').next().length === 0) {
                $('.hero-slider')
                    .find('.owl-next .icon')
                        .before(function () {
                            var imgfirst = $('.hero-slider').find('.owl-item').first().find('img').attr('src');
                            return '<div class="navslider-img" style="background-image: url(' + imgfirst + ')">';
                        });
            } else {
                $('.hero-slider')
                    .find('.owl-next .icon')
                        .before(function () {
                            var imgnext = $('.hero-slider').find('.owl-item.active').next().find('img').attr('src');
                            return '<div class="navslider-img" style="background-image: url(' + imgnext + ')">';
                        });
            }
            if ($('.hero-slider').find('.owl-item.active').prev().length === 0) {
                $('.hero-slider')
                    .find('.owl-prev .icon')
                        .before(function () {
                            var imglast = $('.hero-slider').find('.owl-item').last().find('img').attr('src');
                            return '<div class="navslider-img" style="background-image: url(' + imglast + ')">';
                        });
            } else {
                $('.hero-slider')
                    .find('.owl-prev .icon')
                        .before(function () {
                            var imgprev = $('.hero-slider').find('.owl-item.active').prev().find('img').attr('src');
                            return '<div class="navslider-img" style="background-image: url(' + imgprev + ')">';
                        });
            }
        }
        $(window).load(function() {
            if ($('.hero-slider').length > 0) {
                $('.hero-slider').owlCarousel({
                    autoPlay: false,
                    slideSpeed: 800,
                    navigation: true,
                    pagination: false,
                    singleItem: true,
                    autoHeight: true,
                    addClassActive : true,
                    transitionStyle: 'fade',
                    navigationText: ['<i class="icon arrow_left"></i>', '<i class="icon arrow_right"></i>'],
                    afterMove: function() {
                        navSliderImg();
                    }
                });
                navSliderImg();


                // custom slider img
                var background = $('.hero-slider').data('background');
                $('.hero-slider .item-slider img')
                    .before(function () {
                        var srcImg = $(this).attr('src');
                        return '<div class="item-img ' + background +  '" style="background-image: url(' + srcImg + ')">';
                    });
                /*$('.hero-slider')
                    .find('.item-slider')
                        .append('<div class="bg-overlay"></div>');*/
            }
        });


        /*==============================
            Twitter slider
        ==============================*/
        if ($(".twitter-slider").length > 0) {
            $(".twitter-slider").owlCarousel({
                autoPlay: 20000,
                slideSpeed: 300,
                navigation: true,
                pagination: false,
                singleItem: true,
                autoHeight: true,
                transitionStyle: 'fade',
                navigationText: ['<i class="icon arrow_left"></i>', '<i class="icon arrow_right"></i>']  
            });
        }
        /*==============================
            Client slider
        ==============================*/
        if ($(".client-slider").length > 0) {
            $(".client-slider").owlCarousel({
                autoPlay: 20000,
                slideSpeed: 300,
                navigation: true,
                pagination: false,
                items: 5,
                navigationText: ['<i class="icon arrow_left"></i>', '<i class="icon arrow_right"></i>']  
            });
        }
        /*==============================
            Testimonial slider
        ==============================*/
        if ($(".testimonial-slider").length > 0) {
            $(".testimonial-slider").owlCarousel({
                autoPlay: 20000,
                slideSpeed: 300,
                navigation: true,
                pagination: false,
                items: 3,
                navigationText: ['<i class="icon arrow_left"></i>', '<i class="icon arrow_right"></i>']  
            });
        }
        /*==============================
            Funfact slider
        ==============================*/
        if ($(".funfact-slider").length > 0) {
            $(".funfact-slider").owlCarousel({
                autoPlay: 20000,
                slideSpeed: 300,
                navigation: true,
                pagination: false,
                items: 4,
                navigationText: ['<i class="icon arrow_left"></i>', '<i class="icon arrow_right"></i>']  
            });
        }

        /*==============================
            Team slider
        ==============================*/
        if ($('.team-slider').length > 0) {
            $('.team-slider').owlCarousel({
                items: 3,
                itemsDesktop : [1199,3],
                itemsDesktopSmall : [992,2],
                itemsTablet: [767,2],
                itemsTabletSmall: [600,1],
                slideSpeed: 300,
                navigation: false,
                pagination: true,
                navigationText: ['<i class="icon arrow_left"></i>', '<i class="icon arrow_right"></i>']  
            });
        }
        /*==============================
            Latest slider
        ==============================*/
        if ($('.latest-slider').length > 0) {
            $('.latest-slider').owlCarousel({
                items: 3,
                itemsDesktop : [1199,3],
                itemsDesktopSmall : [992,2],
                itemsTablet: [767,2],
                itemsTabletSmall: [600,1],
                slideSpeed: 300,
                navigation: false,
                pagination: true,
                navigationText: ['<i class="icon arrow_left"></i>', '<i class="icon arrow_right"></i>']
            });
        }
        /*==============================
            Latest work slider
        ==============================*/
        if ($('.latest-work-slider').length > 0) {
            $('.latest-work-slider').owlCarousel({
                items: 4,
                itemsDesktop : [1199,3],
                itemsDesktopSmall : [992,2],
                itemsTablet: [767,2],
                itemsTabletSmall: [600,1],
                slideSpeed: 300,
                navigation: true,
                pagination: false,
                navigationText: ['<i class="icon arrow_left"></i>', '<i class="icon arrow_right"></i>']
            });
        }
        /*==============================
            Latest work slider
        ==============================*/
        if ($('.pricing-slider').length > 0) {
            $('.pricing-slider').owlCarousel({
                items: 3,
                itemsDesktop : [1199,3],
                itemsDesktopSmall : [992,2],
                itemsTablet: [767,2],
                itemsTabletSmall: [600,1],
                slideSpeed: 300,
                navigation: false,
                pagination: true,
                navigationText: ['<i class="icon arrow_left"></i>', '<i class="icon arrow_right"></i>']
            });
        }
        /*==============================
            Post slider
        ==============================*/
        if ($('.post-slider').length > 0) {
            $('.post-slider').owlCarousel({
                autoPlay: 20000,
                slideSpeed: 300,
                navigation: true,
                pagination: false,
                singleItem: true,
                autoHeight: true,
                transitionStyle: 'fade',
                navigationText: ['<i class="icon arrow_left"></i>', '<i class="icon arrow_right"></i>']  
            });
        }
        
        
        /*==============================
            Accordion
        ==============================*/
        $('.accordion-wrap .collapse').on('shown.bs.collapse', function() {
            $(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
        }).on('hidden.bs.collapse', function(){
            $(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
        });

        $('.bg-color, .bg-parallax, .bg-static')
            .parent('section')
                .css('background-color', 'transparent');

    }

    /*==============================
        Header
    ==============================*/ 

    function fnHeader() {
        
        $('.hero')
            .prev('header.header')
                .addClass('header-home');

        $(window).scroll(function() {
            var wScrollTop = $(window).scrollTop();
            if (wScrollTop > 80) {
                if ($('.header-fixed').length == 0) {
                    $('.header-sticky').addClass('animated fadeInDown header-fixed');
                }
            } else if(wScrollTop == 0){
                $('.header-sticky').removeClass('animated fadeInDown header-fixed');
            }
        });
        //Nav
        $('.on-navigation').find('.nav > li').on('click', '> a', function(evt) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 800, 'easeInOutExpo');
            evt.preventDefault();
        });
        $('.on-navigation').append('<div class="close-menu">X</div>');
        $(window).on('load resize', function() {
            var windowWidth = window.innerWidth,
                menuType = $('.on-navigation').data('menu-type'),
                $navigation = $('.on-navigation');
            if (windowWidth < menuType && !window.changeMenu) {
                var $nextItem = '<span class="next-item"><i class="fa fa-angle-right"></i></span>',
                    $back = '<li class="back"><a href="#">Back</a></li>';

                window.changeMenu = true;
                $navigation.addClass('menu-mobile').prependTo('#page-wrap');
                $('.close-menu, .open-menu').show();
                $('.menu-item-has-children', $navigation).each( function () {
                    $(this).prepend($nextItem);
                    $('> .sub-menu', this).prepend($back);
                }); 
                $('#openl').removeClass('pull-left');
                $('#openr').removeClass('pull-right');
            } 
            if (windowWidth >= menuType && window.changeMenu) {
                window.changeMenu = false;  
                $('.close-menu, .open-menu').hide();
                $navigation.removeClass('menu-mobile').appendTo('header.header .container-fluid');
                $('.close-menu, .open-menu').hide();
                $('.next-item, .back', $navigation).remove();
                $('#openl').addClass('pull-left');
                $('#openr').addClass('pull-right');
            }
        });
        $('.on-navigation').delegate('.next-item', 'click', function(event) {
            event.preventDefault();
            $(this).nextAll('.sub-menu').addClass('active');
        });
        $('.on-navigation').delegate('.back', 'click', function(event) {
            event.preventDefault();
            $(this).parent('.sub-menu').removeClass('active');
        });
        $('.on-navigation').delegate('.close-menu', 'click', function(event) {
            event.preventDefault();
            $('.on-navigation .sub-menu.active').removeClass('active');
        });
        $('.open-menu').on('click', function() {
            $('.on-navigation').addClass('navigation-active');
            /*$('#openr').removeClass('pull-right');
            $('#openl').removeClass('pull-left');*/
        });
        $('.close-menu').on('click', function() {
            $('.on-navigation').removeClass('navigation-active');
            /*$('#openr').addClass('pull-right');
            $('#openl').addClass('pull-left');*/
        });

        $('.on-navigation .sub-menu').each(function() {
            var offsetLeft = $(this).offset().left,
                width = $(this).width(),
                offsetRight = ($(window).width() - (offsetLeft + width));
          
            if (offsetRight < 60) {
                $(this)
                .removeClass('left')
                .addClass('right');
            } else {
                $(this)
                .removeClass('right');
            }
            if (offsetLeft < 60) {
                $(this)
                    .removeClass('right')
                    .addClass('left');
            } else {
                $(this)
                    .removeClass('left');
            }
        });


        $('.photostack').on('click', function() {
            $(this).find('.text-overlay, .bg-overlay').fadeOut(400);
        });


        $(window).on('load resize', function() {
            $('.portfolio-1, .blog-masonry')
                .css('max-width', $(window).width());
        });
        $(window).on('load', function() {
            if ($('.blog-masonry').length) {
                setTimeout(function() {
                    $('.blog-grid').isotope({
                        columnWidth: 0,
                        itemSelector: '.grid-item'
                    });
                }, 1);
            }
            setTimeout(function() {
                $('.blog-timeline')
                    .find('.grid-item').each(function() {
                        var offsetLeft = $(this).offset().left,
                            thisWidth = $(this).width(),
                            windowWidth = $(window).width(),
                            offsetRight = windowWidth - offsetLeft -thisWidth;
                        if (offsetLeft > offsetRight) {
                            $(this).append('<div class="line line-right"></div>');
                        }
                        if (offsetLeft < offsetRight) {
                            $(this).append('<div class="line line-left"></div>');
                        }
                    });
            }, 2);
        });

        $(window).on('load resize', function() {
            var headerHeight = $('#header').outerHeight(),
                footerHeight = $('#footer').outerHeight();
            $('.page-404 .page-content .tb, .page-comingsoon .page-content .tb').css('height', $(window).height() - headerHeight -footerHeight);
        });
    }


    /*==============================
        Portfolio filter
    ==============================*/
    function FilterPortfolio() {
        if ($('.portfolio').length) {
            var $container = $('.portfolio-container'),
                $container1 = $('.portfolio-container.portfolio-1, .portfolio-container.portfolio-2'),
                $container2 = $('.portfolio-container.portfolio-3');
            $container1.isotope({
                transitionDuration: '.8s',
                hiddenStyle: {
                    opacity: 0,
                    transform: 'perspective(100em) scale(0.2) rotateY(180deg)'
                },
                visibleStyle: {
                    opacity: 1,
                    transform: 'perspective(100em) scale(1) rotateY(0)'
                }
            });
            $container2.isotope({
                transitionDuration: '.8s',
                hiddenStyle: {
                    opacity: 0,
                    transform: 'perspective(100em) scale(0.2) rotateY(180deg)'
                },
                visibleStyle: {
                    opacity: 1,
                    transform: 'perspective(100em) scale(1) rotateY(0)'
                },
                masonry: {
                  columnWidth: '.col-md-3'
                }
            });
            $container.isotope({ filter: '.engineer' });
            $('.portfolio .filters a').on("click", function(){
                $('.select-filter').removeClass('select-filter');
                $(this).parent('li').addClass('select-filter');
                var selector = $(this).attr('data-filter');
                $container.isotope({ filter: selector });
                return false;
            });
        } 
    }
    /*============================
            justifiedGallery
    ==============================
    */
    function Gallery() {
        if (  $(".gallery-container").length ) {
            $(".gallery-container").justifiedGallery({
                rowHeight: 230,
                lastRow : 'justify',
                margins: 1
            });
        }
    }
    /*==============================
        Google map
    ==============================*/
    function GoogleMap() {
        if ($('#map').length) {
            // Option map
            var $map = $('#map'),
                mapZoom = $map.data('map-zoom'),
                lat = $map.data('map-latlng').split(',')[0],
                lng = $map.data('map-latlng').split(',')[1],
                marker = $map.data('map-marker'),
                width = parseInt($map.data('map-marker-size').split('*')[0], 10),
                height = parseInt($map.data('map-marker-size').split('*')[1], 10),
                grayscale = [
                    {featureType: 'all',  stylers: [{saturation: -100},{gamma: 0.50}]}
                ],
                blue = [
                    {featureType: 'all',  stylers: [{hue: '#0000b0'},{invert_lightness: 'true'},{saturation: -30}]}
                ],
                dark = [
                    {featureType: 'all',  stylers: [{ hue: '#ff1a00' },{ invert_lightness: true },{ saturation: -100  },{ lightness: 33 },{ gamma: 0.5 }]}
                ],
                pink = [
                    {"stylers": [{ "hue": "#ff61a6" },{ "visibility": "on" },{ "invert_lightness": true },{ "saturation": 40 },{ "lightness": 10 }]}
                ],
                light = [
                    {"featureType": "water","elementType": "all","stylers": [{"hue": "#e9ebed"},{"saturation": -78},{"lightness": 67},{"visibility": "simplified"}]
                    },{"featureType": "landscape","elementType": "all","stylers": [{"hue": "#ffffff"},{"saturation": -100},{"lightness": 100},{"visibility": "simplified"}]
                    },{"featureType": "road","elementType": "geometry","stylers": [{"hue": "#bbc0c4"},{"saturation": -93},{"lightness": 31},{"visibility": "simplified"}]
                    },{"featureType": "poi","elementType": "all","stylers": [{"hue": "#ffffff"},{"saturation": -100},{"lightness": 100},{"visibility": "off"}]
                    },{"featureType": "road.local","elementType": "geometry","stylers": [{"hue": "#e9ebed"},{"saturation": -90},{"lightness": -8},{"visibility": "simplified"}]
                    },{"featureType": "transit","elementType": "all","stylers": [{"hue": "#e9ebed"},{"saturation": 10},{"lightness": 69},{"visibility": "on"}]
                    },{"featureType": "administrative.locality","elementType": "all","stylers": [ {"hue": "#2c2e33"},{"saturation": 7},{"lightness": 19},{"visibility": "on"}]
                    },{"featureType": "road","elementType": "labels","stylers": [{"hue": "#bbc0c4"},{"saturation": -93},{"lightness": 31},{"visibility": "on"}]
                    },{"featureType": "road.arterial","elementType": "labels","stylers": [{"hue": "#bbc0c4"},{"saturation": -93},{"lightness": -2},{"visibility": "simplified"}]}
                ],
                blueessence = [
                    {featureType: "landscape.natural",elementType: "geometry.fill",stylers: [{ "visibility": "on" },{ "color": "#e0efef" }]
                    },{featureType: "poi",elementType: "geometry.fill",stylers: [{ "visibility": "on" },{ "hue": "#1900ff" },{ "color": "#c0e8e8" }]
                    },{featureType: "landscape.man_made",elementType: "geometry.fill"
                    },{featureType: "road",elementType: "geometry",stylers: [{ lightness: 100 },{ visibility: "simplified" }]
                    },{featureType: "road",elementType: "labels",stylers: [{ visibility: "off" }]
                    },{featureType: 'water',stylers: [{ color: '#7dcdcd' }]
                    },{featureType: 'transit.line',elementType: 'geometry',stylers: [{ visibility: 'on' },{ lightness: 700 }]}
                ],
                bentley = [
                    {featureType: "landscape",stylers: [{hue: "#F1FF00"},{saturation: -27.4},{lightness: 9.4},{gamma: 1}]
                    },{featureType: "road.highway",stylers: [{hue: "#0099FF"},{saturation: -20},{lightness: 36.4},{gamma: 1}]
                    },{featureType: "road.arterial",stylers: [{hue: "#00FF4F"},{saturation: 0},{lightness: 0},{gamma: 1}]
                    },{featureType: "road.local",stylers: [{hue: "#FFB300"},{saturation: -38},{lightness: 11.2},{gamma: 1}]
                    },{featureType: "water",stylers: [{hue: "#00B6FF"},{saturation: 4.2},{lightness: -63.4},{gamma: 1}]
                    },{featureType: "poi",stylers: [{hue: "#9FFF00"},{saturation: 0},{lightness: 0},{gamma: 1}]}
                ],
                retro = [
                    {featureType:"administrative",stylers:[{visibility:"off"}]
                    },{featureType:"poi",stylers:[{visibility:"simplified"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"simplified"}]
                    },{featureType:"water",stylers:[{visibility:"simplified"}]},{featureType:"transit",stylers:[{visibility:"simplified"}]},{featureType:"landscape",stylers:[{visibility:"simplified"}]
                    },{featureType:"road.highway",stylers:[{visibility:"off"}]},{featureType:"road.local",stylers:[{visibility:"on"}]
                    },{featureType:"road.highway",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"water",stylers:[{color:"#84afa3"},{lightness:52}]},{stylers:[{saturation:-17},{gamma:0.36}]
                    },{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#3f518c"}]}
                ],
                cobalt = [
                    {featureType: "all",elementType: "all",stylers: [{invert_lightness: true},{saturation: 10},{lightness: 30},{gamma: 0.5},{hue: "#435158"}]}
                ],
                brownie = [
                    {"stylers": [{ "hue": "#ff8800" },{ "gamma": 0.4 }]}
                ];
            var mapTheme;
            switch($map.data('snazzy-map-theme')){
                case 'grayscale' : {
                    mapTheme = grayscale;
                } break;
                case 'blue' : {
                    mapTheme = blue;
                } break;
                case 'dark' : {
                    mapTheme = dark;
                } break;
                case 'pink' : {
                    mapTheme = pink;
                } break;
                case 'light' : {
                    mapTheme = light;
                } break;
                case 'blue-essence' : {
                    mapTheme = blueessence;
                } break;
                case 'bentley' : {
                    mapTheme = bentley;
                } break;
                case 'retro' : {
                    mapTheme = retro;
                } break;
                case 'cobalt' : {
                    mapTheme = cobalt;
                } break;
                case 'brownie' : {
                    mapTheme = brownie;
                } break;
                default : {
                    mapTheme = grayscale;
                }
            }

            // Map
            if (isMobile.any()) {
                var noDraggableMobile = false;
            } else {
                var noDraggableMobile = true;
            }
            var MY_MAPTYPE_ID = 'custom_style';
            var featureOpts = mapTheme;
            var latlng = new google.maps.LatLng(lat, lng);
            var settings = {
                zoom: mapZoom,
                center: latlng,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
                },
                mapTypeControl: false,
                mapTypeId: MY_MAPTYPE_ID,
                scrollwheel: false,
                draggable: noDraggableMobile,
            };

            var map = new google.maps.Map(document.getElementById("map"), settings);
            var styledMapOptions = {
                name: 'Custom Style'
            };
            var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

            map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

            google.maps.event.addDomListener(window, "resize", function () {
                var center = map.getCenter();
                google.maps.event.trigger(map, "resize");
                map.setCenter(center);
            });
            var companyImage = new google.maps.MarkerImage(marker,
                new google.maps.Size(width, height),
                new google.maps.Point(0, 0)
            );
            var companyPos = new google.maps.LatLng(lat, lng);
            var companyMarker = new google.maps.Marker({
                position: companyPos,
                map: map,
                icon: companyImage,
                title: "Oringin",
                zIndex: 3
            });
        }
    }
    /*==============================
        SKILL PROGRESS
    ==============================*/
    function Skillbar() {
        $(window).scroll(function() {
            if ($('.skill').length) {
                var windowHeight = $(window).height(),
                    windowScroll = $(window).scrollTop(),
                    offset = $('.skillbar').offset().top,
                    heightSkill = $('.skill').height();
                if ((windowHeight + windowScroll) > offset && windowScroll < (offset + heightSkill)) {
                    $('.skillbar').find('.skillbar-inner')
                        .addClass('skillbar-run');

                    $.each($('.skillbar'), function () {
                        var $percent = $(this).closest('.skillbar-wrapper').find('.percent'),
                            percent = $percent.text(),
                            duration = $(this).data('duration'),
                            easing = $(this).data('easing');
                        if (isMobile.any()) {
                            $percent
                                .closest('.skillbar-wrapper')
                                .find('.skillbar-run')
                                .css({
                                    '-webkit-transform': 'translateX(' + percent + ')',
                                    '-moz-transform': 'translateX(' + percent + ')',
                                    '-ms-transform': 'translateX(' + percent + ')',
                                    '-o-transform': 'translateX(' + percent + ')',
                                    'transform': 'translateX(' + percent + ')',
                                    '-webkit-transition': 'none',
                                    '-moz-transition': 'none',
                                    '-ms-transition': 'none',
                                    '-o-transition': 'none',
                                    'transition': 'none'
                                });
                        } else {
                            $percent
                                .closest('.skillbar-wrapper')
                                .find('.skillbar-run')
                                .css({
                                    '-webkit-transform': 'translateX(' + percent + ')',
                                    '-moz-transform': 'translateX(' + percent + ')',
                                    '-ms-transform': 'translateX(' + percent + ')',
                                    '-o-transform': 'translateX(' + percent + ')',
                                    'transform': 'translateX(' + percent + ')',
                                    '-webkit-transition': 'all ' + duration + ' ' + easing,
                                    '-moz-transition': 'all ' + duration + ' ' + easing,
                                    '-ms-transition': 'all ' + duration + ' ' + easing,
                                    '-o-transition': 'all ' + duration + ' ' + easing,
                                    'transition': 'all ' + duration + ' ' + easing
                                });
                        }
                    });
                }
            }
        });
    }

    /*==============================
        BLOG GRID
    ==============================*/
    function masonry() {
        $(window).on('load', function() {
            if ($('.blog-grid').length) {
                $('.blog-grid').masonry({
                    columnWidth: '.grid-sizer',
                    itemSelector: '.post'
                });
            }
        });
    }


    function parallaxInit() {
        if ($('.bg-parallax').length) {
            $('.bg-parallax').each(function() {
                $(this).parallax("50%", 0.2);
            });
        }
    }

    function galleryImage() {
        new Photostack( document.getElementById( 'gallery-image' ), {
            callback : function( item ) {
                //console.log(item)
            }
        });
    }

    // READY FUNCTION
    $(document).ready(function() {
        main();
        Skillbar();
        Gallery();
        // GoogleMap();


        if ( $('#gallery-image').length ) {
            galleryImage();
        }
        // $("html").niceScroll({zindex: "99999991", styler:"fb",cursorcolor:"#0D0D0D", cursorwidth: '5', cursorborderradius: '0px', background: '#EB7924', cursorborder: ''});


        $(window).on('load', function() {
            parallaxInit();
            FilterPortfolio();

            //Preloader
            $('.preloader').addClass('load-anim');

            var dataLoading = $('.p-loading').data('loading');
              $('.preloader .p-loading')
                .prepend('<div class="progressFull" data-loading="' + dataLoading + '"></div>');
              setTimeout(function() {
                $('.preloader').addClass('preloader-hide');
              }, 500);
        });
        $("#modalMasuk").hide();
        $("#modalDaftar").hide();
        $('#masuk').on('click', function( e ) {
            Custombox.open({
                target: '#modalMasuk',
                effect: 'door',
                complete: function(){
                    $('[type=email]').focus();
                }
            });
            e.preventDefault();
        });
        $('#daftar, #daftar-two').on('click', function( e ) {
            Custombox.open({
                target: '#modalDaftar',
                effect: 'sign',
                complete: function(){
                    $('[type=email]').focus();
                }
            });
            e.preventDefault();
        });
        
    });
})(jQuery);