let paragraph = document.getElementById("opis");
let btn = document.querySelector('button');

btn.addEventListener('click',function addDescriptionToParagraph() {
  paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, praesentium.';
});