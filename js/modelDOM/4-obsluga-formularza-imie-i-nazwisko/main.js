const form = document.querySelector("form");
const fName = document.querySelector("input[name='fname']");
const lName = document.querySelector("input[name='lname']");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(`imię: ${fName.value}, nazwisko: ${lName.value}`);
})