const checkboxes = document.querySelectorAll("input[type=checkbox]");
const form = document.querySelector("form");
const firstLastName = document.querySelector("[name='firstLastName']");
const email = document.querySelector("[name='email']");
const errors = [];

const validate = (e) => {
  e.preventDefault();
  errors.length = 0; //czyszczenie błędów
  firstLastName.value.trim() === "" ? errors.push("Wpisz imię i nazwisko") : null;
  email.value.trim() === "" ? errors.push("Wpisz e-mail") : null;
  !email.value.includes("@") && email.value.length > 0 ? errors.push("Wpisz poprawny adres e-mail") : null;
  !checkboxes[1].checked ? errors.push("Zaznacz zgodę marketingową nr. 1") : null;


  document.querySelector("ul") !== null ? document.querySelector("ul").remove() : null;

  //wyświetl błędy
  if (errors.length > 0) {
    const ulErrorList = document.createElement("ul");
    document.body.insertBefore(ulErrorList, form);

    for (error of errors) {
      const liElement = document.createElement("li");
      const liNodeText = document.createTextNode(error);
      liElement.appendChild(liNodeText);
      ulErrorList.appendChild(liElement);
    }
  }
}

const checkUncheck = () => {
  //event.target.checked
  // checkboxes[x].checked = event.target.checked;

  for (let x = 1; x < checkboxes.length; x++) {
    if (checkboxes[0].checked) {
      checkboxes[x].checked = true;
      checkboxes[x].disabled = true;
    } else {
      checkboxes[x].checked = false;
      checkboxes[x].disabled = false;
    }
  }
}

checkboxes[0].addEventListener("change", checkUncheck);
form.addEventListener("submit", validate);