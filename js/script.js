$('.slider').slick({
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
});

$('.slider-2').slick({
    centerMode: true,
    centerPadding: '0',
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:`<i class="fa-solid fa-angle-left left"></i>`,
    nextArrow:`<i class="fa-solid fa-angle-right right"></i>`,
    responsive: [
          {
            breakpoint: 767.99,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: false,
            }
          },
          {
            breakpoint: 575.99,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
            }
          },

      ]
});

