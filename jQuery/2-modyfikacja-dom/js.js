// 1. Stwórz element button
// 2. Pod elementem button stwórz pięć paragrafów z treścią "To jest paragraf
// /numer_paragrafu/" - jako /numer_paragrafu/ nadaj numery kolejno 1,
// 2, 3, 4, 5
// 3. Po kliknięciu w przycisk ostatni paragraf ma zostać przeniesiony na
// pierwszą pozycję
// 4. Kolejne kliknięcia mają przenosić aktualnie ostatni paragraf na
// pierwszą pozycję
// 5. Stwórz kolejny przycisk (element button), który będzie miał działanie odwrotne, czyli będzie przenosił paragrafy z pierwszej pozycji na ostatnią

$(document).ready(function () {
  const button = $('<button>Up</button>');
  const button2 = $('<button>Down</button>');
  $('body').after(button);
  $('body').after(button2);

  for (let i = 5; i > 0; i--) {
    let paragraph = $(`<p>To jest paragraf : ${i}</p>`);
    $('button').eq(1).after(paragraph);
  }

  $('p').eq(4).css({
    backgroundColor: 'red'
  })

  $('button').on("click", function () {
    const firstParagraph = $('p').first();
    const lastParagraph = $('p').last();
    if ($(this).text() === 'Down') {
      $(firstParagraph).before(lastParagraph)
    } else {
      $(lastParagraph).after(firstParagraph)
    }
  })

})