// Wyświetl nazwy miast w postaci listy numerowanej.
// Miasta zostały umieszczone w tablicy poniżej.
// Znacznik listy i elementów listy stwórz w JavaScript.
// Do każdego elementu listy dodaj klasę "city".
// Następnie za pomocą odpowiednich metod wyświetl listę na stronie.

// let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];
// Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it

// Podpowiedź przed wysłaniem zadania do sprawdzenia:
// - za pomocą JavaScript należy stworzyć elementy HTML, a potem dopiąć je do strony :)
// - do wyświetlania miast użyj pętli (dowolnego rodzaju)



let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

const ulList = document.createElement("ol");

for (citi of cities) {
  let liElement = document.createElement("li");
  let liTextNode = document.createTextNode(citi);
  liElement.className = "citi";
  liElement.appendChild(liTextNode);

  ulList.appendChild(liElement);
}

document.body.appendChild(ulList);