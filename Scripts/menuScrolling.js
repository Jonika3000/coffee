var stickyOffset = $('.header').offset().top;

$(window).scroll(function () {
  var sticky = $('.header'),
    scroll = $(window).scrollTop();
  var logo = $("#logo").first();
 /*  if (scroll >= stickyOffset)
  {
    sticky.addClass('fixed');
  } 
  else
  {
    sticky.removeClass('fixed');
  } */
   
  if (jQuery(window).scrollTop() > 150) {
    sticky.addClass('scrolled');
    logo.attr("src","Images/LogoCup.svg"); 
    sticky.removeClass('notScroll');
  } else {
    sticky.addClass('notScroll');
    logo.attr("src","Images/Logo.png"); 
    sticky.removeClass('scrolled');
  }
});
