// Napisz klasę "Ksiazka", która ma właściwości "tytul", "autor", "przeczytana" (przeczytana jest typu Boolean) oraz jedną metodę "opiszKsiazke", która zwraca stringa opisującego tą książkę wg. wzoru "Książka ma tytuł Wiedźmin, autorem jest Andrzej Sapkowski i została przeczytana.".
// Stwórz 3 instancje obiektu tej klasy z czego jedna z książek ma być już przeczytana, a następnie stwórz nową tablicę globalną i dodaj do niej te 3 książki.
// Następnie napisz funkcję "iloscPrzeczytanych", która jako parametr przyjmuje tablicę obiektów (naszych książek, ktore stworzyliśmy), a zwraca nam ilość książek, ktore zostały przeczytane. Podczas iteracji po tablicy (wewnątrz tej funkcji) i sprawdzania, czy książka jest przeczytana, wywołuj także na obiekcie metodę opiszKsiazke(), a wynik jej działania wyświetlaj w konsoli.
// Na samym końcu wyświetl w konsoli ilość przeczytanych książekż


class Ksiazka {
  constructor(tytul, autor, przeczytana) {
    this.tytul = tytul;
    this.autor = autor;
    this.przeczytana = przeczytana
  }
  opiszKsiazke() {
    let stan = (!this.przeczytana ? 'nie ' : '') + 'została przeczytana';
    return `Ksiązka ma tytuł ${this.tytul}, autorem jest ${this.autor} i ${stan}`;
  }
}

let ksiazka1 = new Ksiazka("Wiedźmin", "Andrzej Sapkowski", true);
let ksiazka2 = new Ksiazka("W pustyni i w puszczy", "Henryk Sienkiewicz", false);
let ksiazka3 = new Ksiazka("Janko Muzykant", "Henryk Sienkiewicz", false);

let ksiazki = [];
ksiazki.push(ksiazka1, ksiazka2, ksiazka3);

const iloscPrzeczytanych = (tablicaObiektow) => {
  let iloscPrzeczytanych = 0;
  for (element in ksiazki) {
    console.log(ksiazki[element].opiszKsiazke());
    if (ksiazki[element].przeczytana) iloscPrzeczytanych++;
  }
  console.log(`\r\nIlość książek przeczytanych: ${iloscPrzeczytanych}`);

}

iloscPrzeczytanych(ksiazki);