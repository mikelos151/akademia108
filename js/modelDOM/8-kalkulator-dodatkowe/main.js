const biezacaOperacja = document.querySelector("#operacja");
const dzialanie = document.querySelector("#dzialanie");
const buttons = document.querySelectorAll("#kalkulator>div:not(:first-child"); //wszystkie divy poza resultem

(() => {
  let poprzedniaLiczba = 0;
  let kropka = false; //tylko jedna kropka w numerze i działaniu

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {

      //sklejaj na wyświetlaczu liczby lub znak kropki
      if (this.id.includes("num") || this.id == "kropka") {
        if (this.id === "kropka") {
          if (!biezacaOperacja.innerText.includes(".")) {
            biezacaOperacja.innerText += this.innerText;
          }
        } else {
          biezacaOperacja.innerText += this.innerText;
          poprzedniaLiczba = Number(biezacaOperacja.innerText);
        }
      }

      //czyść wyświetlacz po kliknięciu na działanie + przywróć możliwość wstawiania kropki
      if (this.dataset.operator) {
        biezacaOperacja.innerText = "";
        kropka = false;
      }

      //obliczanie procentu
      if (this.id === "procent") {
        dzialanie.innerText = dzialanie.innerText.substring(0, dzialanie.innerText.length - poprzedniaLiczba.length)
        let procent = (Number(poprzedniaLiczba) / 100);
        dzialanie.innerText += procent + "*";
      }

      //nie dodawaj znaków rownosci i procentu do wyświetlacza - dodawaj wszyskie pozostałe znaki\cyfry
      if (this.id !== "rownasie" && this.id !== "procent") {
        if (this.id === "kropka") {
          if (!kropka)
            dzialanie.innerText += this.innerText;
          kropka = true
        } else
          dzialanie.innerText += this.innerText;
      }

      //kasowanie wyników / działań
      if (this.id === "del") {
        biezacaOperacja.innerText = "";
        dzialanie.innerText = "";
      }

      //obliczanie wyniku
      if (this.id === "rownasie") {
        if (dzialanie.innerText.length > 0)
          biezacaOperacja.innerText = eval(dzialanie.innerText);
        dzialanie.innerText = biezacaOperacja.innerText;
      }


    }) //koniec funkcji
  }
})()