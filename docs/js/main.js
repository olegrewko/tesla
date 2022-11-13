$(document).ready(function(){
    // testimonial
  $('.slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true
});
//   home
// $('.homeslider').slick({
//     prevArrow: '<button type="button" class="slick-prev"></button>',
//     nextArrow: '<button type="button" class="slick-next"></button>'
                
//   });
      

});
$(function () {

  $('.header-btn').on('click', function () {
    $('.menu').addClass('active');

  });
  $('.close-btn').on('click', function () {
    $('.menu').removeClass('active');
  });

  

})