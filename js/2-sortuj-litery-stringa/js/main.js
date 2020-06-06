// Napisz funkcję, która pobiera jako parametr stringa (czyli napis) i zwraca ten napis z posortowanymi literami.

// Następnie wywołaj funkcję i posortuj stringa "Akademia108", a wynik działania funkcji wyświetl w konsoli.

// Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it

const sortString = text => text.split('').sort().join('');
console.log(sortString("Akademia108"));
// https: //repl.it/@AdamKlin/2-sortuj-litery-stringa