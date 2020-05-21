const countries = [
	"Austria",
	"Belgium",
	"Bulgaria",
	"Croatia",
	"Cyprus",
	"Czech Republic",
	"Denmark",
	"Estonia",
	"Finland",
	"France",
	"Germany",
	"Greece",
	"Hungary",
	"Ireland",
	"Italy",
	"Latvia",
	"Lithuania",
	"Luxembourg",
	"Malta",
	"Netherlands",
	"Poland",
	"Portugal",
	"Romania ",
	"Slovakia",
	"Slovenia",
	"Spain",
	"Sweden",
];
const colors = [
	"White",
	"Yellow",
	"Blue",
	"Red",
	"Green",
	"Black",
	"Brown",
	"Azure",
	"Ivory",
	"Teal",
	"Silver",
	"Purple",
	"Navy blue",
	"Pea green",
	"Gray",
	"Orange",
	"Maroon",
	"Charcoal",
	"Aquamarine",
	"Coral",
	"Fuchsia",
	"Wheat",
	"Lime",
	"Crimson",
	"Khaki",
	"Hot pink",
	"Magenta",
	"Olden",
	"Plum",
	"Olive",
	"Cyan",
];
const fruits = [
	"Alfalfa Sprouts",
	"Apple",
	"Apricot",
	"Artichoke",
	"Asian Pear",
	"Asparagus",
	"Atemoya",
	"Avocado",
	"Bamboo Shoots",
	"Banana",
	// "Bean Sprouts",
	// "Beans",
	// "Beets",
	// "Belgian Endive",
	// "Bell Peppers",
	// "Bitter Melon",
	// "Blackberries",
	// "Blueberries",
	// "Bok Choy",
	// "Boniato",
	// "Boysenberries",
	// "Broccoflower",
	// "Broccoli",
	// "Brussels Sprouts",
	// "Cabbage",
	// "Cactus Pear",
	// "Cantaloupe",
	// "Carambola",
	// "Carrots",
	// "Casaba Melon",
	// "Cauliflower",
	// "Celery",
	// "Chayote",
	// "Cherimoya",
	// "Cherries",
	// "Coconuts",
	// "Collard Greens",
	// "Corn",
	// "Cranberries",
	// "Cucumber",
	// "Dates",
	// "Dried Plums",
	// "Eggplant",
	// "Endive",
	// "Escarole",
	// "Feijoa",
	// "Fennel",
	// "Figs",
	// "Garlic",
	// "Gooseberries",
	// "Grapefruit",
	// "Grapes",
	// "Green Beans",
	// "Green Onions",
	// "Greens",
	// "Guava",
	// "Hominy",
	// "Honeydew Melon",
	// "Horned Melon",
	// "Iceberg Lettuce",
	// "Jerusalem Artichoke",
	// "Jicama",
	// "Kale",
	// "Kiwifruit",
	// "Kohlrabi",
	// "Kumquat",
	// "Leeks",
];

function buildFormField(arr, parentElement, createdElement) {
	const pElement = document.querySelector(parentElement);

	for (let x = 0; x < arr.length; x++) {
		let option = document.createElement(createdElement);
		if (parentElement === "select") {
			option.text = arr[x];
			option.value = arr[x];
		} else {
			let textNode = document.createTextNode(arr[x]);
			option.appendChild(textNode);
		}
		pElement.appendChild(option);
	}
}

function addListenerToLi(arr) {
	let liElement = document.querySelectorAll("#ulFruits>li");
	let selectElement = document.querySelectorAll("#fruits>option");

	for (let x = 0; x < arr.length; x++) {
		console.log(liElement[x]);
		liElement[x].addEventListener("click", function (e) {
			selectElement[0].value = liElement[x].textContent;
		});
	}
}

document.querySelector("button").addEventListener("click", function (e) {
	e.preventDefault();
	console.log(document.querySelector("#fruits").value);
});
// buildFormField(countries, "#countries", "option");
// buildFormField(colors, "#colors", "option");
buildFormField(fruits, "#fruits", "option");

// buildFormField(countries, "#ulCountries", "li");
// buildFormField(colors, "#ulColors", "li");
buildFormField(fruits, "#ulFruits", "li");

addListenerToLi(fruits);
