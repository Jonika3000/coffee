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




let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.itemsSlider');

const end = () => {
  isDown = false;
  slider.classList.remove('active');
}

const start = (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

const move = (e) => {
  if (!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = (x - startX);
  slider.scrollLeft = scrollLeft - dist;
}

(() => {
  slider.addEventListener('mousedown', start);
  slider.addEventListener('touchstart', start);

  slider.addEventListener('mousemove', move);
  slider.addEventListener('touchmove', move);

  slider.addEventListener('mouseleave', end);
  slider.addEventListener('mouseup', end);
  slider.addEventListener('touchend', end);
})();
