$(document).ready(function () {
  'use strict';


  // Navbar menu toggler button
  $('.nBar .navbar-toggler').click(function () {
		$(this).toggleClass('opened');
	});

  // Offers Slider
  $('.offersSlider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

  // Show popup when page load
  $(window).on('load',function(){
      $('#popupAlert').modal('show');
  });

  $(window).on('load',function(){
      $('#signup').modal('show');
  });







});
