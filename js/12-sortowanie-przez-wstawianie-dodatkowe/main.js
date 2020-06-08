// Zaimplementuj funkcję, która sortuje tablicę przez wstawianie.
// Funkcja przyjmuje parametr - tj. tablicę do posortowania, a zwraca posortowaną talicę.
// Wywołaj funkcję z tablicą [3,2,1,0, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]. Wynik jej działania wyświetl w konsoli.
// Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it
// Podpowiedź przed wysłaniem zadania do sprawdzenia:
// - znajdź w internecie opis działania sortowania przez wstawianie - polecamy filmik pokazujący działania tego algorytmu https://www.youtube.com/watch?v=ROalU379l3U
// - zastosuj pętlę w pętli :)
// [3,2,1,0, 34, 2
const insertSort = (array) => {
  let next;
  let prev;
  let counter = 0;
  for (let x = 1; x < array.length; x++) {
    for (let y = x; y > 0; y--) {
      if (array[y] < array[y - 1]) {
        actual = array[y];
        array[y] = array[y - 1];
        array[y - 1] = actual
      }

    }
  }

  console.log(array);
}

insertSort([3, 2, 1, 0, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]);