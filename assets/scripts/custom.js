$(document).ready(function () {
  let userAgent = navigator.userAgent;

  if (userAgent.match(/firefox|fxios/i)) {
    document.getElementsByTagName('body')[0].classList.add('firefox')
  }

  // SEARCH BAR SHOW ON BUTTON CLICK
  $(".search-btn").click(function () {
    $(".search-box").toggle();
    $(".search-box input[type='search']").focus();
    console.log("hi");
  });
  $(document).click(function (event) {
    var $target = $(event.target);
    if ($($target).closest(".search-btn, .search-box").length === 0) {
      $(".search-box").hide();
    }
  });

  // NAVBAR TOGGLE
  document.getElementById("hamburger-1").addEventListener("click", () => {
    document.getElementsByTagName("html")[0].classList.toggle("show-menu");
  });

  // SOLUTION SLIDER
  $(".solution-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendArrows: $(".solution-arrow"),
    nextArrow: '<div class="custom-arrow position-relative next-arrow"></div>',
    prevArrow: '<div class="custom-arrow position-relative prev-arrow"></div>',
  });

  // SOLUTION PRODUCT SYNC SLIDER
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // RESOURCES SLIDER
  $(".resources-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows: $(".resources-arrow"),
    nextArrow: '<div class="custom-arrow position-relative next-arrow"></div>',
    prevArrow: '<div class="custom-arrow position-relative prev-arrow"></div>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // MANUFACTURE SLIDER
  $(".manufacture-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: $(".manufacture-arrow"),
    nextArrow: '<div class="custom-arrow position-relative next-arrow"></div>',
    prevArrow: '<div class="custom-arrow position-relative prev-arrow"></div>',
  });

  // GLOBAL SUPPORT SLIDER
  $(".global-support-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: $(".global-support-arrow"),
    nextArrow: '<div class="custom-arrow position-relative next-arrow"></div>',
    prevArrow: '<div class="custom-arrow position-relative prev-arrow"></div>',
  });
});

// HEADER COLOR CHANGE ON SCROLL
let className = "bgWhite";
let scrollTrigger = 60;

window.onscroll = function () {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
};
