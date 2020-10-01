let myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log(`width ${myWidth} \n height ${myHeight}`);

window.onload = function () {

    /*
        date increase
     */

    let today = new Date(),
        tomorrow = new Date(),
        day,
        month,
        year,
        i = 3,
        period = document.querySelectorAll('p.period output');

    tomorrow.setDate(today.getDate() + i);

    day = tomorrow.getDate();
    month = tomorrow.getMonth() + 1;
    year = tomorrow.getFullYear().toString().slice(2);

    day = (day > 9) ? day : `0${day}`;
    month = (month > 9) ? month : `0${month}`;

    for(let i = 0; i < period.length; i++) {
        period[i].innerHTML = `${day}.${month}.${year}`;
    }

    /*
        slow scroll
     */


    /*
        loop fancybox
     */

    $.fancybox.defaults.loop = true;

    /*
        gallery slider
     */

    let gallerySlider = $('.video .video__content .video__content-gallery .slider'),
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

    gallerySlider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {

        let i = (currentSlide ? currentSlide : 0) + 1;

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
        swipe: false,
        responsive: [
            {
                breakpoint: 577,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    gallerySlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        if ((currentSlide > nextSlide && (nextSlide !== 0 || currentSlide === 1)) || (currentSlide === 0 && nextSlide === slick.slideCount - 1)) {
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

    let sneakersSlider = $('.catalog__block.sneakers .catalog__block-photo .slider'),
        bootsSlider = $('.catalog__block.boots .catalog__block-photo .slider'),
        sandalsBlackSlider = $('.catalog__block.sandals-black .catalog__block-photo .slider'),
        sandalsWhiteSlider = $('.catalog__block.sandals-white .catalog__block-photo .slider');

    const sliderSettings = {
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

    sneakersSlider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {

        let i = (currentSlide ? currentSlide : 0) + 1;

        $('.catalog__block.sneakers .catalog__block-photo .counter span.counterSlide').text('0' + i + '/');
        $('.catalog__block.sneakers .catalog__block-photo .counter span.allSlide').text('0' + slick.slideCount);
    });

    bootsSlider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {

        let i = (currentSlide ? currentSlide : 0) + 1;

        $('.catalog__block.boots .catalog__block-photo .counter span.counterSlide').text('0' + i + '/');
        $('.catalog__block.boots .catalog__block-photo .counter span.allSlide').text('0' + slick.slideCount);
    });

    sandalsBlackSlider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {

        let i = (currentSlide ? currentSlide : 0) + 1;

        $('.catalog__block.sandals-black .catalog__block-photo .counter span.counterSlide').text('0' + i + '/');
        $('.catalog__block.sandals-black .catalog__block-photo .counter span.allSlide').text('0' + slick.slideCount);
    });

    sandalsWhiteSlider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {

        let i = (currentSlide ? currentSlide : 0) + 1;

        $('.catalog__block.sandals-white .catalog__block-photo .counter span.counterSlide').text('0' + i + '/');
        $('.catalog__block.sandals-white .catalog__block-photo .counter span.allSlide').text('0' + slick.slideCount);
    });

    sneakersSlider.slick(sliderSettings, sliderSettings.prevArrow = $('.sneakers-prev'), sliderSettings.nextArrow = $('.sneakers-next'));
    bootsSlider.slick(sliderSettings, sliderSettings.prevArrow = $('.boots-prev'), sliderSettings.nextArrow = $('.boots-next'));
    sandalsBlackSlider.slick(sliderSettings, sliderSettings.prevArrow = $('.sandals-black-prev'), sliderSettings.nextArrow = $('.sandals-black-next'));
    sandalsWhiteSlider.slick(sliderSettings, sliderSettings.prevArrow = $('.sandals-white-prev'), sliderSettings.nextArrow = $('.sandals-white-next'));

    /*
        change active size
     */

    let allSize = document.querySelectorAll('.size figure span');

    for(let i = 0; i < allSize.length; i++) {
        for(let j = 0; j < allSize.length; j++) {
            allSize[j].addEventListener('click', function () {
                allSize[i].classList.remove('active');
                allSize[j].classList.add('active');
            });
        }
    }

    /*
        review slider
     */

    let reviewSlider = $('.review .review__content .slider'),
        reviewCenter;

    reviewSlider.on('init', function (slick, event) {
        reviewCenter = $('.slick-center');

        reviewCenter.prev().find('.slider-items').css({
            marginLeft: 0
        });

        reviewCenter.find('.slider-items').css({
            marginLeft: 'auto'
        });
    });

    reviewSlider.slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: true,
        centerPadding: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    arrows: true,
                    prevArrow: $('.review-prev'),
                    nextArrow: $('.review-next')
                }
            }
        ]
    });

    reviewSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        if ((currentSlide > nextSlide && (nextSlide !== 0 || currentSlide === 1)) || (currentSlide === 0 && nextSlide === slick.slideCount - 1)) {
            reviewCenter = $('.slick-center').prev();
        } else if (currentSlide === nextSlide) {
            reviewCenter = $('.slick-center');
        } else {
            reviewCenter = $('.slick-center').next();
        }

        reviewCenter.prev().find('.slider-items').css({
            marginLeft: 0
        });

        reviewCenter.find('.slider-items').css({
            marginLeft: 'auto'
        });
    });

    /*
        timer
     */

    const myTimer = () => {
        let today = new Date(),
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
        hours = parseInt(timer / (60* 60 * 1000)) % 24;
        minutes = parseInt(timer / (60 * 1000)) % 60;
        seconds = parseInt(timer / 1000) % 60;

        days = (days > 9) ? days : `0${days}`;
        hours = (hours > 9) ? hours : `0${hours}`;
        minutes = (minutes > 9) ? minutes : `0${minutes}`;
        seconds = (seconds > 9) ? seconds : `0${seconds}`;

        document.querySelector('#timer .numbers span.days').innerText = days.toString();
        document.querySelector('#timer .numbers span.hours').innerHTML = hours.toString();
        document.querySelector('#timer .numbers span.minutes').innerHTML = minutes.toString();
        document.querySelector('#timer .numbers span.seconds').innerHTML =seconds.toString();

        setTimeout(myTimer, 1000);
    };

    myTimer();

    /*
        animate
     */

    let fade = [
        $('.bucket'), $('.advantages__content h5'), $('.advantages__content p.medium'),
        $('.advantages__content-img'), $('.advantages__content-block__circle'), $('.advantages__content .to-order'),
        $('.video__content-clip h3'), $('.video__content-clip figure'), $('.video__content-gallery'),
        $('.stock__content h3'), $('.stock__content-img'), $('.stock__content p'),
        $('.catalog__block-photo'), $('.catalog__block-img'), $('.catalog__block-info'),
        $('.spray__content-text p'), $('.spray__content-text .price'), $('.spray__content-img'), $('.spray__content-order'),
        $('.review h4'), $('.review__content'),
        $('.delivery h4'), $('.delivery p.medium'), $('.delivery__content figure')
    ];

    for(let i = 0; i < fade.length; i++) {
        fade[i].waypoint(
            function (direction) {
                if(direction === 'down') {
                    $(this.element).addClass('animated');
                    this.destroy();
                }
            },
            {
                offset: function () {
                    return this.context.innerHeight() * 0.82;
                }
            }
        );
    }

    /*
        slow scroll
     */

    // let $root = $('html, body'),
    //     href;
    //
    // $('.to-order a, a.bucket').on('click', function () {
    //     href = $(this).attr('href');
    //     $root.animate({scrollTop: $(href).offset().top}, 800, function () {
    //         window.location.hash = href;
    //     });
    //     return false;
    // });

    let $root = $('html, body'),
        scrollLink = $('.to-order a, a.bucket'),
        scroll = (a, b, c) => {
          a.on('click', function () {
            let d = $(this).attr('href');
            b.animate({scrollTop: $(d).offset().top - c}, 800, function () {
                window.location.hash = d;
            });
            return false;
          });
        };

    scroll(scrollLink, $root, myHeight);


    /*
        change href on mobile
     */

    if(/iPhone|iPod|Android/i.test(navigator.userAgent)) {
        $('.to-order a, a.bucket').attr('href', '#mobile-order');
        scroll(scrollLink, $root, myHeight);
        // let mobileOrderPosition = document.querySelector('#mobile-order').offsetTop;
        // let a = mobileOrderPosition - myHeight;
        // console.log(a);
        // let $root = $('html, body');
        //
        // $('.to-order a, a.bucket').on('click', function () {
        //     $root.animate({scrollTop: a}, 800, function () {
        //         window.location.hash = href;
        //     });
        //     return false;
        // });


        window.addEventListener('scroll', function () {
            let topOfWindow = window.pageYOffset + myHeight,
                catalogPosition = document.querySelector('.catalog').offsetTop,
                sprayPosition = document.querySelector('.spray').offsetTop,
                footerPosition = document.querySelector('.footer').offsetTop,
                footerLinkPosition = document.querySelector('.footer__content .to-order.last').offsetTop,
                bucket = document.querySelector('.bucket');

            if (topOfWindow > catalogPosition && topOfWindow < sprayPosition) {
                bucket.classList.remove('animated');
            } else if (topOfWindow > footerPosition + footerLinkPosition) {
                bucket.classList.remove('animated');
            } else {
                bucket.classList.add('animated');
            }
        });

        window.addEventListener('resize', function () {
            myHeight = innerHeight;
            console.log(myHeight);

            let topOfWindow = window.pageYOffset + myHeight,
                catalogPosition = document.querySelector('.catalog').offsetTop,
                sprayPosition = document.querySelector('.spray').offsetTop,
                footerPosition = document.querySelector('.footer').offsetTop,
                footerLinkPosition = document.querySelector('.footer__content .to-order.last').offsetTop,
                bucket = document.querySelector('.bucket');

            if (topOfWindow > catalogPosition && topOfWindow < sprayPosition) {
                bucket.classList.remove('animated');
            } else if (topOfWindow > footerPosition + footerLinkPosition) {
                bucket.classList.remove('animated');
            } else {
                bucket.classList.add('animated');
            }
        });
    }
};