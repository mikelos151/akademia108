// Napisz funkcję ze zmiennymi lokalnymi, która liczy sumę kwadratów elementów tablicy [0,1,2,3,4,5]. Funkcja przyjmuje jeden parametr - w/w tablicę z liczbami. Funkcja zwraca sumę kwadratow. Wyświetl wynik działania funkcji w konsoli.

const oblicz = array => {
  let result = 0;
  for (element of array) {
    result += Math.pow(element, 2)
  }
  return result;
}

console.log(oblicz([0, 1, 2, 3, 4, 5]));