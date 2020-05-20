const btnAdd = document.querySelector('#dodaj');
const btnRemove = document.querySelector('#usun');
const paragraph = document.querySelector('#tekst');

function addText() {
  paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, itaque!';
}

function removeText() {
  paragraph.textContent = '';
}

btnAdd.addEventListener('click',addText);
btnRemove.addEventListener('click',removeText);