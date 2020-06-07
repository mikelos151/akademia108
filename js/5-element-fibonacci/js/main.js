// Napisz funkcję, która zwraca wartość n-tego elementu ciągu fibbonaciego. Wynik działań i funkcji wyświetl w konsoli.
// Jako parametr funkcja przyjmuje n - czyli n-ty element ciągu fibbonaciego.

const fibonaci = (n) => {
  let array = [];
  for (let x = 0; x <= n; x++) {
    (x < 2) ? array.push(x): array.push(array[x - 2] + array[x - 1]);
  }
  return array[n]
}

console.log(fibonaci(13));

// 0	1	1	2	3	5	8	13	21	34	55	89	144	233	377	610	987	1597	2584	4181