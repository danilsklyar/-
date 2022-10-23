$(function(){
    $('.header-slider').slick({
        dots:true,
        prevArrow: '<button type="button" class="slick-prev"><img src="./img/prev-arrow.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./img/next-arrow.svg" alt=""></button>',
        vertical: true,
        verticalSwiping: true,
        responsive: [
          {breakpoint: 361,
            settings: {
              dots: false,
              arrows: false,
              autoplay: true,
              autoplaySpeed: 3000,
            }
          }
        ]
    });


    $('.product__name').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.product__content',
        vertical: true,
        verticalSwiping: true,
        prevArrow: '<button type="button" class="product-prev"><img src="./img/product-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="product-next"><img src="./img/product-next.svg" alt=""></button>',
        responsive: [
          {
            breakpoint: 891,
            settings: {
              vertical: false,
              verticalSwiping: true,
              slidesToShow: 3,
              arrows: false, 
              dots: true, 
            },
            breakpoint: 461,
            settings: {
              vertical: false,
              verticalSwiping: true,
              slidesToShow: 1,
              arrows: false, 
              dots: true, 
            }
          }
        ]
      });
      $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        fade: true,
        arrows: false,
      });

      $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
      });
});