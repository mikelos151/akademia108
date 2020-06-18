$(document).ready(function () {
  // console.log($('.accordion-content'));
  let toggle = false;
  $('.accordion-item').on('click', function () {
    if (toggle) {
      $(this).children().animate({
          height: '0px'
        }, 500,
        function () {
          toggle = false;
        })
    } else if (!toggle) {
      $(this).children().animate({
          height: '500px'
        }, 500,
        function () {
          toggle = true;
        })
    }

  })
})