$(function () {

    $('.projects__slider').slick({
        slidesToShow: 3,
        // slidesToScroll: 2,
        arrows: true,
        dots: true,
        dotsClass: 'projects-dots',
        // speed: 100,
        // infinite: false,
        waitForAnimate: false,
        // variableWidth: true,  // теперь можно ставтиь ширину слайда .slick-slide {width:100%} box-sizing: border-box;
        easing: 'ease',
        // infinite:true
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1040,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 878,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });
    $('.helpers__slider').slick({
        slidesToShow: 3,
        dots: true,
        arrows: true,
        dotsClass: 'helpers-dots',
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1040,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 878,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    })
    $('.good__slider').slick({
        slidesToShow: 3,
        dots: true,
        arrows: true,
        dotsClass: 'good-dots',
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1040,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 878,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    })



});