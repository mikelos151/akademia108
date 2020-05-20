function checkNumbers(num1,num2) {
  let sum =parseInt(num1)+ parseInt(num2);
  if (num1===20 || num2===20) return true;
  if (sum<=20) return true;
  return false
}

console.log(checkNumbers(18,3));
 