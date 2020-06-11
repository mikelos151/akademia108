const paragraphs = document.querySelectorAll("p");
const setBackground = () => {
  paragraphs[0].classList.add("bg-red");
  paragraphs[1].classList.add("bg-yellow");
}

document.querySelector("button").addEventListener("click", setBackground);