$(document).ready(function () {
    var base_url = window.location.origin ;
    $('#open-menu').on('click', function () {
        $('.header-body').toggleClass('active');
    });
    $('.distribution-slider-center').slick({
        arrows: true,
        swipe: true, // cho phĂ©p vuá»‘t slider
        pauseOnHover: true,
        mobileFirst: true,
        prevArrow: "<img class='a-left control-c prev slick-prev' src='"+base_url+"/wp-content/themes/alcpharmacy/dist/images/prev.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='"+base_url+"/wp-content/themes/alcpharmacy/dist/images/next.png'>"
        // fade: true,
    });

    $('.widget-news').slick({
        arrows: true,
        autoplay:true,
        swipe: true, // cho phĂ©p vuá»‘t slider
        pauseOnHover: true,
        mobileFirst: true,
        slidesToShow: 1,
        prevArrow: "<img class='a-left control-c prev slick-prev' src='"+base_url+"/wp-content/themes/alcpharmacy/dist/images/prev.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='"+base_url+"/wp-content/themes/alcpharmacy/dist/images/next.png'>"
        // fade: true,
    });
    $('.distribution-slider-mb').slick({
        autoplay:true,
        speed: 400,
        arrows: true,
        dots:true,
        swipe: true, // cho phĂ©p vuá»‘t slider
        pauseOnHover: true,
        mobileFirst: true,
        slidesToShow: 1,
        prevArrow: "<img class='a-left control-c prev slick-prev' src='"+base_url+"/wp-content/themes/alcpharmacy/dist/images/prev.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='"+base_url+"/wp-content/themes/alcpharmacy/dist/images/next.png'>"
        // fade: true,
    });

    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });
    $('.co-slider').owlCarousel({
        loop: true,
        margin: 5,
        nav: true,
        navText: ["<img src='"+base_url+"/wp-content/themes/alcpharmacy/dist/images/prev.png'>","<img src='"+base_url+"/wp-content/themes/alcpharmacy/dist/images/next.png'>"],
        dots: false,
        autoplay: true,
        items:4,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items:3
            },
            // breakpoint from 480 up
            576 : {
                items:4
            },

        }
    });
    $('.carousel-product').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: false,
        items:1,
    });
    $('.owl-carousel').find('.owl-nav').removeClass('disabled');
    $('.owl-carousel').on('changed.owl.carousel', function(event) {
        $(this).find('.owl-nav').removeClass('disabled');
    });

    $('.detail-sl').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ],
        prevArrow: "<img class='a-left control-c prev slick-prev' src='"+base_url+"/wp-content/themes/alcpharmacy/dist/images/prev.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='"+base_url+"/wp-content/themes/alcpharmacy/dist/images/next.png'>",
    });

    $(".slick-prev").click(function () {
        $(".slick-active").each(function () {
            var has = $(this).hasClass("slick-center");
            if(has) {
                $(this).find(".blur").removeClass("blur");
            }
        })
    });

    //search-pc
    $('#search-pc').click(function () {
        $('.form-search').toggleClass('active');
    });
    $("#close-form").click(function () {
        $('.form-search').removeClass('active');
    });

    //search-mobile

    $('#toggle-mobile').click(function () {
        if($(this).hasClass('search-img')){
            $(this).attr("src","/wp-content/themes/alcpharmacy/dist/images/close.png");
            $(this).attr('class','');
        }else{
            $(this).attr("src","/wp-content/themes/alcpharmacy/dist/images/search.png");
            $(this).attr('class','search-img');
        }

        $('body').toggleClass('hide-scroll');
        $('.form-search-mobile').toggle(500);

    });
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        focusOnSelect: true,
        cssEase: 'linear',
        touchMove: true,
        prevArrow: "<img class='a-left control-c prev slick-prev' src='"+base_url+"/wp-content/themes/alcpharmacy/dist/images/prev.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='"+base_url+"/wp-content/themes/alcpharmacy/dist/images/next.png'>"
    });
    var url = window.location;
    console.log(url);
    $('ul.sub-menu a').filter(function () {
        return this.href == url;
    }).parents('li').addClass('active');


    //Main menu
    // function mainmenu() {
    //     var navcollapse = $('.main-menu .navigation li');
    //     navcollapse.hover(function() {
    //         $(this).children('ul').stop(true, false, true).slideToggle(300);
    //     });
    //     //Submenu Dropdown Toggle
    //     if($('.main-menu .mobile-menu li.dropdown ul').length){
    //         $('.main-menu .mobile-menu li.dropdown').append('<div class="dropdown-btn"></div>');
    //
    //         //Dropdown Button
    //         $('.main-menu .mobile-menu li.dropdown .dropdown-btn').on('click', function() {
    //             $(this).prev('ul').slideToggle(500);
    //         });
    //     }
    // }

    // (function ($) {
    //     mainmenu();
    // })(jQuery);

    //Gallery Popup Hide / Show
    if($('.has-appointment-popup').length){

        //Show Gallery Popup
        $('.has-appointment-popup').click(function(e) {
            e.preventDefault();
            var target = $($(this).attr('href'));
            $('body').addClass('popup-visible');
            $(target).addClass('now-visible');
        });

        //Show Gallery Popup
        $('.popup-box .btn-close,.popup-box .bg-fade-layer').click(function() {
            $('.popup-box').removeClass('now-visible');
            $('body').removeClass('popup-visible');
        });
    }

    $('.banner-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        speed: 400,
        dots: false,
        // cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
        prevArrow:"<span class='btn-slider btn-prev'><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></span>",
        nextArrow:"<span class='btn-slider btn-next'><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></span>",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            },
        ],
    });
    // $('.fade').slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     fade: true,
    //     cssEase: 'linear'
    // });

    //Header Sticky
    function stickyHeader() {
        if ($('.stricky').length) {
            var strickyScrollPos = 100;
            if ($(window).scrollTop() > strickyScrollPos) {
                $('.stricky').addClass('stricky-fixed');
                $('.scroll-to-top').fadeIn(1500);
            } else if ($(this).scrollTop() <= strickyScrollPos) {
                $('.stricky').removeClass('stricky-fixed');
                $('.scroll-to-top').fadeOut(1500);
            }
        }
    }
    function factCounter() {
        if ($('.top-menu').length) {
            var strickyScrollPos = 100;
            if ($(window).scrollTop() > strickyScrollPos) {
                $('.stricky').addClass('stricky-fixed');
                $('.scroll-to-top').fadeIn(1500);
            } else if ($(this).scrollTop() <= strickyScrollPos) {
                $('.stricky').removeClass('stricky-fixed');
                $('.scroll-to-top').fadeOut(1500);
            }
        }
    }
    //Instance of fuction while Window Scroll event
    jQuery(window).on('scroll', function () {
        (function ($) {
            stickyHeader();
            factCounter();
        })(jQuery);
    });

    // $('.slide_info').slick({
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     dots: false,
    //     speed: 400,
    //     cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //                 dots: false
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1,
    //                 dots: true,
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // });

});