const select = document.querySelectorAll("select");
const input = document.querySelectorAll("input[type=text]")
const textArea = document.querySelector("textarea");

const ul = document.querySelectorAll("ul");
const result = document.querySelector("#form-data")
const btnSubmit = document.querySelector("button[type=submit]");
const spanSelectedItem = document.querySelectorAll(".selectedItem");

for (let x = 0; x < ul.length; x++) {
    let li = ul[x].querySelectorAll("li");
    let option = select[x].querySelectorAll("option");

    //ukrywanie listy po wybraniu opcji
    spanSelectedItem[x].addEventListener("click", function() {
        ul[x].classList.toggle("hide");
    })

    for (let y = 0; y < li.length; y++) {
        li[y].addEventListener("click", function() {
            option[y].selected = 'selected';
            ul[x].classList.toggle("hide");
            spanSelectedItem[x].textContent = this.textContent;
        })
    }
}

btnSubmit.addEventListener("click", function(e) {
    e.preventDefault();
    let data = "";
    result.textContent = "";
    data += input[0].value + ";" + input[1].value;
    for (let x = 0; x < select.length; x++) {
        data += select[x].value;
    }
    data += textArea.value;
    result.textContent = data;
})