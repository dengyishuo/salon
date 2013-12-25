jQuery(document).ready(function($) {
  
  $captions = $('.captions');

  $('.flexslider').flexslider({
      animation: "fade",
      controlNav: true,
      useCSS: false,
      touch: true,
<<<<<<< HEAD
      slideshowSpeed: 3000, 
=======
      slideshowSpeed: 7000, 
>>>>>>> 5511ac5868f9d5d08a84a5496432982ebe5ecb79
      pauseOnHover: true, 
      start: function() {
          $activecaption = $('.flex-active-slide .flex-caption');
          $captions.html($activecaption.text());        
      },
      after: function() {
          $activecaption = $('.flex-active-slide .flex-caption');
          $captions.html($activecaption.text());
      }
  });

});

