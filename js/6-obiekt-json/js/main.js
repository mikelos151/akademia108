// Pobierz do zmiennej jsonPracownicy poniższy obiekt:

// {
//     "pracownicy":[
//         {"firstName": "Krystian", "lastName": "Dziopa"}, 
//         {"firstName": "Anna", "lastName": "Szapiel"},
//         {"firstName": "Piotr", "lastName": "Żmuda"}
//     ]
// }
// Wyświetl go w konsoli, a następnie za pomocą pętli forEach przeiteruj po każdym pracowniku, oraz wyświetl w konsoli index elementu tablicy oraz imie i nazwisko pracownika.

let jsonPracownicy = {
  "pracownicy": [{
      "firstName": "Krystian",
      "lastName": "Dziopa"
    },
    {
      "firstName": "Anna",
      "lastName": "Szapiel"
    },
    {
      "firstName": "Piotr",
      "lastName": "Żmuda"
    }
  ]
}

console.log(jsonPracownicy);

jsonPracownicy.pracownicy.forEach((element, index) => {
  console.log(`${index} : ${element.firstName} ${element.lastName}`);
})