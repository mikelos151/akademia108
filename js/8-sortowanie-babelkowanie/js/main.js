// Zaimplementuj funkcję, która sortuje tablicę przez bąbelkowanie.

// Funkcja przyjmuje parametr - tj. tablicę do posortowania, a zwraca posortowaną talicę.

// Wywołaj funkcję z tablicą [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]. Wynik jej działania wyświetl w konsoli.

// Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it

// Podpowiedź przed wysłaniem zadania do sprawdzenia:
// - znajdź w internecie opis działania sortowania bąbelkowego
// - zastosuj pętlę w pętli :)

const bubbleSort = (array) => {
  // let result = [];
  let temp;
  for (let x = 0; x < array.length; x++) {
    for (let y = 0; y < array.length - (x + 1); y++) {
      if (array[y] > array[y + 1]) {
        temp = array[y + 1];
        array[y + 1] = array[y];
        array[y] = temp;
      } else continue
    }
  }
  return array;
}

console.log(bubbleSort([12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]));