var stickyOffset = $('.header').offset().top;

$(window).scroll(function () {
  var sticky = $('.header'),
    scroll = $(window).scrollTop();
  var logo = $("#logo").first(); 
  var inst = $("#Instagramimg").first(); 
  var btnMenu = $(".menu-btn").first();

  if (jQuery(window).scrollTop() > 150) {
    sticky.addClass('scrolled');
    inst.attr("src","Images/instagramWhite.svg"); 
    logo.css("padding","20px");
    logo.attr("src","Images/LogoCup.svg"); 
    sticky.removeClass('notScroll');
    btnMenu.addClass('scrollLogo');
  } else {
    sticky.addClass('notScroll');
    logo.attr("src","Images/Logo.png"); 
    inst.attr("src","Images/instagram.svg"); 
    logo.css("padding","0px");
    btnMenu.removeClass('scrollLogo');
    sticky.removeClass('scrolled');
  }
});
