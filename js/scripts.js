$(".eventos-home .eventos").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    dots:false,
    arrows:false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
        slidesToShow: 2,
        centerMode: false,
        dots:true,
        }
      },
      {
        breakpoint: 992,
        settings: {
        slidesToShow: 1,
        centerMode: false,
        dots:true,
        }
      }
    ]
});

$('.menu-button, .menu li a').click(function () {
 $('.menu-button').toggleClass('menu-button-open');
 $('.nav-section').toggleClass('nav-section-open');
 $('.overlay').toggleClass('overlay-open');
});	