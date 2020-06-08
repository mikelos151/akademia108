const letter = (text, letter) => {
  let stringArray = text.split('');
  let result = stringArray.filter(item => item.toLowerCase() === letter.toLowerCase()).length;
  return result;

}

console.log(letter(" Akademia 108", "e"));