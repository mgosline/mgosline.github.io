// Make it rain!

// var currentImageNumber = 0;
// When the user clicks the next button (#next)
// $('button').on('click', function() {
//   if (currentImageNumber < 1) {
//     currentImageNumber += 1;
//     console.log(currentImageNumber);
//   } else {
//     currentImageNumber = 0;
//     console.log(currentImageNumber);
//   }

  $(this).prevAll('.carousel-wrapper').find('img').hide();
  $(this).prevAll('.carousel-wrapper').find('img').toggle();

// });



$('.click-zone-left, .click-zone-right, .pagination-dots').on('click ', function(event) {
  event.preventDefault();
  $(this).prevAll('.carousel-wrapper').find('img').toggle();
  $(".pagination-dot").toggleClass("active");
});



$('.carousel-wrapper img').on('swipeleft swiperight', function() {
  $(this).siblings().toggle();
  $(this).toggle();
});

$('.hamburger').on('click', function () {
  // if ($('.menu').hasClass('open')) {
  //   $('.menu').removeClass('open');
  // } else {
  //   $('.menu').addClass('open');
  // }
$('.menu').toggleClass('open');
});
