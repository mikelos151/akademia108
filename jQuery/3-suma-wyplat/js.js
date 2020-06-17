// Zaprogramuj przycisk #count-sum aby po kliknięciu pobrał wypłaty wszystkich pracowników i je zsumował.
// Uzyskany wynik wyświetl w elemencie o ID #sum.

// Zadanie zrób z wykorzystaniem biblioteki jQuery.

// Zadanie podsyłamy z użyciem https://repl.it

// Podpowiedzi:
// - oprogramuj zdarzenie "click" przycisku #count-sum
// - pobierz wszystkie wypłaty i za pomocą pętli je zsumuj
// - pobierz element o ID #sum i podmień mu treść na obliczoną sumę

const sumuj = () => {
  let result = 0;
  $('div[id^=person]>span:last-child()').each(function (index) {
    result += Number(($(this).text()));
  })
  $('#sum').text(result)
}

$('#count-sum').on("click", sumuj);