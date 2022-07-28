	$(document).ready(function() {
		$(".whatabstract__image-block").slick({
		  centerMode: false,
		  centerPadding: '60px',
		  // autoplay: true,
		  slidesToScroll: 1,
		  autoplaySpeed: 1500,
		  lazyLoad: 'ondemand',
		  slidesToShow: 3,
		  nextArrow: '<button class="whatabstract__btn"><img src="assets/img/arrow.svg" alt="arrow"></button>',
		  prevArrow: `<button class="whatabstract__btn_left"><img src="assets/img/arrow.svg" alt="arrow"></button>`,
		  responsive: [
    {
      breakpoint: 768.98,
      settings: {
        arrows: false,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        // centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
		});
	});
