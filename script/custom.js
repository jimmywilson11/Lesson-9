$(document).ready(function(){
  
  var $container = $(".masonry-container");
  $container.imagesLoaded(function () {
    $container.masonry({
      columnWidth: ".item",
      itemSelector: ".item"
    });
  });
  
  
  $(".owl-carousel").owlCarousel({
    autoPlay: 2000,
    items: 8
  });
});

if($(window).width() < 420) {
  $(".owl-carousel").owlCarousel({
    items: 3
  });
};

if($(window).width() < 576) {
  $(".owl-carousel").owlCarousel({
    items: 5
  });
};