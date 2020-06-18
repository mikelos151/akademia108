$(document).ready(function () {

  $('.accordion-item').on('click', function () {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $(this).find('.accordion-content').slideUp()
    } else {
      $(this).addClass('open');
      $(this).find('.accordion-content').slideDown()
    }



  })
})



// if (toggle) {
//   $(this).children().animate({
//       height: '0px',
//       display: 'none'
//     }, 500,
//     function () {
//       toggle = false;
//     })
// } else if (!toggle) {
//     $(this).children().animate({
//         height: '500px',
//         display: ''
//       }, 500,
//       function () {
//         toggle = true;
//       })
//   }
// })