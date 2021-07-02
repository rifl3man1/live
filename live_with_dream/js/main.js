$(function () {

    $('.projects__slider').slick({
        slidesToShow: 3,
                arrows: true,
        dots: true,
        dotsClass: 'projects-dots',
               centerMode: true,
        centerPadding: '-50px',
        waitForAnimate: false,
      
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
                    slidesToScroll: 1,
                    centerPadding: '0px',
                  /*   arrows: false */
                }
            },
            {
                breakpoint: 878,
                settings: {
                    centerMode: false,
                   /*  centerPadding: '-34px', */
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    
                   /*  arrows: false */
                }
            }
        ]
    });
    $('.helpers__slider').slick({
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '-50px',
        dots: true,
        arrows: true,
        dotsClass: 'helpers-dots',
        easing: 'ease',
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
                    slidesToScroll: 1,
                    /* centerPadding: '20px', */
                    /* arrows: false */
                    centerPadding: '0px',
                }
            },
            {
                breakpoint: 878,
                settings: {
                    /* centerPadding: '0px', */
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    /* arrows: false */
                }
            }
        ]
    });
    $('.good__slider').slick({
        slidesToShow: 3,
        dots: true,
        centerMode: true,
        centerPadding: '-50px',
        easing: 'ease',
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
                    slidesToScroll: 1,
                    centerPadding: '0px',
                    /* arrows: false */
                }
            },
            {
                breakpoint: 878,
                settings: {
                    /* centerPadding: '24px', */
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                  /*   arrows: false */
                }
            }
        ]
    });



});