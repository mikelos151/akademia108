$('document').ready(function () {
  $("#hamburger").on("click", function () {
    if ($('#left-nav').hasClass('hide-menu')) {
      $('#left-nav').removeClass('hide-menu')
    } else
      $('#left-nav').addClass('hide-menu')
    ''
  })

  $('a').on("click", function (e) {
    e.preventDefault();
    $('nav').animate({
        opacity: 0
      }, 1000,
      function () {
        window.location.href = e.target.href;
      })
  })
})