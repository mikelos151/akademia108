// 1. Stwórz przycisk - (element button)
// 2. Pod przyciskiem stwórz kwadrat (znacznik div) o wysokości i
// szerokości 200px oraz kolorze czerwonym
// 3. Po kliknięciu w przycisk kwadrat ma się przesunąć w prawo o 100px
// oraz ma się zmniejszyć do rozmiaru 100px na 100px - wykorzystaj do
// tego metodę animate() - animacja ma trwać 3 sekundy
// 4. Po zakończonej animacji zmień kolor kwadratu na niebieski - animacja
// zmiany ma trwać 5 sekund
// 5. Gdy kwadrat zmieni kolor na niebieski wyświetl wewnątrz niego napis
// w nagłówku h2 "Animacja zakończona"

$(document).ready(function () {
  const button = $('<button>Start</button>');
  const div = $('<div>').css({
    width: 200,
    height: 200,
    backgroundColor: "red",
    position: 'relative'
  })
  $('body').after(button);
  $('button').after(div);

  $('button').on("click", function () {
    $('div').animate({
        opacity: 1,
        marginLeft: 200,
        width: 100,
        height: 100,

      }, 3000,
      function () {
        $('div').css({
          backgroundColor: 'blue',
          transition: '5s'
        })
      })

    $('div').delay(5000).queue(function () {
      const h2 = $('<h2>Animacja zakończona</h2>').css({
        fontSize: 10,
        color: 'white',
        position: 'absolute',

      });
      $('div').prepend(h2);

    })
  })
})