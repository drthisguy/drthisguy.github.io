$(document).ready(function () {

  //to annimate the nabar-dropdown burger.
  $('.burger-button').on('click', () => {
    $('.animated-burger').toggleClass('open');
  });


  //init flickity carousels
  $('.carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    lazyLoad: true,
    fade: true
  });
});