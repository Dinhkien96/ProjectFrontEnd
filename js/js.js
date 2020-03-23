//slide logo
$(document).ready(function(){
  $(".owl-carousel .owl-nav").remove();
});
$(document).ready(function () {
    var owl = $(".partner-block");
    owl.owlCarousel({
        autoplay:true,
        rewind:1,
        autoplaytimeout:5000,
        items: 6,
        slideSpeed: 2000,
        itemsDesktop: [1200,6],
        itemsDesktopSmall: [900,5],
        itemsTablet: [700,4],
        itemsMobile: [480,2],
        responsive:{
        0:{
          items:2,
          nav:true
      },
      600:{
          items:2,
          nav:false
      },
      800:{
        items:4,
        nav:false
      },
      1000:{
          items:6,
          nav:true,
          loop:false
      }
    }
    });
    $(".next").click(function(){
        owl.trigger('next.owl.carousel');
    })
    $(".prev").click(function(){
        owl.trigger('prev.owl.carousel');
    })
});

$(document).ready(function () {
  var owl2 = $("#product-new-slide");
  owl2.owlCarousel({
      autoplay:true,
      rewind:1,
      autoplaytimeout:5000,
      items: 4,
      slideSpeed: 1000,
      pagination: false,
      itemsDesktop: [1200, 4],
      itemsDesktopSmall: [980, 3],
      itemsTablet: [767, 2],
      itemsMobile: [480, 1],
      responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        800:{
          items:3,
          nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    } 
  });
  $(".next").click(function(){
      owl2.trigger('next.owl.carousel');
  })
  $(".prev").click(function(){
      owl2.trigger('prev.owl.carousel');
  })
});

//scroll top
var btn = $('.back-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 150) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



// toggle icon 
// $(document).ready(function(){
//   $(".toggle").click(function(){
//     $(".inner-toggle").toggle();
//   });
// });

