// Napisz funkcję ze zmiennymi lokalnymi, która policzy sumę i iloczyn elementów tablicy [1, 2, 3, 4, 5, 6]. Funkcja przyjmuje jeden parametr - ww. tablicę z liczbami. Funkcja nie zwraca nic. Funkcja wyświetla wyniki w konsoli.

const oblicz = array => {
  let suma = 0;
  let iloczyn = 1;

  for (element of array) {
    suma += element;
    iloczyn *= element
  }
  console.log(suma, iloczyn);
}

oblicz([1, 2, 3, 4, 5, 6])

// https://repl.it/@AdamKlin/3-suma-iloczyn