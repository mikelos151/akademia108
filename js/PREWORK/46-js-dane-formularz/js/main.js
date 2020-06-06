const pName = document.querySelector('#name');
const pSurname = document.querySelector('#surname');
const pPhone = document.querySelector('#phone');
const btn = document.querySelector("button")

function showData() {
  const inputName = document.querySelector('#input-name').value;
  const inputSurname = document.querySelector('#input-surname').value;
  const inputPhone = document.querySelector('#input-phone').value;

  pName.textContent = 'Imię: ' +inputName;
  pSurname.textContent = 'Nazwisko: '+inputSurname;
  pPhone.textContent = 'Telefon: '+inputPhone;
}

btn.addEventListener('click',showData)