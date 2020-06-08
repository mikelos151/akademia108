const power = (number, pow) => {
  let result = 1;
  for (let x = 0; x < pow; x++) {
    result *= number;
  }
  return result
}

console.log(power(2, 15));