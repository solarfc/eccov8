"use strict";

var myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log("width ".concat(myWidth, " \n height ").concat(myHeight));

window.onload = function () {
  /*
      loop fancybox
   */
  $.fancybox.defaults.loop = true;
  /*
      gallery slider
   */

  var gallerySlider = $('.video .video__content .video__content-gallery .slider'),
      galleryCenter;
  gallerySlider.on('init', function (slick, event) {
    galleryCenter = $('.slick-center');
    galleryCenter.prev().find('.slider-item').css({
      width: '123%',
      marginLeft: 0,
      opacity: 1,
      position: 'relative',
      top: 0,
      left: 0,
      zIndex: 9
    });
    galleryCenter.find('.slider-item').css({
      width: '90%',
      display: 'block',
      marginLeft: 'auto',
      opacity: 0.6,
      position: 'relative',
      top: 81,
      left: 0,
      zIndex: 7
    });
  });
  gallerySlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.video__content-gallery .counter span.counterSlide').text('0' + i + '/');
    $('.video__content-gallery .counter span.allSlide').text('0' + slick.slideCount);
  });
  gallerySlider.slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    speed: 300,
    arrows: true,
    prevArrow: $('.gallery-prev'),
    nextArrow: $('.gallery-next'),
    swipe: false
  });
  gallerySlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    if (currentSlide > nextSlide && (nextSlide !== 0 || currentSlide === 1) || currentSlide === 0 && nextSlide === slick.slideCount - 1) {
      galleryCenter = $('.slick-center').prev();
    } else if (currentSlide === nextSlide) {
      galleryCenter = $('.slick-center');
    } else {
      galleryCenter = $('.slick-center').next();
    }

    galleryCenter.prev().find('.slider-item').css({
      width: '123%',
      marginLeft: 0,
      opacity: 1,
      position: 'relative',
      top: 0,
      left: 0,
      zIndex: 9
    });
    galleryCenter.find('.slider-item').css({
      width: '90%',
      display: 'block',
      marginLeft: 'auto',
      opacity: 0.6,
      position: 'relative',
      top: 81,
      left: 0,
      zIndex: 7
    });
  });
  /*
      catalog slider
   */

  var sneakersSlider = $('.catalog__block.sneakers .catalog__block-photo .slider'),
      bootsSlider = $('.catalog__block.boots .catalog__block-photo .slider'),
      sandalsBlackSlider = $('.catalog__block.sandals-black .catalog__block-photo .slider'),
      sandalsWhiteSlider = $('.catalog__block.sandals-white .catalog__block-photo .slider');
  var sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 0,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    swipe: false,
    arrows: true,
    prevArrow: '',
    nextArrow: ''
  };
  sneakersSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.catalog__block.sneakers .catalog__block-photo .counter span.counterSlide').text('0' + i + '/');
    $('.catalog__block.sneakers .catalog__block-photo .counter span.allSlide').text('0' + slick.slideCount);
  });
  bootsSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.catalog__block.boots .catalog__block-photo .counter span.counterSlide').text('0' + i + '/');
    $('.catalog__block.boots .catalog__block-photo .counter span.allSlide').text('0' + slick.slideCount);
  });
  sandalsBlackSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.catalog__block.sandals-black .catalog__block-photo .counter span.counterSlide').text('0' + i + '/');
    $('.catalog__block.sandals-black .catalog__block-photo .counter span.allSlide').text('0' + slick.slideCount);
  });
  sandalsWhiteSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.catalog__block.sandals-white .catalog__block-photo .counter span.counterSlide').text('0' + i + '/');
    $('.catalog__block.sandals-white .catalog__block-photo .counter span.allSlide').text('0' + slick.slideCount);
  });
  sneakersSlider.slick(sliderSettings, sliderSettings.prevArrow = $('.sneakers-prev'), sliderSettings.nextArrow = $('.sneakers-next'));
  bootsSlider.slick(sliderSettings, sliderSettings.prevArrow = $('.boots-prev'), sliderSettings.nextArrow = $('.boots-next'));
  sandalsBlackSlider.slick(sliderSettings, sliderSettings.prevArrow = $('.sandals-black-prev'), sliderSettings.nextArrow = $('.sandals-black-next'));
  sandalsWhiteSlider.slick(sliderSettings, sliderSettings.prevArrow = $('.sandals-white-prev'), sliderSettings.nextArrow = $('.sandals-white-next'));
  /*
      review slider
   */

  var reviewSlider = $('.review .review__content .slider'),
      reviewCenter;
  reviewSlider.on('init', function (slick, event) {
    reviewCenter = $('.slick-center');
    reviewCenter.prev().find('.slider-item').css({
      marginLeft: 0
    });
    reviewCenter.find('.slider-item').css({
      marginLeft: 'auto'
    });
  });
  reviewSlider.slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    arrows: false
  });
  gallerySlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    if (currentSlide > nextSlide && (nextSlide !== 0 || currentSlide === 1) || currentSlide === 0 && nextSlide === slick.slideCount - 1) {
      galleryCenter = $('.slick-center').prev();
    } else if (currentSlide === nextSlide) {
      galleryCenter = $('.slick-center');
    } else {
      galleryCenter = $('.slick-center').next();
    }

    reviewCenter.prev().find('.slider-item').css({
      marginLeft: 0
    });
    reviewCenter.find('.slider-item').css({
      marginLeft: 'auto'
    });
  });
  /*
      timer
   */

  var myTimer = function myTimer() {
    var today = new Date(),
        tomorrow,
        timer,
        days,
        hours,
        minutes,
        seconds,
        newDay = 3;
    tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + newDay);
    timer = tomorrow.getTime() - today.getTime();
    days = parseInt(timer / (24 * 60 * 60 * 1000));
    hours = parseInt(timer / (60 * 60 * 1000)) % 24;
    minutes = parseInt(timer / (60 * 1000)) % 60;
    seconds = parseInt(timer / 1000) % 60;
    days = days > 9 ? days : "0".concat(days);
    hours = hours > 9 ? hours : "0".concat(hours);
    minutes = minutes > 9 ? minutes : "0".concat(minutes);
    seconds = seconds > 9 ? seconds : "0".concat(seconds);
    document.querySelector('#timer .numbers span.days').innerText = days.toString();
    document.querySelector('#timer .numbers span.hours').innerHTML = hours.toString();
    document.querySelector('#timer .numbers span.minutes').innerHTML = minutes.toString();
    document.querySelector('#timer .numbers span.seconds').innerHTML = seconds.toString();
    setTimeout(myTimer, 1000);
  };

  myTimer(); // /*
  //     change href on mobile
  //  */
  //
  // if(/iPhone|iPod|Android/i.test(navigator.userAgent)){
  //     document.querySelector('a.grande').href = '#formgrande';
  //     document.querySelector('a.lake').href = '#formlake';
  //     document.querySelector('a.lou').href = '#formlou';
  // }
};