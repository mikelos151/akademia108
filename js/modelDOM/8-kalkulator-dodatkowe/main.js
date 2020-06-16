// Stwórz kalkulator, który wykonuje podstawowe funkcje arytmetyczne, czyli:
// - Dodawanie
// - Odejmowanie
// - Mnożenie
// - Dzielenie
// Kalkulator operuje na liczbach całkowitych jak i zmiennoprzecinkowych.
// Kalkulator NIE MUSI mieć obsługi błędów np. dzielania przez 0.
// Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it

// Podpowiedź przed wysłaniem zadania do sprawdzenia:
// - do uruchomienia działań arytmetycznych możesz użyć funkcji w javascript - eval()
// - poglądowy widok kalkulatora jest w pliku dołączonym do zadania

const biezacaOperacja = document.querySelector("#operacja");
const dzialanie = document.querySelector("#dzialanie");
const buttons = document.querySelectorAll("#kalkulator>div:not(:first-child"); //wszystkie divy poza resultem

(() => {
  let poprzedniaLiczba = 0;
  let kropka = false;
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

      if (this.dataset.operator) {
        biezacaOperacja.innerText = "";
        kropka = false;
      }

      if (this.id === "rownasie") {
        biezacaOperacja.innerText = eval(dzialanie.innerText);
      }
      if (this.id === "procent") {
        // kasuję z działania ilość znaków róną poprzedniej liczbie
        dzialanie.innerText = dzialanie.innerText.substring(0, dzialanie.innerText.length - poprzedniaLiczba.length)
        let procent = (Number(poprzedniaLiczba) / 100);
        dzialanie.innerText += procent + "*";
      }
      //reset
      if (this.id === "del") {
        biezacaOperacja.innerText = "";
        dzialanie.innerText = "";
      } else
      if (this.id !== "rownasie" && this.id !== "procent") {
        if (this.id === "kropka") {
          if (!kropka)
            dzialanie.innerText += this.innerText;
          kropka = true
        } else
          dzialanie.innerText += this.innerText;
      }
      // if ((this.id.includes("num"))

    })
  }
})()