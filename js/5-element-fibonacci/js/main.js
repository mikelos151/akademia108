// Napisz funkcję, która zwraca wartość n-tego elementu ciągu fibbonaciego. Wynik działań i funkcji wyświetl w konsoli.
// Jako parametr funkcja przyjmuje n - czyli n-ty element ciągu fibbonaciego.

const fibonaci = (n) => {
  let result = 0;
  let array = [];


  for (let x = 0; x <= n; x++) {
    if (x == 0) {
      array.push(0);
      continue
    } else
    if (x == 1) {
      array.push(1);
      continue;
    } else if (x >= 2) {
      result = array[x - 2] + array[x - 1];
      array.push(result);
    }
    // break;
  }
  console.log(array);
}
fibonaci(15);

// 0	1	1	2	3	5	8	13	21	34	55	89	144	233	377	610	987	1597	2584	4181