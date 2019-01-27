$(document).ready(function () {
  parallaxHeaderMousemove();
  parallaxHeaderScroll();
  parallaxAboutScroll();
  missionToWision();
  parallaxMissionScroll();
  parallaxGalleryScroll();
  parallaxContactScroll()
  parallaxGalleryMousemove();
  parallaxOfferScroll()
})

//PARALLAX FOR HEADER WHEN MOUSE MOVE
function parallaxHeaderMousemove() {
  $container = $('header'),
    container_w = $container.width(),
    container_h = $container.height();

  $(window).mousemove(function (event) {
    var x = event.pageX,
      y = event.pageY,
      left = 0,
      top = 0;

    left = container_w / 2 - x;
    top = container_h / 2 - y;

    //Parallax efect for header-box
    $('.header__box').css({
      'transform': 'translate(' + left / 10 + 'px, ' + top / 10 + 'px)'
    })
    //Parallax efect for header-box-shadow
    $('.header__box-shadow').css({
      'transform': 'translate(' + left / 10 + 'px, ' + top / 10 + 'px)'
    })
    //For the back balls
    $('.back-ball-1').css({
      'transform': 'translate(' + left / 10 + 'px, ' + top / 10 + 'px)'
    })
    $('.back-ball-2').css({
      'transform': 'translate(' + left / 20 + 'px, ' + top / 20 + 'px)'
    })
    $('.back-ball-3').css({
      'transform': 'translate(' + left / 10 + 'px, ' + top / 10 + 'px)'
    })
    //For the front balls//SLOWER
    $('.fore-ball-1').css({
      'transform': 'translate(' + left / 20 + 'px, ' + top / 20 + 'px)'
    })
    $('.fore-ball-2').css({
      'transform': 'translate(' + left / 20 + 'px, ' + top / 20 + 'px)'
    })
    $('.fore-ball-3').css({
      'transform': 'translate(' + left / 10 + 'px, ' + top / 10 + 'px)'
    })
    $('.fore-ball-4').css({
      'transform': 'translate(' + left / 20 + 'px, ' + top / 20 + 'px)'
    })
    $('.fore-ball-5').css({
      'transform': 'translate(' + left / 20 + 'px, ' + top / 20 + 'px)'
    })
    $('.fore-ball-6').css({
      'transform': 'translate(' + left / 10 + 'px, ' + top / 10 + 'px)'
    })
    $('.fore-ball-7').css({
      'transform': 'translate(' + left / 5 + 'px, ' + top / 5 + 'px)'
    })

    //For the silver balls
    $('.fore-ball-silver-1').css({
      'transform': 'translate(' + left / 10 + 'px, ' + top / 10 + 'px)'
    })
    $('.fore-ball-silver-2').css({
      'transform': 'translate(' + left /2 + 'px, ' + top /2 + 'px)'
    })
    $('.fore-ball-silver-3').css({
      'transform': 'translate(' + left / 40 + 'px, ' + top / 40 + 'px)'
    })
    $('.fore-ball-silver-4').css({
      'transform': 'translate(' + left / 10 + 'px, ' + top / 10 + 'px)'
    })
    $('.fore-ball-silver-5').css({
      'transform': 'translate(' + left / 20 + 'px, ' + top / 20 + 'px)'
    })
  })
}
//PARALLAX FOR HEADER WHEN SCROLLING
function parallaxHeaderScroll() {
  $(window).scroll(function(){
    var wScroll= $(this).scrollTop();
    //For the back balls
    $('.back-ball-1').css({
      'transform': 'translate(0px, -' + wScroll/4 + '%)'
    })
    $('.back-ball-2').css({
      'transform': 'translate(0px, -' + wScroll/4 + '%)'
    })
    $('.back-ball-3').css({
      'transform': 'translate(0px, -' + wScroll/6 + '%)'
    })
    //For the front balls
    $('.fore-ball-1').css({
      'transform': 'translate(0px, -' + wScroll/10+ '%)'
    })
    $('.fore-ball-2').css({
      'transform': 'translate(0px, -' + wScroll/10 + '%)'
    })
    $('.fore-ball-3').css({
      'transform': 'translate(0px, -' + wScroll/10 + '%)'
    })
    $('.fore-ball-4').css({
      'transform': 'translate(0px, -' + wScroll/10 + '%)'
    })
    $('.fore-ball-5').css({
      'transform': 'translate(0px, -' + wScroll/10 + '%)'
    })
    $('.fore-ball-6').css({
      'transform': 'translate(0px, -' + wScroll/10 + '%)'
    })

    //For the silver balls
    $('.fore-ball-silver-1').css({
      'transform': 'translate(0px, -' + wScroll + '%)'
    })
    $('.fore-ball-silver-2').css({
      'transform': 'translate(0px, -' + wScroll  + '%)'
    })
    $('.fore-ball-silver-3').css({
      'transform': 'translate(0px, -' + wScroll  + '%)'
    })
    $('.fore-ball-silver-4').css({
      'transform': 'translate(0px, -' + wScroll  + '%)'
    })
    $('.fore-ball-silver-5').css({
      'transform': 'translate(0px, -' + wScroll  + '%)'
    })
  });
}

//PARALLAX FOR ABOUT elements WHEN SCROLL
function parallaxAboutScroll() {
  $(window).scroll(function(){
    var wScroll= $(this).scrollTop();
    //For the back balls
    $('.about-fore-ball-silver-1').css({
      'transform': 'translate(0px, -' + wScroll/2 + '%)'
    })
    $('.about-fore-ball-silver-2').css({
      'transform': 'translate(0px, -' + wScroll/2 + '%)'
    })
    $('.about-fore-ball-silver-3').css({
      'transform': 'translate(0px, -' + wScroll/2 + '%)'
    })
  })
}

//PARALLAX FOR MISSION elements WHEN SCROLL
function parallaxMissionScroll() {
  $(window).scroll(function(){
    var wScroll= $(this).scrollTop();
    //For the back balls
    $('.mission-fore-ball-silver-1').css({
      'transform': 'translate(0px, -' + wScroll/2 + '%)'
    })
    $('.mission-back-ball-1').css({
      'transform': 'translate(0px, -' + wScroll/8 + '%)'
    })
  })
}
//PARALLAX FOR MISSION elements WHEN SCROLL
function parallaxGalleryScroll() {
  $(window).scroll(function(){
    var wScroll= $(this).scrollTop();
    //For the fore balls//faster speed
    $('.gallery-fore-ball-silver-1').css({
      'transform': 'translate(0px, -' + wScroll/2 + '%)'
    })
    $('.gallery-fore-ball-silver-2').css({
      'transform': 'translate(0px, -' + wScroll/2 + '%)'
    })
    $('.gallery-fore-ball-silver-3').css({
      'transform': 'translate(0px, -' + wScroll/2 + '%)'
    })
    $('.gallery-fore-ball-silver-4').css({
      'transform': 'translate(0px, -' + wScroll/2 + '%)'
    })
    $('.gallery-fore-ball-silver-5').css({
      'transform': 'translate(0px, -' + wScroll/2 + '%)'
    })
    $('.gallery-fore-ball-silver-6').css({
      'transform': 'translate(0px, -' + wScroll/2 + '%)'
    })
    $('.gallery-fore-ball-silver-7').css({
      'transform': 'translate(0px, -' + wScroll/2 + '%)'
    })
    //For the medium balls//medium speed
    $('.gallery-medium-ball-1').css({
      'transform': 'translate(0px, -' + wScroll/10 + '%)'
    })
    $('.gallery-medium-ball-2').css({
      'transform': 'translate(0px, -' + wScroll/10 + '%)'
    })
    $('.gallery-medium-ball-3').css({
      'transform': 'translate(0px, -' + wScroll/10 + '%)'
    })
    $('.gallery-medium-ball-4').css({
      'transform': 'translate(0px, -' + wScroll/10 + '%)'
    })
    $('.gallery-medium-ball-5').css({
      'transform': 'translate(0px, -' + wScroll/10 + '%)'
    })
    //For the back balls//slow speed
    $('.gallery-back-ball-1').css({
      'transform': 'translate(0px, -' + wScroll/20 + '%)'
    })
    $('.gallery-back-ball-2').css({
      'transform': 'translate(0px, -' + wScroll/20 + '%)'
    })
    $('.gallery-back-ball-3').css({
      'transform': 'translate(0px, -' + wScroll/20 + '%)'
    })
    $('.gallery-back-ball-4').css({
      'transform': 'translate(0px, -' + wScroll/20 + '%)'
    })
    $('.gallery-back-ball-5').css({
      'transform': 'translate(0px, -' + wScroll/20 + '%)'
    })
  })
}
//PARALLAX FOR OFFER elements WHEN SCROLL
function parallaxOfferScroll() {
  $(window).scroll(function(){
    var wScroll= $(this).scrollTop();
    //For the back balls
    //faster
    $('.offer-fore-ball-1').css({
      'transform': 'translate(0px, -' + wScroll/2 + '%)'
    })
    $('.offer-fore-ball-2').css({
      'transform': 'translate(0px, -' + wScroll/2 + '%)'
    })
    $('.offer-fore-ball-3').css({
      'transform': 'translate(0px, -' + wScroll/2 + '%)'
    })
    //slowe
    $('.offer-back-ball-1').css({
      'transform': 'translate(0px, -' + wScroll/10 + '%)'
    })
  })
}
//PARALLAX FOR CONTACT elements WHEN SCROLL
function parallaxContactScroll() {
  $(window).scroll(function(){
    var wScroll= $(this).scrollTop();
    //For the back balls
    //faster
    $('.contact-fore-ball-1').css({
      'transform': 'translate(0px, -' + wScroll/2 + '%)'
    })
    //slower
    $('.contact-medium-ball-1').css({
      'transform': 'translate(0px, -' + wScroll/20 + '%)'
    })
    $('.footer__ball-1').css({
      'transform': 'translate(0px, -' + wScroll/20 + '%)'
    })
  })
}

//Changing MISSION elemnts by clicking
var first = $('.mission-heading-first');
  var second = $('.mission-heading-second');
function missionToWision() {
  $('.button').click(function() {
    $('.mission__container__info p').toggle("slow");
    if(first.hasClass('active')){
      second.addClass('active');
      first.removeClass('active')
    }else {
      first.addClass('active');
      second.removeClass('active')
    }
  })
}

//PARALLAX FOR GALLERY-STR WHEN MOUSE MOVE
function parallaxGalleryMousemove() {
  $containerGallery = $('gallery-str'),
    containerGallery_w = $containerGallery.width(),
    containerGallery_h = $containerGallery.height();

  $(window).mousemove(function (event) {
    var x = event.pageX,
      y = event.pageY,
      left = 0,
      top = 0;

    left = containerGallery_w / 2 - x;
    top = containerGallery_h / 2 - y;

    //Parallax efect for gallery-items
    $('.grid-item-1-img').css({
      'transform': 'translate(' + left / 40 + 'px, ' + top / 40 + 'px)'
    })
    $('.grid-item-2-img').css({
      'transform': 'translate(' + left / 20 + 'px, ' + top / 20 + 'px)'
    })
    $('.grid-item-3-img').css({
      'transform': 'translate(' + left / 10 + 'px, ' + top / 20 + 'px)'
    })
    $('.grid-item-4-img').css({
      'transform': 'translate(' + left / 20 + 'px, ' + top / 20 + 'px)'
    })
    $('.grid-item-5-img').css({
      'transform': 'translate(' + left / 50 + 'px, ' + top / 30 + 'px)'
    })
    $('.grid-item-6-img').css({
      'transform': 'translate(' + left / 30 + 'px, ' + top / 30 + 'px)'
    })
  })
}