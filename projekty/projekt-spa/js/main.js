const hamburger = document.querySelector('.hamburger');
const hamburgerClose = document.querySelector('.hamburger-close');
const navigationMenu = document.querySelector('header nav');


const form = document.querySelector(".appointment-form");
const formFields = document.querySelectorAll(".appointment-form > *");
const messageInfo = document.querySelector('.appointment-message-info');

const nav = document.querySelector('.nav-wrapper')
const about = document.querySelector('.about')
//hamburger menu
function showHideMenu() {
  if (navigationMenu.classList.contains('visibility')) {
    console.log('ukryte');
    navigationMenu.classList.toggle('visibility');
    hamburger.classList.remove('hidden');
  } else {
    console.log('widoczne');
    navigationMenu.classList.toggle('visibility');
    hamburger.classList.add('hidden');
  }
}
hamburger.addEventListener('click', showHideMenu);
hamburgerClose.addEventListener('click', showHideMenu);

//wyślij dane na serwer 
const sendDate = (data) => {
  fetch('https://akademia108.pl/api/ajax/post-appointment.php', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);

      messageInfo.textContent = `Dziękujemy ${res.appointment.name}. Zostałeś zapisany! `
    })
    .catch(error => messageInfo.textContent = error)
}

//obsługa formularza

const [name, email, service, phone, date, time, note] = formFields; // pola formularza
let formErrors = [];

const formValidation = (e) => {
  e.preventDefault();

  const clearErrorStyles = () => {
    formErrors.length = 0;
    for (let i = 0; i < 7; i++) {
      formFields[i].className = "";
    }
  }
  clearErrorStyles();

  const addError = (pole) => {
    console.log('eeeee');

    pole.classList.add('error');
    formErrors.push(pole.name);
  }

  if (name.value.trim() === '') addError(name)
  if (email.value.trim() === '') addError(email)
  if (service.value.trim() === '') addError(service)
  if (phone.value.trim() === '') addError(phone)
  if (date.value.trim() === '') addError(date)
  if (time.value.trim() === '') addError(time)
  if (note.value.trim() === '') addError(note)

  if (formErrors.length > 0) {
    messageInfo.textContent = "Uzupełnij pola: "
    messageInfo.textContent += formErrors.join(',');
    messageInfo.classList.add('visibility');
  } else {

    let data = {
      name: name.value,
      email: email.value,
      service: service.value,
      phone: phone.value,
      date: date.value,
      time: time.value,
      message: note.value
    };
    messageInfo.classList.add('visibility');
    sendDate(data);
    form.reset();
    // messageInfo.classList.remove('visibility');
  }
}


//scroll
// const scrollSpy = () => {
//   let y = window.scrollY;
//   console.log(y);

//   if (y > about.scrollHeight - 300) {
//     about.classList.add('show-section')
//   } else about.classList.remove('show-section')


// }

form.addEventListener('submit', formValidation);

// window.addEventListener('scroll', scrollSpy);