// $(document).ready(function(){ 
//   $("#myTab a").click(function(e){
//     e.preventDefault();
//     $(this).tab('show');
//   });
// });
// $('select').selectric();

$(document).ready(function(){
   jQuery(function($){
	   $(".js--phone").mask("+7 (999) 999-99-99");
   });
  $('.js--video-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    // asNavFor: '.slider-for',
    // dots: true,
    // centerMode: true,
    focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            // slidesToScroll: 3,
            // infinite: true,
            // dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            // slidesToScroll: 2
          }
        },
      ]     
  });


 $('.js--slick-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    draggable: false,
    // adaptiveHeight: true,
    // centerMode: true,
    asNavFor: '.js--slick-1-preview'
  });

  $('.js--slick-1-preview').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.js--slick-1',
    // dots: true,
    // centerMode: true,
    focusOnSelect: true,  
    arrows: false,
    // spaceBetween: 30 
      responsive: [
        {
          breakpoint: 470,
          settings: {
            slidesToShow: 3,
          }
        },
      ]     
  });

 $('.js--slick-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    draggable: false,
    // adaptiveHeight: true,
    // centerMode: true,
    asNavFor: '.js--slick-2-preview'
  });

  $('.js--slick-2-preview').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.js--slick-2',
    // dots: true,
    // centerMode: true,
    focusOnSelect: true,  
    arrows: false, 
    // spaceBetween: 30
      responsive: [
        {
          breakpoint: 470,
          settings: {
            slidesToShow: 3,
          }
        },
      ] 
  });

 $('.js--slick-3').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    draggable: false,
    // adaptiveHeight: true,
    // centerMode: true,
    asNavFor: '.js--slick-3-preview'
  });

  $('.js--slick-3-preview').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.js--slick-3',
    // dots: true,
    // centerMode: true,
    focusOnSelect: true, 
    arrows: false,  
    // spaceBetween: 30
      responsive: [
        {
          breakpoint: 470,
          settings: {
            slidesToShow: 3,
          }
        },
      ] 
  });

  //  $('.trio__lev-1').slick({
  //    slidesToShow: 1,
  //    slidesToScroll: 1,
  //    // asNavFor: '.slider-for',
  //    // dots: true,
  //    centerMode: true,
  //    //focusOnSelect: true,
  //    prevArrow: '.prev4',
  //    nextArrow: '.next4', 
  //    draggable: false  
  //  });

});
    var swiper1s = new Swiper('.swiper-container', {
        // pagination: '.swiper-pagination',
        // effect: 'cube',
        // longSwipes: false,
        // shortSwipes: false,
        simulateTouch: false,
        onlyExternal: true,
        nextButton: '.swiper-btn-next',
        prevButton: '.swiper-btn-prev',
        // paginationClickable: true
        // breakpoints : {
        //     // 320: {
        //     //   slidesPerView: 1,
        //     //   spaceBetween: 10
        //     // },
        //     // 1199: {
        //     //   // autoHeight: true, 
        //     // }
        // }
    });
    function swiper_to(index){
        swiper1s.slideTo(index-1);
        console.log(index);
    }; 



// $( window ).resize(function() {
//   swiper1s.update(true);
// });

  $(document).ready(function(){
    $("#start").sticky({topSpacing:0});
  });

  $(document).ready(function(){
    $(".js--scroll-btn").bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1200);
        e.preventDefault();
        return false;
    });



    (function () {
        var video      = document.querySelectorAll('.js-video-link'),
            popupVideo = document.querySelector('.popup-video');

        if (video === null) return;


        Array.prototype.forEach.call(video, function (value) {
            value.addEventListener('click', function (e) {
                e.preventDefault();
                popupVideo.classList.add('popup-video--act');
                var player = document.querySelector('.popup-video__player');
                // console.log(this, e.target);
                src = this.getAttribute('data-src');
                player.setAttribute('src', src);
            });
        });

        var closeVideo = document.querySelector('.popup-video__close');
        if (closeVideo === null) return;
        closeVideo.addEventListener('click', function (e) {
          e.preventDefault();
          popupVideo.classList.remove('popup-video--act');
          var player = document.querySelector('.popup-video__player');
          player.setAttribute('src', '');
        });

    })();

    $(".nav-link").bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1200);
        e.preventDefault();
        return false;
    });
    
});
   

$('[aria-expanded="false"].navbar-toggler').click(
  function(){
    $(this).toggleClass('burger-open');
  }
);


$('.action.action--close').click(
  function(){
    $(this).toggleClass('abc-open');
    // $('.preview').removeClass('preview--open');
  }
);
//  $('.variants__2s').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     draggable: false,
//     // adaptiveHeight: true,
//     // centerMode: true,
//     asNavFor: '.variants__2s-preview'
//   });

//   $('.variants__2s-preview').slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     asNavFor: '.variants__2s',
//     // dots: true,
//     // centerMode: true,
//     focusOnSelect: true,   
//   });